import React, { useEffect, useState } from 'react';
import { ScrollView, Alert, ActivityIndicator } from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import Screen from '../components/Screen'
import Categories from '../components/Categories'
import SearchBar from '../components/SearchBar'
import RestaurantItem from '../components/RestaurantItem'
import tw from 'tailwind-react-native-classnames';
import { localRestaurants } from '../data/localRestaurants';
import colors from '../configs/colors'

const YELP_API_KEY = "kY_Frp1HovS3WK6pQA8n0-mZZ0klhWyhyCG2RbpVK9lf0bv1r0DmBefVEar_N18H-yYberU90xea5kNd1MWIUiY9TKO-7-CpRb1KQJuIwHiwfL-QU-CENeftotVIYXYx";

const HomeScreen = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("San Francisco")
    const [activeTab, setActiveTab] = useState("Delivery");
    const [loading, setLoading] = useState(false)

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        setLoading(true)
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => {
                setLoading(false)
                if(json.error) return Alert.alert('Sorry', json.error.description);
                setRestaurantData(
                    json?.businesses?.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            }
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);


    return (
        <Screen style={tw`bg-white flex-1`}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchBar setCity={setCity} city={city} />
            <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
                <Categories />
                {loading && <ActivityIndicator size="large" color={colors.primary} style={tw`mt-2 mb-6`} />}
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
        </Screen>
    );
}

export default HomeScreen;

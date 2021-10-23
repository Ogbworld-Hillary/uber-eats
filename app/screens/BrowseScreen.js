import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Screen from '../components/Screen';
import { meals } from '../data/mealsData'
import tw from 'tailwind-react-native-classnames';
import colors from '../configs/colors';
import { Ionicons } from '@expo/vector-icons';

const BrowseScreen = () => {
    return (
        <Screen style={tw`flex-1 bg-white`}>
            <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
                <View style={tw`mt-2 mx-4 mb-1 relative justify-center`}>
                    <Ionicons 
                      name="search-sharp" 
                      size={20} 
                      color="#B1B1B3" 
                      style={tw`absolute left-4 z-10 self-center`} />
                    <TextInput style={[tw`rounded-full py-2 px-5 pl-10 bg-gray-100`, styles.input]} placeholder="Search anything" />
                </View>
                <Text style={tw`text-lg mt-2 ml-4`}>Top meals</Text>
                <View style={tw`flex-row mx-2 flex-wrap justify-between`}>
                    {meals?.map(({ title, image, id }) => (
                        <TouchableOpacity key={id} style={tw`w-1/2 my-2 px-2`}>
                            <View style={tw`rounded-lg overflow-hidden justify-center items-center`}>
                                <Image source={{ uri: image }} style={tw`w-full h-40`} />
                                <View style={[tw`absolute top-0 left-0 w-full h-full bg-black rounded-lg z-10`, { opacity: 0.5 }]} />
                                <Text style={tw`absolute self-center text-white w-3/4 text-center z-20`} numberOfLines={2}>{title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: colors.medium,
        borderWidth: 1,
    },
})

export default BrowseScreen;

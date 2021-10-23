import React from 'react';
import { View, Image, Text } from 'react-native';
import Screen from '../components/Screen';
import tw from 'tailwind-react-native-classnames';

const GroceryScreen = () => {
    return (
        <Screen style={tw`flex-1 bg-white`}>
            <View style={tw`flex-1 justify-center items-center`}>
              <Image source={require('../assets/images/store-open.gif')} 
                style={tw`w-72 h-72`} />
                <View style={tw`w-3/4`}>
                    <Text style={tw`text-lg text-center`}>Sorry, Grocery is not available right now</Text>
                    <Text style={tw`text-lg text-center text-xs text-gray-600 mt-3`}>Go to you near Grocery shop and buy 🙃😉</Text>
                </View>
            </View>
        </Screen>
    );
}


export default GroceryScreen;

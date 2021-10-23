import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen'
import tw from 'tailwind-react-native-classnames';
import AppHead from '../components/AppHead';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/authSlice'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../configs/firebase'

const AccountScreen = () => {
    const user = useSelector(selectUser)

    return (
        <Screen style={tw`flex-1 bg-white`}>
            <AppHead title={`Account`} icon="settings-outline" />
            <View style={tw`justify-center items-center`}>
                <View style={tw`rounded-full overflow-hidden w-48 h-48 mt-4`}>
                    <Image source={require('../assets/images/avatar.gif')} style={tw`w-48 h-48`} />
                </View>
                <Text style={tw`mt-4 text-3xl font-bold`}>{user?.name}</Text>
                <Text style={tw`text-lg text-indigo-900`}>{user?.email}</Text>
            </View>
            <View style={tw`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                <Text style={tw`text-gray-800 mt-2 text-lg mb-2`}>Saved places</Text>
                <SavedPlaces
                    title="Home"
                    text="Add home"
                    Icon={() => <AntDesign name="home" size={24} color="black" />}
                />
                <SavedPlaces
                    title="Word"
                    text="Add work"
                    Icon={() => <Ionicons name="md-briefcase-outline" 
                    size={24} 
                    color="black" 
                    />}
                />
            </View>
            <View style={tw`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                <Text style={tw`text-gray-800 mt-2 text-lg`}>Other options</Text>
                <TouchableOpacity onPress={() => auth.signOut()}>
                    <Text style={tw`text-green-900 mt-2`}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

export default AccountScreen;

const SavedPlaces = ({ title, text, Icon }) => (
    <TouchableOpacity style={tw`flex-row items-center my-3`}>
        <Icon />
        <View style={tw`ml-5`}>
            <Text style={tw`text-gray-800`}>{title}</Text>
            <Text style={tw`text-gray-600 text-xs mt-1`}>{text}</Text>
        </View>
    </TouchableOpacity>
)

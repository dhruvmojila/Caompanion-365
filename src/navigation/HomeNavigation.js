import {View, Text} from 'react-native';
import React from 'react';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import ImageScreen from '../screens/ImageScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen/Home';

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={ListingDetailScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

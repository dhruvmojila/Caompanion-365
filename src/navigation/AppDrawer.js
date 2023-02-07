import {View, Text} from 'react-native';
import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';

import ListingScreen from '../screens/ListingScreen';
import HomeNavigation from './HomeNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Calender from '../screens/Calender';

const Drawer = createDrawerNavigator();
const AppDrawer = () => {
  //   const Drawer = createDrawerNavigator();
  //   const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="HomeList" component={HomeNavigation} />
      <Drawer.Screen name="ListingScreen" component={ListingScreen} />
      <Drawer.Screen name="Calender" component={Calender} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;

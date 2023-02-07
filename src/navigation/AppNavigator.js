import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import NewListingButton from './NewListingButton';
import Home from '../screens/HomeScreen/Home';
import AppDrawer from './AppDrawer';

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 60, paddingBottom: 12},
      }}>
      <Tab.Screen
        name="AppDrawer"
        component={AppDrawer}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/images/home.png')}
              style={{tintColor: color, height: size, width: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ListingsEdit"
        component={ListingEditScreen}
        options={({navigation}) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate('ListingsEdit')}
            />
          ),
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/images/button.png')}
              style={{tintColor: color, height: size, width: size}}
            />
          ),
        })}
      />
      <Tab.Screen
        name="AccountDetails"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/images/account.png')}
              style={{tintColor: color, height: size, width: size}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

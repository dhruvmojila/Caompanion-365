import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import Home from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import ImageScreen from '../screens/ImageScreen';
import AppNavigator from './AppNavigator';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Reset Passwrod" component={ResetPasswordScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
        <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
        {/* <Stack.Screen name="Detail" component={ListingDetailScreen} />
        <Stack.Screen name="Image" component={ImageScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

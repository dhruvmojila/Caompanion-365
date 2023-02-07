import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onSignInPressed = () => {
    // console.warn('sign in');
    navigation.navigate('AppNavigator');
  };
  const onForgotPasswordPressed = () => {
    // console.warn('Frogot password');
    navigation.navigate('Forgot Password');
  };

  const onCreateOnePressed = () => {
    // console.warn('onCreateOnePressed');
    navigation.navigate('Sign Up');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={logo} style={[styles.logo, {height: height * 0.3}]} />
        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="tertiary"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onCreateOnePressed}
          type="tertiary"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 300,
    resizeMode: 'contain',
    tintColor: 'black',
  },
  root: {
    alignItems: 'center',
    padding: 20,
  },
});

export default SignInScreen;

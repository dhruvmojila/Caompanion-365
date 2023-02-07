import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';

const SocialSignInButtons = () => {
  const onSignInGooglePressed = () => {
    console.warn('onSignInGooglePressed');
  };
  const onSignInFacebookPressed = () => {
    console.warn('onSignInFacebookPressed');
  };
  const onSignInApplePressed = () => {
    console.warn('onSignInApplePressed');
  };
  return (
    <>
      <CustomButton
        text="Sign In With Facebook"
        onPress={onSignInFacebookPressed}
        bgColor="#E7eaf4"
        txtColor="#4765a9"
      />
      <CustomButton
        text="Sign In With Google"
        onPress={onSignInGooglePressed}
        type="tertiary"
        bgColor="#fae9ea"
        txtColor="#dd4d44"
      />
      <CustomButton
        text="Sign In With Apple"
        onPress={onSignInApplePressed}
        type="tertiary"
        bgColor="#e3e3e3"
        txtColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;

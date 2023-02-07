import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    // console.warn('onConfirmPressed');
    navigation.navigate('AppNavigator');
  };
  const onReSendPressed = () => {
    console.warn('onReSendPressed');
  };
  const onBacktoSignInPressed = () => {
    // console.warn('Sign In');
    navigation.navigate('Sign In');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>
        <CustomInput
          placeholder="Confirmation Code"
          value={code}
          setValue={setCode}
          secureTextEntry={false}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend Code"
          onPress={onReSendPressed}
          type="secondary"
        />
        <CustomButton
          text="Back to Sign In"
          onPress={onBacktoSignInPressed}
          type="tertiary"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 8,
  },
  text: {color: 'grey', marginVertical: 10},
  link: {color: '#FDb075'},
});

export default ConfirmEmailScreen;

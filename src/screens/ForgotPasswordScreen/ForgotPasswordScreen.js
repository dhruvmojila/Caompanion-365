import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const ResetPasswordScreen = () => {
  const [userName, setUserName] = useState('');

  const navigation = useNavigation();

  const onSendPressed = () => {
    // console.warn('onSentPressed');
    navigation.navigate('Reset Passwrod');
  };
  const onBacktoSignInPressed = () => {
    // console.warn('onBacktoSignInPressed');
    navigation.navigate('Sign In');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
          secureTextEntry={false}
        />

        <CustomButton text="Send" onPress={onSendPressed} />

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

export default ResetPasswordScreen;

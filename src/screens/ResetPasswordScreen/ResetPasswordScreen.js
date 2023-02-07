import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    // console.warn('onSubmitPressed');
    navigation.navigate('Home');
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
          placeholder="Confirmation Code"
          value={code}
          setValue={setCode}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="New Password"
          value={newPassword}
          setValue={setNewPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

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

export default ForgotPasswordScreen;

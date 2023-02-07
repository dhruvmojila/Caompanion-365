import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    // console.warn('onRegisterPressed');
    navigation.navigate('Confirm Email');
  };
  const onTermOfUsePressed = () => {
    console.warn('onTermOfUsePressed');
  };
  const onPrivacyPolicyPressed = () => {
    console.warn('onPrivacyPolicyPressed');
  };
  const onHaveAccountPressed = () => {
    // console.warn('Sign In');
    navigation.navigate('Sign In');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.link} onPress={onTermOfUsePressed}>
            {' '}
            Terms of Use
          </Text>
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy.
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign In"
          onPress={onHaveAccountPressed}
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

export default SignUpScreen;

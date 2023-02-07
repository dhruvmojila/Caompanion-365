import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import 'react-native-gesture-handler';
// import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
// import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
// import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
// // import Home from '/screens/Home';
// import SignInScreen from './src/screens/SignInScreen/SignInScreen';
// import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      <Navigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
export default App;

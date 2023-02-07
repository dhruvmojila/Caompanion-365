import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Sign In');
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LottieView
        loop={false}
        autoPlay={visible}
        // onAnimationFinish={onDone={() => setVisibleLike(false)}}
        source={require('../../../assets/animations/boot.json')}
        style={{height: 230, width: 230}}
      />
    </View>
  );
};

export default SplashScreen;

import {Text, StyleSheet} from 'react-native';
import React from 'react';

const CustomText = ({children, style, ...otherProps}) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#0c0c0c',
  },
});

export default CustomText;

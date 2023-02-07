import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButtom = ({onPress, text, type = 'primary', bgColor, txtColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          txtColor ? {color: txtColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_primary: {
    backgroundColor: '#3B71F3',
  },
  container_secondary: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },
  container_tertiary: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_tertiary: {
    color: 'grey',
  },
  text_secondary: {
    color: '#3B71F3',
  },
});

export default CustomButtom;

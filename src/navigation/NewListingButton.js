import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/button.png')}
          style={styles.btn}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#3B71F3',
    borderColor: 'white',
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  btn: {
    tintColor: 'white',
    height: 20,
    width: 20,
  },
});

export default NewListingButton;

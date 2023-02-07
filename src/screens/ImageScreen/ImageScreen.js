import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

const ImageScreen = ({navigation, route}) => {
  const image = {
    width: '100%',
    height: '100%',
    uri: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
  };
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: listing['image']}}
        resizeMode="contain"
        style={{height: '100%', width: '100%'}}></Image>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <View style={styles.closeIcon}>
          <Image
            style={styles.closeIcon}
            source={require('../../../assets/icons/arrow.png')}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          console.warn('delete');
        }}>
        <View style={styles.deleteIcon}>
          <Image
            style={styles.deleteIcon}
            source={require('../../../assets/icons/delete.png')}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    height: 30,
    width: 30,
    tintColor: 'white',
  },
  deleteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 30,
    width: 30,
    tintColor: 'white',
  },
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageScreen;

import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import DoubleClick from 'react-native-double-tap';
import Like from './Like';
import CustomText from './CustomText';

const CustomCard = ({
  title,
  subTitle,
  imageUrl,
  onPress,
  thumbnailUrl = 'default',
}) => {
  const [visibleLike, setVisibleLike] = useState(false);

  return (
    <DoubleClick
      singleTap={onPress}
      doubleTap={() => {
        setVisibleLike(true);
        // console.log(visibleLike);
      }}
      delay={200}>
      <Like onDone={() => setVisibleLike(false)} visible={visibleLike} />
      <View style={[styles.card, visibleLike ? {opacity: 0.1} : {opacity: 1}]}>
        {/* {thumbnailUrl === 'default' ? (
          <Image tint="light" style={styles.img} uri={imageUrl} />
        ) : ( */}
        <Image
          tint="light"
          style={styles.img}
          source={{uri: imageUrl}}
          preview={{uri: thumbnailUrl}}
        />
        {/* // )} */}
        <View style={styles.detailsContainer}>
          <CustomText style={styles.title}>{title}</CustomText>
          <CustomText style={styles.subTitle}>{subTitle}</CustomText>
        </View>
      </View>
    </DoubleClick>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    color: '#3B71F3',
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  },
});

export default CustomCard;

import {View, TouchableWithoutFeedback, Image, StyleSheet} from 'react-native';
import React from 'react';
import CustomText from '../../components/CustomCard/CustomText';

const ListingDetailScreen = ({navigation, route}) => {
  const formatDate = dateString => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const listing = route.params;

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Image', listing)}>
        <Image style={styles.image} source={{uri: listing['image']}} />
      </TouchableWithoutFeedback>
      <View style={styles.detailContainer}>
        <CustomText style={styles.title}>{listing['text']}</CustomText>
        <CustomText style={styles.price}>
          {formatDate(listing['publishDate'])}
        </CustomText>
        {/* 
        <View style={styles.userContainer}>
          <ListItem
            image={{uri: listing['owner']['picture']}}
            title={`${listing['owner']['title']} ${listing['owner']['firstName']} ${listing['owner']['lastName']}`}
            subTitle={'Likes ' + listing['likes']}
            // onPress={() => navigation.navigate("account")}
          />
        </View> */}
        <View style={styles.containera}>
          <Image
            style={styles.imagea}
            source={{uri: listing['owner']['picture']}}
          />

          <View style={styles.detailsContainera}>
            <CustomText style={styles.titlea} numberOfLines={1}>
              {`${listing['owner']['title']} ${listing['owner']['firstName']} ${listing['owner']['lastName']}`}
            </CustomText>

            <CustomText style={styles.subTitlea} numberOfLines={2}>
              {'Likes ' + listing['likes']}
            </CustomText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: '#3B71F3',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },

  containera: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  detailsContainera: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  imagea: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  subTitlea: {
    color: 'grey',
  },
  titlea: {
    fontWeight: '500',
  },
});

export default ListingDetailScreen;

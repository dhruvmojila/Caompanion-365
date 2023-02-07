import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import CustomCard from '../../components/CustomCard';
// import Img from '../../../assets/images/nft05.jpeg';
import axios from 'axios';

const Home = ({navigation}) => {
  var config = {
    method: 'get',
    url: 'https://dummyapi.io/data/v1/post',
    headers: {
      'app-id': '63da076eee81966345f3300a',
    },
  };

  const [listings, setListings] = useState();
  const getData = () => {
    axios(config)
      .then(function (response) {
        setListings(response.data['data']);
        // console.log(response.data['data']);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing['id']}
        renderItem={({item}) => (
          <CustomCard
            title={`${item['owner']['title']} ${item['owner']['firstName']} ${item['owner']['lastName']}`}
            subTitle={item['text']}
            imageUrl={item['image']}
            onPress={() => navigation.navigate('Detail', item)}
          />
        )}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
});
export default Home;

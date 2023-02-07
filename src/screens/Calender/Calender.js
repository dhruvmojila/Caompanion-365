import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import React, {useEffect, useState} from 'react';
import CustomText from '../../components/CustomCard/CustomText';
import {Card, Avatar} from 'react-native-paper';

import addDays from 'date-fns/addDays';
import {format} from 'date-fns';

const Calender = () => {
  const [items, setItems] = useState({});

  const apiCall = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const mappedData = await data.map((post, index) => {
      const date = addDays(new Date(), index);
      return {
        ...post,
        date: format(date, 'yyyy-MM-dd'),
      };
    });
    const reduced = await mappedData.reduce((acc, curritem) => {
      const {date, ...i} = curritem;
      acc[date] = [i];
      return acc;
    }, {});
    setItems(reduced);
  };
  useEffect(() => {
    apiCall();
  }, []);

  // const timeToString = time => {
  //   const date = new Date(time);
  //   return date.toISOString().split('T')[0];
  // };

  // const loadItems = day => {
  //   setTimeout(() => {
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = timeToString(time);

  //       if (!items[strTime]) {
  //         items[strTime] = [];

  //         const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < numItems; j++) {
  //           items[strTime].push({
  //             name: 'Item for ' + strTime + ' #' + j,
  //             height: Math.max(50, Math.floor(Math.random() * 150)),
  //             day: strTime,
  //           });
  //         }
  //       }
  //     }

  //     const newItems = {};
  //     Object.keys(items).forEach(key => {
  //       newItems[key] = items[key];
  //     });
  //     setItems(newItems);
  //   }, 1000);
  // };
  // const rowHasChanged = (r1, r2) => {
  //   return r1.name !== r2.name;
  // };

  // const CurDate = () => {
  //   const date = new Date();

  //   let tempDay = date.getDate();
  //   let tempMonth = date.getMonth() + 1;
  //   let year = date.getFullYear();
  //   let day, month;

  //   if (tempDay < 10) {
  //     day = `0${tempDay}`;
  //   }

  //   if (tempMonth < 10) {
  //     month = `0${tempMonth}`;
  //   }

  //   let currentDate = `${year}-${month}-${day}`;
  //   return currentDate;
  // };

  // const renderEmptyDate = () => {
  //   return (
  //     <View style={styles.emptyDate}>
  //       <Text>This is empty date!</Text>
  //     </View>
  //   );
  // };

  const renderItem = (item, isFirst = false) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <TouchableWithoutFeedback onPress={() => Alert.alert(item.name)}>
        <Card
          mode="elevated"
          style={{
            backgroundColor: 'white',
            flex: 1,
            borderRadius: 5,
            padding: 10,
            marginRight: 10,
            marginTop: 17,
          }}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize, color}}>{item.userId}</Text>
              <Text>{item.cookies ? '🍪' : '😥'}</Text>
              <Avatar.Text label="D" />
            </View>
          </Card.Content>
        </Card>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.caontainer}>
      <CustomText style={styles.title}>Calender</CustomText>
      <Agenda
        // testID={testIDs.agenda.CONTAINER}
        items={items}
        // loadItemsForMonth={loadItems}
        // selected={'2017-05-16'}
        renderItem={renderItem}
        // renderEmptyDate={renderEmptyDate}
        // rowHasChanged={rowHasChanged}
        showClosingKnob={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  caontainer: {
    margin: 12,
    flex: 1,
    marginBottom: 24,
  },
  title: {
    margin: 8,
    fontWeight: 'bold',
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default Calender;

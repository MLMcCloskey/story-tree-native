import React from 'react';
import { ScrollView, StyleSheet, View, FlatList, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/Header';
import Story from '../components/Story';

export default class ListenScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: () => <Header />,
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        {/* <ExpoLinksView /> */}


        <FlatList
          numColumns={2}
          data={[
            {
              key: "0",
              title: "The Tale of Peter Rabit",
              image: "https://s3-us-west-2.amazonaws.com/tabs.web.media/b/p/bpw1/bpw1-square-orig.jpg"
            },
            {
              key: "1",
              title: "The Velveteen Rabit",
              image: "https://images-na.ssl-images-amazon.com/images/I/81aA1C0jdBL.jpg"
            },
            {
              key: "2",
              title: "The Tale of Peter Rabit",
              image: "https://s3-us-west-2.amazonaws.com/tabs.web.media/b/p/bpw1/bpw1-square-orig.jpg"
            },
            {
              key: "3",
              title: "The Velveteen Rabit",
              image: "https://images-na.ssl-images-amazon.com/images/I/81aA1C0jdBL.jpg"
            },
            {
              key: "4",
              title: "The Tale of Peter Rabit",
              image: "https://s3-us-west-2.amazonaws.com/tabs.web.media/b/p/bpw1/bpw1-square-orig.jpg"
            },
            {
              key: "5",
              title: "The Velveteen Rabit",
              image: "https://images-na.ssl-images-amazon.com/images/I/81aA1C0jdBL.jpg"
            },
          ]}
          renderItem = { ({item}) => <Story title={item.title} image={item.image}/>}      
        />
      </View>
    );
  }
}

ListenScreen.navigationOptions = {
  // title: 'Listen',
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/Header';

export default class ListenScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: () => <Header />,
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
        {/* <ExpoLinksView /> */}
        <View>

        </View>
      </ScrollView>
    );
  }
}

ListenScreen.navigationOptions = {
  title: 'Listen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import { Button, Image, View, Text, Alert, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from './TabBarIcon';
import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

class Story extends React.Component {
  render() {
    return (
      <View className='storyCard' style={{ backgroundColor: "beige", flex: 1, alignItems: "space-between", padding: 30 }}>

        <TouchableHighlight
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
        >
          <View>
            <Image
              source={{ uri: this.props.image }}
              style={{
                width: 120,
                height: 120,
                // padding: 15,
                alignContent: "center",
                backgroundColor: "brown",
                margin: 20
              }}
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
            />
            <Text>{this.props.title}</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default Story;
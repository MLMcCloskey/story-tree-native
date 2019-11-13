import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from './TabBarIcon';
import { Ionicons } from '@expo/vector-icons';

class Header extends React.Component {
  render() {
    return (
      // <View className='header' style={{backgroundColor: "yellowgreen", flex: 1, alignItems: "center", marginTop: -5, height:20}}>
        /* <Text>Story */
        /* <Ionicons name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          :
           'md-information-circle'
      } /> */

        <Image 
          source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox'}} 
          style={{
            width: 50,
            height: 50,
            padding: 0,
            justifyContent: "center",
            backgroundColor: "yellow",
            margin: "auto"
          }}
        />        
      //   {/* Tree */}
      //   {/* </Text> */}
      // {/* </View> */}
    );
  }
}

export default Header;
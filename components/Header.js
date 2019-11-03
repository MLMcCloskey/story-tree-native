import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class Header extends React.Component {
  render() {
    return (
      <View className='header' style={{backgroundColor: "yellowgreen", flex: 1, alignItems: "center", marginTop: -5}}>
        <Text>Story
        <Image source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox'}} 
          style={{
            width: 50,
            height: 50,
            // padding: 15,
            alignContent: "center",
            backgroundColor: "yellow",
            margin: 0
          }}
        />
        Tree</Text>
      </View>
    );
  }
}

export default Header;
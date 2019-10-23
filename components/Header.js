import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class Header extends React.Component {
  render() {
    return (
      <Image source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox'}} 
        style={{
          width: 30,
          height: 30,
          margin: 15,
          alignContent: "center",
          backgroundColor: "yellow",
        }}
      />
    );
  }
}

export default Header;
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import ListenScreen from '../screens/ListenScreen';
import RecordScreen from '../screens/RecordScreen';
import LibraryScreen from '../screens/LibraryScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
    ),
  };

HomeStack.path = '';

const PlaylistStack = createStackNavigator(
  {
    PlaylistStack: PlaylistScreen,
  },
  config
);

PlaylistStack.navigationOptions = {
  tabBarLabel: 'Playlist',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-musical-notes' : 'md-musical-notes'} />
  ),
};

PlaylistStack.path = '';

const ListenStack = createStackNavigator(
  {
    Listen: ListenScreen,
  },
  config
);

ListenStack.navigationOptions = {
  tabBarLabel: 'Listen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-headset' : 'md-headset'} />
  ),
};

ListenStack.path = '';

const RecordStack = createStackNavigator(
  {
    Record: RecordScreen,
  },
  config
);

RecordStack.navigationOptions = {
  tabBarLabel: 'Record',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-mic' : 'md-mic'} />
  ),
};

RecordStack.path = '';

const LibraryStack = createStackNavigator(
  {
    LibraryStack: LibraryScreen,
  },
  config
);

LibraryStack.navigationOptions = {
  tabBarLabel: 'Library',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'} />
  ),
};

LibraryStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ListenStack,
  RecordStack,
  PlaylistStack,
  LibraryStack
});

tabNavigator.path = '';

export default tabNavigator;

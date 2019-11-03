import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListenScreen from '../screens/ListenScreen';
import LibraryScreen from '../screens/LibraryScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RecordScreen from '../screens/RecordScreen';

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
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const ListenStack = createStackNavigator(
  {
    Listen: ListenScreen,
  },
  config
);

ListenStack.navigationOptions = {
  tabBarLabel: 'Listen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'} />
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
    Library: LibraryScreen,
  },
  config
);

LibraryStack.navigationOptions = {
  tabBarLabel: 'Library',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
  ),
};

LibraryStack.path = '';

const PlaylistStack = createStackNavigator(
  {
    Playlist: PlaylistScreen,
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

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ListenStack,
  RecordStack,
  LibraryStack,
  PlaylistStack,
}, { tabBarOptions: { style: { backgroundColor: 'yellowgreen' } } });

tabNavigator.path = '';

// tabNavigator.style = {backgroundColor: 'green'};

// tabNavigator.tabBarOptions = {activeBackgroundColor: 'green', inactiveBackgroundColor: 'green', style: {backgroundColor: 'green'}}

export default tabNavigator;

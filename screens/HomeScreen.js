import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Button
} from 'react-native';
import Header from '../components/Header';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: () => <Header />,
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}> */}
        <Header />
        {/* <ImageBackground source={{ uri: 'https://cdn.shopify.com/s/files/1/0504/6041/products/NaturalWoodgrain_large.jpg?v=1409190514' }} style={{ width: '100%', height: '100%' }}> */}

        <View
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Image>
            {/* logo */}
          </Image>

          <Text style={styles.welcomeText}>
            WELCOME TO STORYTREE
          </Text>
          
          <ScrollView>
            <Text style={styles.homeText}>
              Here you and your family can record and play stories your children might listen to time and time again.
              </Text>
            <Text style={styles.homeText}>
              We have included 9 stories for Free which you can listen to pre-recorded versions specifically for bedtime! These are designed to be soft and soothing to help kids get to sleep.
              </Text>
            <Text style={styles.homeText}>
              You or a family member can record yourself reading these 9 classic stories as well. Just go to "Record" below and select your first story to record. Or record and save any story from your home. We've made it easy to record and store your child's story for free.
              </Text>
            <Text style={styles.homeText}>
              We are working on more stories everyday so stay tuned for more!
              </Text>
          </ScrollView>

          <Button title="Thanks!" color='#a4f542' style={styles.thanksButton} />

        </View>
        {/* <View style={styles.getStartedContainer}>
              <DevelopmentModeNotice />
            </View> */}

        {/* </ImageBackground> */}
        {/* </ScrollView> */}
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: '#fff',
    padding: 30,
    alignItems: "center",
    justifyContent: 'flex-end',
    // textAlign: 'center'
    overflow: 'scroll',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  welcomeText: {
    fontSize: 18,
    paddingBottom: 30
  },
  homeText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  thanksButton: {
    // color: '#72f542'
    borderRadius: 20
  }
});
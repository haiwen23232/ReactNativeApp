/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, StatusBar} from 'react-native';
import bgImage from './src/image/background.jpg';

import Login from './src/screens/Login';

export default class LoginUI extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Login />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

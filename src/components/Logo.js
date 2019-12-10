import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import logo from '../image/logo.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.logoText}>React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,
  },
});

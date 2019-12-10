import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.signinContainer}>
        <Logo />
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <Text style={styles.SignUpButton}>SignUp</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signinContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupTextCont: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
  },
  SignUpButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});

import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from '../src/screens/Login';
import SignUp from '../src/screens/SignUp';

export default class Routes extends Component {
  render() {
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="register" component={SignUp} title="Register" />
      </Stack>
    </Router>;
  }
}

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import bgImage from '../image/background.jpg';
import logo from '../image/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';

const {width: WIDTH} = Dimensions.get('window');

export default class LoginUI extends Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
    };
  }

  showPass = () => {
    if (this.state.press === false) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false});
    }
  };
  render() {
    return (
        <View style={{flex:1, paddingHorizontal: 50}}>
      <View style={{flexDirection: 'row', height: 30}}>
          <View style={{width: 30, borderWidth: 1, position: 'absolute', left: 0, top:0, bottom: 0,}}/>
          <View style={{ position: 'absolute', left: 30, right: 30, top:0, bottom: 0, borderWidth: 1, backgroundColor: 'green' }} />
          <View style={{width: 30, borderWidth: 1, position: 'absolute', right: 0, top:0, bottom: 0,}}/>
        </View>
        <View style={{flexDirection: 'row', height: 30}}>
          <View style={{width: 30, borderWidth: 1}}/>
          <View style={{ flex:1, borderWidth: 1, backgroundColor: 'green' }} />
          <View style={{width: 30, borderWidth: 1}}/>
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
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
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 60,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 5,
    left: -10,
  },
  btnEye: {
    position: 'absolute',
    top: 5,
    left: 80,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 60,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
});

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import bgImage from '../image/background.jpg';
import logo from '../image/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Input extends Component {
  render() {
    const {showPass, placeholder, leftIcon, rightIcon} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          alignItems: 'center',
          padding: 6,
          marginBottom: 16,
        }}>
        <Icon
          name={leftIcon}
          size={28}
          color={'rgba(255, 255, 255, 0.7)'}
          style={{width: 30}}
        />
        <TextInput
          style={{flex: 1, fontSize: 17}}
          placeholder={placeholder}
          secureTextEntry={showPass}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColerAndroid="transparent"
        />

        <Icon
          name={rightIcon}
          size={26}
          color={'rgba(255, 255, 255, 0.7)'}
          style={{width: 30}}
        />
      </View>
    );
  }
}

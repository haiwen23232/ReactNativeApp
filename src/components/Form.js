import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width: WIDTH} = Dimensions.get('window');

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPass: true,
      press: false,
      username: 'sf@fds.fsd',
      password: 'ewqewqeqe',
    };
  }

  showPass = () => {
    if (this.state.press === false) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false});
    }
  };

  onPressButton = async () => {
    const {username, password} = this.state;
    console.log(username);
    if (!username.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      Alert.alert('Invalid', 'Username must be email');
      return;
    }
    console.log(password);
    if (!password.match(/(?=.{7,13}$)/)) {
      Alert.alert('Invalid', 'Password must be between range 8 to 14');
      return;
    }

    try {
      let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password,
        }),
      });
      let user = await response.json();
      console.log(user);
    } catch (err) {
      Alert.alert('Invalid', err.message);
    }
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <Icon
          name={'ios-person'}
          size={28}
          color={'rgba(255, 255, 255, 0.7)'}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.InputBox}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColerAndroid="#ffffff"
          onChangeText={value => this.setState({username: value.trim()})}
          value={this.state.username}
        />
        <Icon
          name={'ios-lock'}
          size={28}
          color={'rgba(255, 255, 255, 0.7)'}
          style={styles.inputIconEye}
        />
        <TextInput
          style={styles.InputBox2}
          placeholder={'Password'}
          secureTextEntry={this.state.showPass}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColerAndroid="transparent"
          onChangeText={value => this.setState({password: value.trim()})}
          value={this.state.password}
        />

        <TouchableOpacity
          style={styles.btnEye}
          onPress={this.showPass.bind(this)}>
          <Icon
            name={this.state.press === false ? 'ios-eye' : 'ios-eye-off'}
            size={26}
            color={'rgba(255, 255, 255, 0.7)'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin} onPress={this.onPressButton}>
          <Text style={styles.text}>login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputBox: {
    width: WIDTH - 55,
    height: 50,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#ffffff',
    marginHorizontal: 25,
  },
  InputBox2: {
    width: WIDTH - 55,
    height: 50,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#ffffff',
    marginHorizontal: 25,
    marginTop: 10,
  },
  inputIcon: {
    position: 'absolute',
    top: -3,
    left: 40,
  },
  inputIconEye: {
    position: 'absolute',
    top: 55,
    left: 40,
  },
  btnEye: {
    position: 'absolute',
    top: 60,
    left: 340,
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

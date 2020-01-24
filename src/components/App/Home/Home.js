import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import {Image} from 'react-native-elements';

const Home = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const goToRegister = () => {
    props.navigation.navigate('Register');
  };

  const login = () => {
    const credentials = {
      email: email,
      password: password,
    };

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const loginData = {
      headers: headers,
      method: 'POST',
      body: JSON.stringify(credentials),
    };
    fetch('http://10.11.97.140:8080/api/login', loginData)
      .then(response => response.json())
      .then(
        data => {
          setUser(data.user);
        },
        error => {
          console.log(error);
        },
      );
  };

  const goToProfile = () => {
    props.navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('../../../assets/img/TWIPIERRE.png')}
          PlaceholderContent={<ActivityIndicator />}
          style={styles.img}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={require('../../../assets/img/mailwhite.png')}
          PlaceholderContent={<ActivityIndicator />}
        />
        <TextInput
          style={(styles.inputs, styles.emailInput)}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={require('../../../assets/img/passwordWHITE.png')}
          PlaceholderContent={<ActivityIndicator />}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={login}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer} onPress={goToRegister}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141d26',
  },
  inputContainer: {
    backgroundColor: '#243447',
    borderRadius: 5,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    flex: 1,
  },
  emailInput: {
    textTransform: 'lowercase',
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 50,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#007bff',
  },
  loginText: {
    color: 'white',
  },
  img: {
    height: 200,
    width: 200,
    marginVertical: 60,
  },
});

export default Home;

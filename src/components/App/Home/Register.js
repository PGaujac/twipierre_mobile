import React, {useState} from 'react';
import {useFormFields} from '../../libs/formHook';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';

import {Image} from 'react-native-elements';

const Home = props => {
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const goToLogin = () => {
    props.navigation.navigate('App');
  };
  const handleSubmit = () => {
    if (fields.password === fields.confirmPassword) {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });

      const data = {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(fields),
      };
      fetch('http://10.11.97.140:8080/api/register', data)
        .then(response => response.json())
        .then(data => {
          if (data === true) {
            goToLogin();
          } else {
            Alert.alert(
              'Alert',
              data.message,
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          }
        });
    } else {
      Alert.alert(
        'Alert',
        'Passwords do not match',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
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
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            id="email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={text => handleFieldChange(text, 'email')}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={(styles.inputs, styles.emailInput)}
            placeholder="Username"
            id="username"
            underlineColorAndroid="transparent"
            onChangeText={text => handleFieldChange(text, 'username')}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            id="password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={text => handleFieldChange(text, 'password')}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Confirm Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={text => handleFieldChange(text, 'confirmPassword')}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={handleSubmit}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonContainer} onPress={goToLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
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

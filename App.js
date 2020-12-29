import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginSignUpScreen from './screens/LoginSignUpScreen';

export default class App extends React.Component {
  render() {
    return(
      <View>
        <Text>App</Text>
        <LoginSignUpScreen/>
      </View>
    )
  }
}
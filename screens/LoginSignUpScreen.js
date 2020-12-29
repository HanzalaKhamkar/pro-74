import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class LoginSignUpScreen extends React.Component {
    constructor () {
        super();
        this.state = {
            email: '',
            password: ''
        } 
    }

    userLogin = async () => {
        var email = this.state.email;
        var password = this.state.password;

        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then( () => {
            alert('Successful Login')
        } )
        .catch( (error) => {
            alert(error.message )
        })
    }
    
    userSignUp = async () => {
        var email = this.state.email;
        var password = this.state.password;

        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( () => {
            alert('User Added Succesfully')
        } )
        .catch( (error) => {
            alert(error.message)
        } )
    }

  render() {
    return(
      <View style= {styles.container}>
        <TextInput
            style= {styles.inputBox}
            placeholder = 'Email Id'
            onChangeText = { text => this.setState({email: text})}
        />

        <TextInput
            style= {styles.inputBox}
            placeholder = 'Password'
            onChangeText = { text => this.setState({password: text})}
        />

        <TouchableOpacity style = {styles.loginButton} onPress = {this.userLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.loginButton} onPress = {this.userSignUp}>
            <Text  style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const  styles = StyleSheet.create({
  container: {
    flex:0.6,
    justifyContent:'center',
    alignItems:'center'       
  },
  inputBox: {
    width:"8%",
    height: "8%",
    borderWidth:2,
    borderColor:'#ffff',
    padding:8,
    marginBottom:8,
    borderRadius:10,
  },
  loginButton: {
      backgroundColor: 'blue',
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 20,
      padding: 2
  },
  buttonText:{
    color:'white',
    fontSize:15
  }
})
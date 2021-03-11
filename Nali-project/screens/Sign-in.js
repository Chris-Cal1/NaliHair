import React, { useState, useEffect, useRef} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, Button, TouchableOpacity, View, Image} from 'react-native';
import { Card, ListItem, CheckBox, Input } from 'react-native-elements';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';
import {connect} from 'react-redux'

import AsyncStorage from '@react-native-async-storage/async-storage';

function Signin(props) {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [userExists, setUserExists] = useState(false)
  const [listErrorsSignup, setErrorsSignup] = useState([])

  var userData = {mail: mail, password: password};
 
  var handleSubmit = async () => {



    const data = await fetch('http://10.0.0.103:3000/sign-in', {

      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `email=${mail}&password=${password}`

    })

    const body = await data.json()

    if(body.result == true){
      props.navigation.navigate('Profil')
      props.addToken(body.token)
      setUserExists(true)

    } else {
      setErrorsSignup(body.error)
    }




    var tabErrorsSignin = listErrorsSignin.map((error,i) => {
      return(<p>{error}</p>)
    });
  
     
   }

   
   let [fontsLoaded] = useFonts({
    Handlee_400Regular,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_300Light
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (

    <ImageBackground  source={require('../assets/003.png')} style={styles.container}>
        <View style={styles.container}> 
          <Image source={require('../assets/logo_nalihair.png')} style={{ width: 150, height: 200, marginBottom: '10%', marginTop: '20%' }} />


         <Input 
          containerStyle = {{borderColor: "lightgrey", marginBottom: 20, elevation: 3, width: 200, height: '8%' }}
          placeholder='Mail'
          onChangeText={(val) => setMail(val)}/>

         <Input 
          containerStyle = {{borderColor: "lightgrey", marginBottom: 20, elevation: 3, width: 200, height: '8%' }}
          placeholder='Mot de passe'
          onChangeText={(val) => setPassword(val)}/>


          <TouchableOpacity  style={{ fontSize: 40, color: 'white', backgroundColor: "#222222", marginTop: 15, fontFamily: 'Roboto_400Regular', borderRadius: 10, height: 50, width: 180, alignItems: 'center', justifyContent: 'center'}}
          onPress={() => handleSubmit()}
          >
          <Text style={{ color: 'white', fontFamily: 'Roboto_400Regular', fontSize: 20}}> Me connecter </Text>
          </TouchableOpacity>
          <Text style={{ color: '#222222', fontFamily: 'Roboto_400Regular', fontSize: 15, marginTop: 15}}  onPress={() => props.navigation.navigate('Signup')}> M'inscrire </Text>
        </View>
        <StatusBar style="dark" backgroundColor='white'/>
    </ImageBackground>

    
  );
}
}
const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     
   },
});

function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      console.log("MON TOKEN ======>>", token)
      dispatch({type: 'addToken', token: token})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Signin)
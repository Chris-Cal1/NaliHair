import React, { useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, ImageBackground, Button, TouchableOpacity, View, Image} from 'react-native';
import { Card, ListItem, CheckBox, Input } from 'react-native-elements';



export default function Signin(props) {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [userExists, setUserExists] = useState(false)
  const [listErrorsSignup, setErrorsSignup] = useState([])

var userData = {Name: name, Mail: mail, Password: password};
 
  var handleSubmit = async () => {

    const data = await fetch('/sign-in', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `Mail=${mail}&Password=${password}`
    })

    const body = await data.json()

    if(body.result == true){
      props.addToken(body.token)
      setUserExists(true)

    } else {
      setErrorsSignup(body.error)
    }

    if(userExists){
      props.navigation.navigate('Profil')
    } else {
      setErrorsSignin(body.error)
    }

    var tabErrorsSignin = listErrorsSignin.map((error,i) => {
      return(<p>{error}</p>)
    });
  
     
   }

   


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


          <TouchableOpacity  style={{ fontSize: 40, color: 'white', backgroundColor: "#222222", marginTop: 15, fontFamily: 'Roboto', borderRadius: 10, height: 50, width: 180, alignItems: 'center', justifyContent: 'center'}}
          onPress={() => handleSubmit()}
          >
          <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 20}}> Me connecter </Text>
          </TouchableOpacity>
          <Text style={{ color: '#222222', fontFamily: 'Roboto', fontSize: 15, marginTop: 15}}  onPress={() => props.navigation.navigate('Signup')}> M'inscrire </Text>
        </View>
        
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     
   },
});


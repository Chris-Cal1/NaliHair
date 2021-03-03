// Phyllis
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';


export default function Bravo(props) {
    return (
      
      <ImageBackground source={require('../assets/009_2.png')}style={{ height: 800,  alignItems: 'center',
      justifyContent: 'center'}}>
  
    
        <Text style={{ fontSize: 30, color: '#222222', marginBottom: 30, fontFamily: 'Roboto', height: 70 }}>Bravo</Text>
        <Text style={{ fontSize: 20, color: '#222222', marginBottom: 30, fontFamily: 'Roboto' }}>Votre routine du jour est terminée !</Text>
        <Text style={{ fontSize: 20, color: '#222222', marginBottom: 30, fontFamily: 'Roboto'}}>A demain pour la suite du programme.</Text>
        <TouchableOpacity  style={{ fontSize: 40, color: 'white', backgroundColor: "#222222", margin: 5, fontFamily: 'Roboto', borderRadius: 10, height: 40, width: 150, alignItems: 'center', justifyContent: 'center'}}
        onPress={() => props.navigation.navigate('DailyProgram')}
        >
                <Text style={{ color: 'white', fontFamily: 'Roboto'}}> Mon programme </Text>
              </TouchableOpacity>
  
        </ImageBackground>
    
  
    );
  }
  
  const styles = StyleSheet.create({
     container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'flex-start',
     },
  });
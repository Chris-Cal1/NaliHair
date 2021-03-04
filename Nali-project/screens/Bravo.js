// Phyllis
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';


export default function Bravo(props) {

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
      
      <ImageBackground source={require('../assets/009.png')}style={{ height: 800,  alignItems: 'center',
      justifyContent: 'center'}}>
  
    
        <Text style={{ fontSize: 30, color: '#222222', marginBottom: 30, fontFamily: 'Roboto_400Regular', height: 70 }}>Bravo</Text>
        <Text style={{ fontSize: 20, color: '#222222', marginBottom: 30, fontFamily: 'Roboto_400Regular' }}>Votre routine du jour est terminée !</Text>
        <Text style={{ fontSize: 20, color: '#222222', marginBottom: 30, fontFamily: 'Roboto_400Regular'}}>A demain pour la suite du programme.</Text>
        <TouchableOpacity  style={{ fontSize: 40, color: 'white', backgroundColor: "#222222", margin: 5, fontFamily: 'Roboto', borderRadius: 10, height: 40, width: 150, alignItems: 'center', justifyContent: 'center'}}
        onPress={() => props.navigation.navigate('DailyProgram')}
        >
                <Text style={{ color: 'white', fontFamily: 'Roboto_400Regular'}}> Mon programme </Text>
              </TouchableOpacity>
              <StatusBar style="dark" backgroundColor='white'/>

        </ImageBackground>
    
  
    );
  }
}
  const styles = StyleSheet.create({
     container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'flex-start',
     },
  });
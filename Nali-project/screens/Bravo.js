// Phyllis
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { Button} from 'react-native-elements'

import {  Text, View, Content} from 'native-base';

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
      
   <ImageBackground source={require('../assets/009.png')}style={styles.container}>  
     <Content>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '70%'}}>
        <Text style={{ fontSize: 40, color: '#222222', marginBottom: 30, fontFamily: 'Roboto_700Bold'}}>Bravo !</Text>
        <Text style={{ fontSize: 20, color: '#222222', marginBottom: 20, fontFamily: 'Roboto_500Medium' }}>Votre routine du jour est terminée.</Text>
        <Text style={{ fontSize: 20, color: '#222222', marginBottom: 30, fontFamily: 'Roboto_400Regular'}}>A demain pour la suite du programme.</Text>
      </View>

        <View style={{ justifyContent:'center', alignItems: 'center'}}>
            <Button 
           title="Mon programme"
           buttonStyle={styles.button}
           onPress={() => props.navigation.navigate( 'DailyProgram' )}
           type="solid"
            />
          </View>
          
      </Content>
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
     button: {
      backgroundColor: "#222222", 
      borderRadius: 10, 
      width: 250, 
      height: 50, 
      fontFamily: 'Roboto_700Bold', 
      marginTop: Platform.select({
        ios: '10%', 
        android:'7%', 
      }),
    }
  });
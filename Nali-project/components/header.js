import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  Header } from 'react-native-elements';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';


export default function App(props) {
  let [fontsLoaded] = useFonts({
    Handlee_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View>

      {/* header avec icone chevron à gauche et icone profil à droite -- onPress à compléter*/}
      <Header
      containerStyle = {{backgroundColor: 'white', elevation: 6,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, paddingTop: "5%"}}
       placement="left"
       centerComponent={{ text: 'My Title', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
       rightComponent={<FontAwesome5 
                          name="user-alt" 
                          size={26} 
                          color="black" 
                          onPress={() => props.navigation.navigate('')}
                          />}
      />

      <Text containerStyle={{alignItems: 'center', justifyContent: 'center',}}>Open up App.js to start working on your app!</Text>
      
    </View>
  );
  }
}
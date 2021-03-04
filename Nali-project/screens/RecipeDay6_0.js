// Chris

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import aloeVera from '../assets/aloeVera.jpg';
import { StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import { Button, Text, View, Content} from 'native-base';
import {  Header } from 'react-native-elements';

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';


export default function RecipeDay6_0(props) {

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
      
  <ImageBackground source={require('../assets/007.png')} style={styles.container}>

    <Header
      containerStyle = {{backgroundColor: 'white', elevation: 6,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, paddingTop: "5%"}}
       leftComponent={<MaterialIcons 
                         name="arrow-back-ios" 
                         size={26} 
                         color="black" 
                         onPress={() => props.navigation.navigate('DailyProgram')}
                         />}
       centerComponent={{ text: 'Programmes', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
       rightComponent={<FontAwesome5 
                          name="user-alt" 
                          size={26} 
                          color="black" 
                          onPress={() => props.navigation.navigate('Profil')}
                          />}
      />

<Content>
<ScrollView>
     <View style={{ marginLeft: '6%', marginRight: '5%', marginTop: '5%' }}>
  
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 24, color: 'black', marginTop: 10, marginBottom: 10}}>Soin sans rinçage</Text>
        <Image style={{ flex: 1, width: '100%', height: 150 }} source={aloeVera}/>
        
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24, color: 'black', marginTop: '5%', marginBottom: '3%', fontWeight: 'bold' }}>Bienfaits</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular'}}>L'objectif de cette étape est de conserver l'hydratation apportée en recouvrant vos cheveux d'une matière grasse ou huilde de votre choix. Cette méthode que les anglophanes appellent parfois L.O.C (liquide Oil Cream) permet d'obtenir d'excellents résultats</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: '4%', marginBottom: '3%' }}>Ingrédients nécessaires</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular'}}>- 2/3 d'eau de source</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular'}}>- c-à-s de glycérine végétale</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular'}}>- 1/3 de gel d'aloe vera</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular'}}>- c-à-s d'une huile végétale de votre choix</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: '4%', marginBottom: '3%' }}>Mode d'emploi</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular'}}>Appliquez une fine couche d'huile végétale au choix puis une ou deux noisette du beurre végétale de votre choix sur l'ensemble de votre chevelure</Text>
        
         <Button dark
          style={{marginTop: '11%', marginBottom: '10%', marginLeft: '32%', backgroundColor: '#222222'}}
          onPress={() => props.navigation.navigate( 'Bravo' ) }>
           <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 20}}> Terminé </Text>
         </Button>
      
        
                   
   </View>   
   </ScrollView>
   </Content>
   <StatusBar style="dark" backgroundColor='white'/>

 </ImageBackground>
    
    );
   }
  }
  
  const styles = StyleSheet.create({
     container: {
       flex: 1,
       alignItems: 'flex-start',
       justifyContent: 'flex-start',
     },
  });


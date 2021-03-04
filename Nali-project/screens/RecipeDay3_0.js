// Chris

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import karité from '../assets/karité.jpg';
import { StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import { Button, Text, View, Content} from 'native-base';
import {  Header } from 'react-native-elements';

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';


export default function RecipeDay3_0(props) {

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
                          marginRight= '10px'
                          onPress={() => props.navigation.navigate('Profil')}
                          />}
      />

   <Content>
      <ScrollView> 
        <View style={{ marginLeft: '6%', marginRight: '5%', marginTop: '5%'}}>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginBottom: '4%'}}>Sceller l'hydratation :</Text>
       
         <Image style={{ flex: 1, width: '100%', height: 150 }} source={karité}/> 
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24, color: 'black', marginTop: '5%', marginBottom: '3%', fontWeight: 'bold' }}>Bienfaits</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>L'objectif de cette étape est de conserver l'hydratation apportée en recouvrant vos cheveux d'une matière grasse ou huile de votre choix. Cette méthode que les anglophanes appellent parfois L.O.C (Liquid Oil Cream) permet d'obtenir d'excellents résultats.</Text>
        <Text style={{ fontSize: 25, color: 'black',  marginTop: '4%', marginBottom: '3%' }}>Ingrédients nécessaires</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Huile au choix bio, pression à froid, vierge</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Préférez une huilde légère comme l'huile d'olive, l'huile de coco ou d'avocat qui pénètre facilement et nourrisseent le cheveu en profondeur.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Beurre végétale au choix</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Vous pouvez utiliser du beurre de karité, celui-ci possède des vertus nourrissantes, régénératrices et réparatrices. Le beurre de mangue convient également bien aux cheveux endommagés car il gaine le cheveu et prévient la formation des fourches.</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: '4%', marginBottom: '3%' }}>Mode d'emploi</Text>
        <Text style={{ marginBottom: '3%', fontFamily: 'Roboto_400Regular', fontSize: 13}}>Appliquez une fine couche d'une huile végétale au choix puis une ou deux noisette du beurre végétale de votre choix sur l'ensemble de votre chevelure.</Text>
        <Button dark
          style={{marginTop: '11%', marginBottom: '50%', marginLeft: '32%', backgroundColor: '#222222'}}
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


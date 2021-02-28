// Chris

import React from 'react';
import recipeDay3Photo from '../assets/choix_routine.jpg';
import { StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import { Button, Text, View} from 'native-base';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';


export default function RecipeDay1(props) {

  let [fontsLoaded] = useFonts({
    Handlee_400Regular,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
   
  <ImageBackground source={require('../assets/007.png')} style={styles.container}>
   
   <View style={{ marginLeft: 25, marginRight: 13 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 55}}>
      <MaterialIcons 
                         name="arrow-back-ios" 
                         size={36} 
                         color="black" 
                         onPress={() => props.navigation.navigate('DailyProgram')}
                         />
          <Text style={{ fontFamily: 'Handlee_400Regular', fontSize: 30, color: 'black', marginLeft: 65 }}>Programmes</Text>
          <FontAwesome5 
                         style={{  marginLeft: 70 }}
                          name="user-alt" 
                          size={36} 
                          color="black" 
                          onPress={() => props.navigation.navigate('Profil')}
                          />
          </View>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: 10, marginBottom: 10}}>Sceller l'hydratation :</Text>
         <Image style={{ flex: 1, width: 360 }} source={recipeDay3Photo}/>
       <ScrollView> 
         <Image style={{ flex: 1, width: 360, height: 150 }} source={recipeDay3Photo}/> 
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24, color: 'black', marginTop: 20, marginBottom: 10, fontWeight: 'bold' }}>Bienfaits</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>L'objectif de cette étape est de conserver l'hydratation apportée en recouvrant vos cheveux d'une matière grasse ou huile de votre choix. Cette méthode que les anglophanes appellent parfois L.O.C (Liquid Oil Cream) permet d'obtenir d'excellents résultats.</Text>
        <Text style={{ fontSize: 25, color: 'black',  marginTop: 10, marginBottom: 10 }}>Ingrédients nécessaires</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Huile au choix bio, pression à froid, vierge</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Préférez une huilde légère comme l'huile d'olive, l'huile de coco ou d'avocat qui pénètre facilement et nourrisseent le cheveu en profondeur.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Beurre végétale au choix</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Vous pouvez utiliser du beurre de karité, celui-ci possède des vertus nourrissantes, régénératrices et réparatrices. Le beurre de mangue convient également bien aux cheveux endommagés car il gaine le cheveu et prévient la formation des fourches.</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: 15, marginBottom: 10 }}>Mode d'emploi</Text>
        <Text style={{ marginBottom: 10, fontFamily: 'Roboto_400Regular', fontSize: 13}}>Appliquez une fine couche d'une huile végétale au choix puis une ou deux noisette du beurre végétale de votre choix sur l'ensemble de votre chevelure.</Text>
        <Button dark
          style={{marginTop: 35, marginBottom: 20, marginLeft: 120, backgroundColor: '#222222'}}
          onPress={() => props.navigation.navigate( 'Bravo' ) }>
           <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 20}}> Terminé </Text>
         </Button>
        
       </ScrollView>                
   </View>
   
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


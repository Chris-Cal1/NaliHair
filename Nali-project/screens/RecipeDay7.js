// Chris

import React from 'react';
import recipeDay2Photo from '../assets/recette_jour_2.jpg';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView} from 'react-native';

import { AntDesign } from '@expo/vector-icons';


export default function RecipeDay1(props) {
    return (
      
  <ImageBackground source={require('../assets/007.png')} style={styles.container}>
  
   <View style={{ marginLeft: 25 }}>
        
        <Text style={{ fontSize: 30, color: 'black', margin: 25 }}>Recipe day 7</Text>
        <Text style={{ fontSize: 30, color: 'black', marginTop: 25, marginBottom: 10, fontWeight: 'bold' }}>Soin sans rinçage</Text>
        <Image style={{ flex: 1, width: 360 }} source={recipeDay2Photo}/>
        <ScrollView>
        <Text style={{ fontSize: 30, color: 'black', marginTop: 25, marginBottom: 10, fontWeight: 'bold' }}>Bienfaits</Text>
        <Text>L'objectif de cette étape est de conserver l'hydratation apportée en recouvrant vos cheveux d'une matière grasse ou huilde de votre choix. Cette méthode que les anglophanes appellent parfois L.O.C (liquide Oil Cream) permet d'obtenir d'excellents résultats</Text>
        <Text style={{ fontSize: 25, color: 'black',  marginTop: 10, marginBottom: 10 }}>Ingrédients nécessaires</Text>
        <Text>- 2/3 d'eau de source</Text>
        <Text>- c-à-s de glycérine végétale</Text>
        <Text>- 1/3 de gel d'aloe vera</Text>
        <Text>- c-à-s d'une huile végétale de votre choix</Text>
        <Text style={{ fontSize: 25, color: 'black',  marginTop: 15, marginBottom: 10 }}>Mode d'emploi</Text>
        <Text>Appliquez une fine couche d'huile végétale au choix puis une ou deux noisette du beurre végétale de votre choix sur l'ensemble de votre chevelure</Text>
        <Text style={{ fontSize: 30, color: 'black', marginTop: 25, marginBottom: 5 }}>Terminé</Text>
      
        <View style={{alignItems: 'flex-end', marginBottom: 15, marginRight: 30}}>
        <AntDesign 
          onPress={() => props.navigation.navigate( 'Bravo' ) }
          name="right" size={40} color="black" />
        </View>
        </ScrollView>
                   
   </View>   
 </ImageBackground>
    
    );
  }
  
  const styles = StyleSheet.create({
     container: {
       flex: 1,
       alignItems: 'flex-start',
       justifyContent: 'flex-start',
     },
  });
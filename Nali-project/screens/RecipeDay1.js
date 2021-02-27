// Chris

import React from 'react';
import recipeDay1Photo from '../assets/img/recette_jour_1.jpg';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

import { AntDesign } from '@expo/vector-icons';


export default function RecipeDay1(props) {
    return (
      
  <ImageBackground source={require('../assets/007.png')} style={styles.container}>
   <View style={{ marginLeft: 25 }}>
        
        <Text style={{ fontSize: 30, color: 'black', margin: 45 }}>Recipe day 1</Text>
        <Image style={{ flex: 1, width: 360, height: '25%' }} source={recipeDay1Photo}/>
        <Text style={{ fontSize: 30, color: 'black', marginTop: 25, marginBottom: 25, fontWeight: 'bold' }}>Jour 01</Text>
        <Text>Les produits indispensable à votre routine sont :</Text>
        <Text>-L'eau pour hydrater</Text>
        <Text>-Les beurres et huiles pour nourrir</Text>
        <Text>-Le shampoing pour nettoyer</Text>
        <Text>-Le conditioner pour demêler</Text>
        <Text>-Les protéines pour renforcer et gainer</Text>
        <Text style={{ fontSize: 25, color: 'black',  marginTop: 25, marginBottom: 20 }}>Ingrédients nécessaires</Text>
        <Text>Bain d'huile :</Text>
        <Text>Shampoing : Argile verte,</Text>
        <Text>Après shampoing hydratant (conditioner)</Text>
        <Text>Masque hydratant</Text>
        <Text>Sceller l'hydratation</Text>
        <Text>Soin sans rinçage/ vaporisateur (leave-in)</Text>
        <Text style={{ fontSize: 30, color: 'black', marginTop: 45, marginBottom: 5 }}>Durée</Text>
        <Text>3h</Text>
        <View style={{alignItems: 'flex-end', marginBottom: 15}}>
        <AntDesign 
          onPress={() => props.navigation.navigate( 'Bravo' ) }
          name="right" size={40} color="black" />
        </View>
        
                      
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
// Chris

import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

import { AntDesign } from '@expo/vector-icons';



export default function RecipeDay1() {
    return (
      
  <ImageBackground source={require('../assets/007.png')} style={styles.container}>
   <View style={{ marginLeft: 25 }}>
        
        <Text style={{ fontSize: 30, color: 'black', margin: 45 }}>Recipe day 1</Text>
        <Image />
        <Text style={{ fontSize: 30, color: 'black', marginTop: 25, marginBottom: 25, fontWeight: 'bold' }}>Jour 01</Text>
        <Text>Les produits indispensable à votre routine sont :</Text>
        <Text>-L'eau pour hydrater</Text>
        <Text>-Les beurres et huiles pour nourrir</Text>
        <Text>-Le shampoing pour nettoyer</Text>
        <Text>-Le conditioner pour demêler</Text>
        <Text>-Les protéines pour renforcer et gainer</Text>
        <Text style={{ fontSize: 30, color: 'black',  marginTop: 25, marginBottom: 25 }}>Ingrédients nécessaires</Text>
        <Text>Bain d'huile :</Text>
        <Text>Shampoing : Argile verte,</Text>
        <Text>Après shampoing hydratant (conditioner)</Text>
        <Text>Masque hydratant</Text>
        <Text>Sceller l'hydratation</Text>
        <Text>Soin sans rinçage/ vaporisateur (leave-in)</Text>
        <Text style={{ fontSize: 30, color: 'black', marginTop: 45, marginBottom: 5 }}>Durée</Text>
        <Text>3h</Text>
        <View style={{alignItems: 'flex-end', }}>
        <AntDesign name="right" size={40} color="black" />
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
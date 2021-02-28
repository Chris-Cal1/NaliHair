// Chris

import React from 'react';

import recipeDay1Photo from '../assets/recette_jour_1.jpg';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView} from 'react-native';
import {  Header } from 'react-native-elements';

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import {  Roboto_400Regular, Roboto_400Regular_Italic, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';


export default function RecipeDay1(props) {
    
  let [fontsLoaded] = useFonts({
    Handlee_400Regular,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
   } else {
    return (
      
  <ImageBackground source={require('../assets/007.png')} style={styles.container}>
 
       <Header
      containerStyle = {{backgroundColor: 'white', elevation: 6,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, paddingTop: "12%"}}
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
   
        <View style={{ marginLeft: 25 }}> 
        <Image style={{ flex: 1, width: 360,  height: '25%' }} source={recipeDay1Photo}/>
        <ScrollView>
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 30, color: 'black', marginTop: 25, marginBottom: 25, fontWeight: 'bold' }}>Jour 01</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Les produits indispensable à votre routine sont :</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>-L'eau pour hydrater</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>-Les beurres et huiles pour nourrir</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>-Le shampoing pour nettoyer</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>-Le conditioner pour demêler</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>-Les protéines pour renforcer et gainer</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 25, color: 'black',  marginTop: 25, marginBottom: 20 }}>Ingrédients nécessaires</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Bain d'huile :</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Shampoing : Argile verte,</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Après shampoing hydratant (conditioner)</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Masque hydratant</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Sceller l'hydratation</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Soin sans rinçage/ vaporisateur (leave-in)</Text>
        
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 30, color: 'black', marginTop: 45, marginBottom: 5 }}>Durée</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>3h</Text>
        <View style={{alignItems: 'flex-end', marginBottom: 15}}>
        <AntDesign 
          onPress={() => props.navigation.navigate( 'Bravo' ) }
          name="right" size={40} color="black" />
        </View>
       
        </ScrollView>               
        
   </View>
 </ImageBackground>
 
    
    );}
  }
  
  const styles = StyleSheet.create({
     container: {
       flex: 1,
       alignItems: 'flex-start',
       justifyContent: 'flex-start',
     },
  });

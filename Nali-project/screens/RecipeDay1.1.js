// Chris

import React from 'react';
import recipeDay3Photo from '../assets/recette_jour_1.jpg';
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
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: 10, marginBottom: 10}}>Le bain d'huile d'olive ou d'avocat</Text>
       <ScrollView> 
         <Image style={{ flex: 1, width: 360, height: 150 }} source={recipeDay3Photo}/> 
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24, color: 'black', marginTop: 20, marginBottom: 10, fontWeight: 'bold' }}>Bienfaits</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>L'huile d'olive apporte brillance au cheveux. L'huile d'avocat, riche en vitamines convient aux cheveux secs et cassants auxquels elle redonne de l'éclat.</Text>
        <Text style={{ fontSize: 25, color: 'black',  marginTop: 10, marginBottom: 10 }}>Ingrédients nécessaires</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Huile d'olive ou d'avocat</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Pour une qualité optimale, orienter-vous vers une huile bio, vierge, pression à froid.</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: 15, marginBottom: 10 }}>Mode d'emploi</Text>
        <Text style={{ marginBottom: 10, fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Disposez dans un bol 6 cuillères à café de l'huile de votre choix. </Text>
        <Text style={{ marginBottom: 10, fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Appliquez sur cheveux humides, répartissez l'huile sur vos cheveux section par section en commençant par les pointes. </Text>
        <Text style={{ marginBottom: 10, fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Laissez poser 20 minutes puis procéder au shampoing préconisé à l'étape suivante. </Text>
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
// Chris

import React from 'react';
import recipeDay2Photo from '../assets/recette_jour_2.jpg';
import { StyleSheet, ImageBackground, Image, Text, View, ScrollView} from 'react-native';
import {  Header } from 'react-native-elements';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
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
   <View style={{  marginLeft: '6%', marginRight: '5%', marginTop: '5%' }}>
        <Text style={{ fontSize: 20, color: 'black', marginBottom: '4%', fontFamily: 'Roboto_500Medium', }}>Shampoing clarifiant à l'argile verte : </Text>
        <Image style={{ flex: 1, width: 360, height: '20%' }} source={recipeDay2Photo}/>
        <ScrollView>
        <Text style={{ fontSize: 24, color: 'black', marginTop: '5%', marginBottom: '3%', fontWeight: 'bold', fontFamily: 'Roboto_700Bold' }}>Bienfaits</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Aère le cuir chevelu</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Purifie la fibre capillaire pour "repartir à 0"</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Laisse les cheveux légers et brillants</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Favorise le volume</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Idéal pour partir sur une bonne base</Text>
        <Text style={{ fontSize: 20, color: 'black',  marginTop: '3%', marginBottom: '3%', fontFamily: 'Roboto_500Medium', }}>Ingrédients nécessaires</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Argile verte, glycerine, miel, banane</Text>
        <Text style={{ fontSize: 20, color: 'black',  marginTop: '4%', marginBottom: '3%', fontFamily: 'Roboto_500Medium', }}>Mode d'emploi</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>1 - Réalise ton masque.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>2 - Humidifie l'ensemble de ta chevelure.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Puis applique le masque sur le cuir chevelu en massant, puis sur tes longueurs et pointes.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>3 - Couvre ta chevelure d'un bonnet de soin. Il va créer une chaleur ultra douce qui va optimiser le soin tout en évitant que l'argile sèche.</Text> 
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>4 - Laisse poser environ 30 minutes.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Rince abondamment à l'eau claire.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Tu peux faire un shampoing doux si tu le souhaites ou reprends ta routine à l'étape après-shampoing</Text>
        <View style={{ marginBottom: '5%', marginTop: '5%' ,flexDirection: 'row', alignItems: 'center'}}>
        <Text onPress={() => props.navigation.navigate( 'RecipeDay3' ) }
        style={{marginLeft: '35%', fontSize: 20, color: 'black',  fontFamily: 'Roboto_500Medium', }}>Suivant</Text>
        <AntDesign 
          style={{ marginLeft: '25%' }}
          onPress={() => props.navigation.navigate( 'RecipeDay3' ) }
          name="right" size={40} color="black" />
          
        </View>
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







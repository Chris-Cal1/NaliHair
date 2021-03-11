// Chris

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import argileVerte from '../assets/argileVerte.jpg';
import { StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import { Text, View, Content} from 'native-base';
import {  Button, Header } from 'react-native-elements';

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';

export default function RecipeDay2_0(props) {

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
      containerStyle = {{
        backgroundColor: 'white', 
        elevation: 6, 
        shadowOffsetX: 0,
        shadowOffsetY: -10,
        shadowColor: 'black', 
        shadowRadius: 7, 
        shadowOpacity: 0.2,
        paddingTop: "5%"
      }}
       leftComponent={<MaterialIcons 
                         name="arrow-back-ios" 
                         size={26} 
                         color="black" 
                         style={{marginLeft: 10}}
                         onPress={() => props.navigation.navigate('DailyProgram')}
                         />}
       centerComponent={{ text: 'Programmes', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
       rightComponent={<FontAwesome5 
                          name="user-alt" 
                          size={26} 
                          color="black" 
                          style={{marginRight: 10}}
                          onPress={() => props.navigation.navigate('Profil')}
                          />}
      />

<Content>
  <ScrollView>
   <View style={{  marginLeft: '6%', marginRight: '5%', marginTop: '5%' }}>
        <Text style={{ fontSize: 20, color: 'black', marginBottom: '4%', fontFamily: 'Roboto_500Medium', }}>Shampoing clarifiant à l'argile verte : </Text>
        <Image style={{ flex: 1, width: '100%', height: 150 }} source={argileVerte}/>
        
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
       
        
        <AntDesign 
          style={{ marginLeft: '85%' }}
          onPress={() => props.navigation.navigate( 'RecipeDay2_1' ) }
          name="right" size={40} color="black" />
          

          
        </View>
        
    
                      
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
     button: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      backgroundColor: "#222222", 
      borderRadius: 10, 
      width: 200, 
      height: 50,  
      marginTop: Platform.select({
        ios: '10%', 
        android:'7%', 
      }),
    }
  });







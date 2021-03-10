// Chris

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import basilic from '../assets/basilic.jpg';
import { StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import {  Header } from 'react-native-elements';
import { Button, Text, View, Content} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';


export default function RecipeDay1_0(props) {
    
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
   <View style={{  marginLeft: '6%', marginRight: '5%', marginTop: '5%' }}>
         <Image style={{ flex: 1, width: '100%', height: 150 }} source={basilic}/>
        
        <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 24, color: 'black', marginTop: '7%', marginBottom: '5%', fontWeight: 'bold' }}>Jour 01</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Les produits indispensable à votre routine sont :</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>-L'eau pour hydrater</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>-Les beurres et huiles pour nourrir</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>-Le shampoing pour nettoyer</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>-Le conditioner pour demêler</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>-Les protéines pour renforcer et gainer</Text>
        <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: '6%', marginBottom: '5%' }}>Ingrédients nécessaires</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Bain d'huile :</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Shampoing : Argile verte,</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Après shampoing hydratant (conditioner)</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Masque hydratant</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Sceller l'hydratation</Text>
        <Text style={{fontFamily: 'Roboto_400Regular'}}>Soin sans rinçage/ vaporisateur (leave-in)</Text>
        
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black', marginTop: '12%' }}>Durée</Text>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '10%',}}>
          <Text style={{fontFamily: 'Roboto_400Regular', marginRight: '80%'}}>3h</Text>
        <AntDesign 
          onPress={() => props.navigation.navigate( 'RecipeDay1_1' ) }
          name="right" size={40} color="black" />
        </View>
       
      



    </View>
    </ScrollView> 
    </Content>
    <StatusBar style="dark" backgroundColor='white'/>

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

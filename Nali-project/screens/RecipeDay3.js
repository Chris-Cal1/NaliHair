// Chris

import React from 'react';
import recipeDay3Photo from '../assets/recette22.jpg';
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
   
   <View style={{ marginLeft: 25, marginRight: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 55}}>
      <MaterialIcons 
                         name="arrow-back-ios" 
                         size={36} 
                         color="black" 
                         onPress={() => props.navigation.navigate('RecipeDay2')}
                         />
          <Text style={{ fontFamily: 'Handlee_400Regular', fontSize: 30, color: 'black', marginLeft: 100 }}>Retour</Text>
          <FontAwesome5 
                         style={{  marginLeft: 100 }}
                          name="user-alt" 
                          size={36} 
                          color="black" 
                          onPress={() => props.navigation.navigate('Profil')}
                          />
          </View>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: 10, marginBottom: 10 }}>L'après shampoing hydratant - crème d'avoine ou lait de coco :</Text>
         <Image style={{ flex: 1, width: 360 }} source={recipeDay3Photo}/>
       <ScrollView> 
         <Image style={{ flex: 1, width: 360, height: 150 }} source={recipeDay3Photo}/> 
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24, color: 'black', marginTop: 20, marginBottom: 10, fontWeight: 'bold' }}>Bienfaits</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>L'après shampoing a pour but de faciliter le demêlage de vos cheveux tout en les hydratant.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Tous les produits laitiers ont des propriétés hydratantes.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>La crème d'avoine est un excellent demêlant, elle apporte également de la souplesse et favorise la pousse des cheveux.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Le lait de coco possède des vertus nourissantes, hydratantes.</Text>
        <Text style={{ fontSize: 25, color: 'black',  marginTop: 10, marginBottom: 10 }}>Ingrédients nécessaires</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Crème d'avoine ou lait de coco bio</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: 15, marginBottom: 10 }}>Astuces</Text>
        <Text style={{ marginBottom: 10, fontFamily: 'Roboto_400Regular', fontSize: 13}}>Vous pouvez acheter la crème d'avoine en supermarché ou en magasin bio. Pour une qualité optimale vous pouvez réaliser une recette maison, Dans ce cas :</Text> 
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Versez 7 verres d'eau dans une casserolle et portez à ébullition, lorsque l'eau commence à bouillir ajoutez 1 verre de flocon d'avoine, puis remuer pendant 10 à 15 minutes, jusqu'à obtenir une texture épaisse et gélatineuse. Retirez la casserole du feu, laissez refroidir à température ambiante puis filtrez la crème avec une petite passoire ou à l'aide d'un tissu de façon à retire les résidus de flocons d'avoine.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Vous pouvez conserver les flocons d'avoine pour le petit déjeuner</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: 15, marginBottom: 10 }}>Mode d'emploi</Text>
        <Text style={{ marginBottom: 10, fontFamily: 'Roboto_400Regular', fontSize: 13}}>Appliquez la crème d'avoine ou le lait de coco sur vos cheveux section par section en commençant par les pointes. Enveloppez dans une serviette pour éviter que ça goutte puis laissez poser 20 minutes puis rincez à l'eau claire.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Conservez la crème d'avoine a côté elle sera utile pour la réalisation de votre spray hydratant ;-) gv</Text>
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
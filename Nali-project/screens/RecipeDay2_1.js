// Chris

import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import avoine from '../assets/avoine.jpg';
import { StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import { Button, Text, View, Content} from 'native-base';
import {  Header } from 'react-native-elements';

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';

import { connect } from 'react-redux';


 function RecipeDay2_1(props) {

  const[termine2, setTermine2] = useState(false);

  console.log(termine2, 'TERMINE2 =======>>>')

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
                         onPress={() => props.navigation.navigate('RecipeDay2_0')}
                         />}
       centerComponent={{ text: 'Programme', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
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
       <View style={{ marginLeft: '6%', marginRight: '5%', marginTop: '5%' }}>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginBottom: '4%'}}>L'après shampoing hydratant - crème d'avoine ou lait de coco :</Text>
       
         <Image style={{ flex: 1, width: '100%', height: 150 }} source={avoine}/> 
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24, color: 'black', marginTop: '5%', marginBottom: '3%', fontWeight: 'bold' }}>Bienfaits</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>L'après shampoing a pour but de faciliter le demêlage de vos cheveux tout en les hydratant.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Tous les produits laitiers ont des propriétés hydratantes.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>La crème d'avoine est un excellent demêlant, elle apporte également de la souplesse et favorise la pousse des cheveux.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Le lait de coco possède des vertus nourissantes, hydratantes.</Text>
        <Text style={{ fontSize: 25, color: 'black',  marginTop: '4%', marginBottom: '3%' }}>Ingrédients nécessaires</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Crème d'avoine ou lait de coco bio</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: '4%', marginBottom: '3%' }}>Astuces</Text>
        <Text style={{ marginBottom: '2%', fontFamily: 'Roboto_400Regular', fontSize: 13}}>Vous pouvez acheter la crème d'avoine en supermarché ou en magasin bio. Pour une qualité optimale vous pouvez réaliser une recette maison, Dans ce cas :</Text> 
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Versez 7 verres d'eau dans une casserolle et portez à ébullition, lorsque l'eau commence à bouillir ajoutez 1 verre de flocon d'avoine, puis remuer pendant 10 à 15 minutes, jusqu'à obtenir une texture épaisse et gélatineuse. Retirez la casserole du feu, laissez refroidir à température ambiante puis filtrez la crème avec une petite passoire ou à l'aide d'un tissu de façon à retire les résidus de flocons d'avoine.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Vous pouvez conserver les flocons d'avoine pour le petit déjeuner</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: '4%', marginBottom: '3%' }}>Mode d'emploi</Text>
        <Text style={{ marginBottom: '2%', fontFamily: 'Roboto_400Regular', fontSize: 13}}>Appliquez la crème d'avoine ou le lait de coco sur vos cheveux section par section en commençant par les pointes. Enveloppez dans une serviette pour éviter que ça goutte puis laissez poser 20 minutes puis rincez à l'eau claire.</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Conservez la crème d'avoine a côté elle sera utile pour la réalisation de votre spray hydratant ;-) gv</Text>
        <Button dark
          style={{marginTop: '11%', marginBottom: '50%', marginLeft: '35%', backgroundColor: '#222222'}}
          onPress={()=> {props.navigation.navigate( 'Bravo' ); setTermine2(true); props.rituel2Done(true); }}>
           <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 20}}> Terminé </Text>
         </Button>
        
                      
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
  });

  function mapDispatchToProps(dispatch){
    return {

      rituel2Done: function(done) {
        console.log(done, 'done ============>>>>');
        dispatch({type: 'doneTwo', done: done})

      }
    }
  }

  export default connect(
    null,
    mapDispatchToProps
  )(RecipeDay2_1)
import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import huileOlive from '../assets/huileOlive.jpg';
import { StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import { Text, View, Content} from 'native-base';
import {  Button, Header } from 'react-native-elements';

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';

import { connect } from 'react-redux';


function RecipeDay1_1(props) {

  const[termine, setTermine] = useState(false);

  console.log(termine, 'TERMINE =======>>>')




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
                         onPress={() => props.navigation.navigate('RecipeDay1_0')}
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
        <View style={{ marginLeft: '6%', marginRight: '5%', marginTop: '5%' }}>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginBottom: '4%'}}>Le bain d'huile d'olive ou d'avocat :</Text>
       
         <Image style={{ flex: 1, width: '100%', height: 150 }} source={huileOlive}/> 
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24, color: 'black', marginTop: '5%', marginBottom: '4%', fontWeight: 'bold' }}>Bienfaits</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>L'huile d'olive apporte brillance au cheveux. L'huile d'avocat, riche en vitamines convient aux cheveux secs et cassants auxquels elle redonne de l'éclat.</Text>
        <Text style={{ fontSize: 25, color: 'black',  marginTop: '5%', marginBottom: '4%' }}>Ingrédients nécessaires</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Huile d'olive ou d'avocat</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 13}}>Pour une qualité optimale, orienter-vous vers une huile bio, vierge, pression à froid.</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: '5%', marginBottom: '4%' }}>Mode d'emploi</Text>
        <Text style={{ marginBottom: '2%', fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Disposez dans un bol 6 cuillères à café de l'huile de votre choix. </Text>
        <Text style={{ marginBottom: '2%', fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Appliquez sur cheveux humides, répartissez l'huile sur vos cheveux section par section en commençant par les pointes. </Text>
        <Text style={{ marginBottom: '3%', fontFamily: 'Roboto_400Regular', fontSize: 13}}>- Laissez poser 20 minutes puis procéder au shampoing préconisé à l'étape suivante. </Text>
        <View style={{ justifyContent:'center', alignItems: 'center'}}>
        <Button 
          title="Terminé"
          titleStyle={{fontFamily: 'Roboto_700Bold', color: 'white'}}
          buttonStyle={styles.button}
          onPress={()=> {props.navigation.navigate( 'Bravo' ); setTermine(true); props.rituel1Done(true); }}
          >
         </Button>
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

  function mapDispatchToProps(dispatch){
    return {

      rituel1Done: function(done) {
        console.log(done, 'done ============>>>>');
        dispatch({type: 'doneOne', done: done})

      }
    }
  }

  export default connect(
    null,
    mapDispatchToProps
  )(RecipeDay1_1)
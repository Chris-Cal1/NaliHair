<<<<<<< HEAD

=======
>>>>>>> develop
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import { Text, View, Content} from 'native-base';
import {  Button, Header } from 'react-native-elements';

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';
import { connect } from 'react-redux';

 function RecipeDay7_0(props) {
  
  var recipe = props.recipe;
 console.log("RECETTE", recipe)
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
     <View style={{ marginLeft: '6%', marginRight: '5%', marginTop: '5%' }}>
  
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 24, color: 'black', marginTop: 10, marginBottom: 10}}>{recipe.title}</Text>
        <Image style={{ flex: 1, width: '100%', height: 150 }} source={{  uri: recipe.image, }}/>
        
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24, color: 'black', marginTop: '5%', marginBottom: '3%', fontWeight: 'bold' }}>Bienfaits</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular'}}>{recipe.benefits}</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: '4%', marginBottom: '3%' }}>Ingrédients nécessaires</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular'}}>{recipe.ingredients}</Text>
        <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 20, color: 'black',  marginTop: '4%', marginBottom: '3%' }}>Mode d'emploi</Text>
        <Text style={{ fontFamily: 'Roboto_400Regular'}}>{recipe.emploi}</Text>
        <View style={{ justifyContent:'center', alignItems: 'center'}}>
        <Button
          title="Terminé"
          titleStyle={{fontFamily: 'Roboto_700Bold', color: 'white'}}
          buttonStyle={styles.button}
          onPress={()=> {props.navigation.navigate( 'Bravo' ); props.rituel4Done(true); }}>
           <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 20}}> Terminé </Text>
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

  function mapStateToProps(state){
   // console.log('MON STATE RECETTE =================>>>>>>>>',state)
    return {recipe: state.recipe}
    
  }

  function mapDispatchToProps(dispatch){
    return {

      rituel4Done: function(done) {
        console.log(done, 'done ============>>>>');
        dispatch({type: 'doneAll', done: done})

      }
    }
  }

 
  export default connect(
  mapStateToProps,
  mapDispatchToProps,
  
  )
  (RecipeDay7_0);

//OK ECRAN

import React, { useState, useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, View} from 'react-native';
import { Card, ListItem, CheckBox } from 'react-native-elements'

import AsyncStorage from '@react-native-async-storage/async-storage';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';



export default function ShoppingList() {


  const [checkedBox1, setCheckedBox1] = useState(false);
  const [checkedBox2, setCheckedBox2] = useState(false);
  const [checkedBox3, setCheckedBox3] = useState(false);
  const [checkedBox4, setCheckedBox4] = useState(false);

 
  var handleSubmit1 = (check1) => {
    setCheckedBox1(check1);
    if(check1){
      AsyncStorage.setItem("ingredient1", 'coché')
    }else { 
      AsyncStorage.setItem("ingredient1", 'pas coché')
    }}
   

    var handleSubmit2 = (check2) => {
      setCheckedBox2(check2);
      if(check2){
        AsyncStorage.setItem("ingredient2", 'coché')
      }else { 
        AsyncStorage.setItem("ingredient2", 'pas coché')
      }}


      var handleSubmit3 = (check3) => {
        setCheckedBox3(check3);
        if(check3){
          AsyncStorage.setItem("ingredient3", 'coché')
        }else { 
          AsyncStorage.setItem("ingredient3", 'pas coché')
        }}
  
  
        var handleSubmit4 = (check4) => {
          setCheckedBox4(check4);
          if(check4){
            AsyncStorage.setItem("ingredient4", 'coché')
          }else { 
            AsyncStorage.setItem("ingredient4", 'pas coché')
          }}

      useEffect(() => {
       
        AsyncStorage.getItem('ingredient1', (error, data) => {
          if(data) {
           if(data==='coché') {
             setCheckedBox1(true) }
               else {setCheckedBox1(false)
                  { 
             }
           }
          }
        });

        AsyncStorage.getItem('ingredient2', (error, data) => {
          if(data) {
           if(data==='coché') {
             setCheckedBox2(true) }
               else {setCheckedBox2(false)
                  { 
             }
           }
          }
        });


        AsyncStorage.getItem('ingredient3', (error, data) => {
          if(data) {
           if(data==='coché') {
             setCheckedBox3(true) }
               else {setCheckedBox3(false)
                  { 
             }
           }
          }
        });


        AsyncStorage.getItem('ingredient4', (error, data) => {
          if(data) {
           if(data==='coché') {
             setCheckedBox4(true) }
               else {setCheckedBox4(false)
                  { 
             }
           }
          }
        });

      }, []);


      

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
    <ImageBackground source={require('../assets/002.png')}style={styles.container}> 

      <View style={{alignItems: 'flex-start', marginTop: '10%'}}>
   
          <Card containerStyle={{width: '70%', borderRadius: 10}}>

               <Text style={{fontSize: 30}}> Semaine 1</Text>

                  <ListItem style={{alignItems: 'flex-start', marginBottom: -34, borderRadius: 20 }}>
                    <CheckBox 
                    checked={checkedBox1}
                    checkedColor="#F475BB"
                    onPress={() => handleSubmit1(!checkedBox1)}/>
                    <Text>Huile d'olive</Text>      
                  </ListItem >
          
                  <ListItem style={{alignItems: 'flex-start', marginBottom: -34}}>
                    <CheckBox 
                    checked={checkedBox2}
                    checkedColor="#F475BB"
                    onPress={() => handleSubmit2(!checkedBox2)}
                    />
                    <Text>Beurre de karité</Text>         
                  </ListItem>
               
                  <ListItem style={{alignItems: 'flex-start', marginBottom: -34}}>
                    <CheckBox 
                    checked={checkedBox3}
                    checkedColor="#F475BB"
                    onPress={() => handleSubmit3(!checkedBox3)}/>
                    <Text>Lait d'avoine</Text>         
                  </ListItem>

                  <ListItem style={{alignItems: 'flex-start', marginBottom: -10}}>
                    <CheckBox 
                    checked={checkedBox4}
                    checkedColor="#F475BB"
                    onPress={() => handleSubmit4(!checkedBox4)}
                    />
                    <Text>Avocat</Text>         
                  </ListItem>

          </Card>

      </View>

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
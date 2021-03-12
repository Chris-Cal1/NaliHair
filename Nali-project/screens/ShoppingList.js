//OK ECRAN

import React, { useState, useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, View, ScrollView} from 'react-native';
import { Card, ListItem, CheckBox, Header } from 'react-native-elements'
import { Content} from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';



export default function ShoppingList(props) {


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
          centerComponent={{ text: 'Liste de course', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
          rightComponent={<FontAwesome5 
                              name="user-alt" 
                              size={26} 
                              color="black" 
                              style={{marginRight: 10}}
                              onPress={() => props.navigation.navigate('Profil', { screen: 'Profil' })}
                              />}
          />

<Content>

      <View style={{alignItems: 'flex-start', marginTop: '5%'}}>
          <Card containerStyle={styles.box}>

               <Text style={{fontSize: 30, fontFamily: 'Roboto_500Medium'}}> Semaine 1</Text>
                  
                  <ListItem style={{alignItems: 'flex-start', marginBottom: Platform.select({ios: -30, android: -35}),}}>
                    <CheckBox 
                    title="Huile d'olive"
                    checked={checkedBox1}
                    checkedColor="#F475BB"
                    containerStyle={{backgroundColor: 'white', borderColor: 'white'}}
                    textStyle= {{fontFamily: 'Roboto_400Regular', fontSize: 13}}
                    onPress={() => handleSubmit1(!checkedBox1)}/>
                  </ListItem >
          
                  <ListItem style={{alignItems: 'flex-start', marginBottom: Platform.select({ios: -30, android: -35}),}}>
                    <CheckBox 
                    title="Beurre de karité"
                    checked={checkedBox2}
                    checkedColor="#F475BB"
                    onPress={() => handleSubmit2(!checkedBox2)}
                    containerStyle={{backgroundColor: 'white', borderColor: 'white'}}
                    textStyle= {{fontFamily: 'Roboto_400Regular', fontSize: 13}}

                    />
                  </ListItem>
               
                  <ListItem style={{alignItems: 'flex-start', marginBottom: Platform.select({ios: -30, android: -35}),}}>
                    <CheckBox
                    title="Lait d'avoine" 
                    checked={checkedBox3}
                    checkedColor="#F475BB"
                    onPress={() => handleSubmit3(!checkedBox3)}
                    containerStyle={{backgroundColor: 'white', borderColor: 'white'}}
                    textStyle= {{fontFamily: 'Roboto_400Regular', fontSize: 13}}
                    />
                  </ListItem>

                  <ListItem style={{alignItems: 'flex-start', marginBottom: Platform.select({ios: -30, android: -10}), }}>
                    <CheckBox 
                    title="Avocat"
                    checked={checkedBox4}
                    checkedColor="#F475BB"
                    onPress={() => handleSubmit4(!checkedBox4)}
                    containerStyle={{backgroundColor: 'white', borderColor: 'white'}}
                    textStyle= {{fontFamily: 'Roboto_400Regular', fontSize: 13}}
                    />
                  </ListItem>

          </Card>

      </View>

      </Content>
    <StatusBar style="dark" backgroundColor='white'/>

   </ImageBackground>

  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Platform.select({
      ios: 350, 
      android: 300, 
    }),
    height: Platform.select({
      ios: "100%", 
      android: "95%", 
    }),
    backgroundColor: 'white',
    elevation: 6,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderColor: 'white',
    borderRadius: 10,
   },
});
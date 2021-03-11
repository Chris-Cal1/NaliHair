// Maurine

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, Text, TouchableOpacity, Linking } from 'react-native';
import {  Header, Avatar } from 'react-native-elements';
import { View, Content} from 'native-base';

import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';

import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Profil(props) {

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
      <ImageBackground source={require('../assets/004.png')} style={{flex: 1}}>

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
        onPress={() => props.navigation.navigate('RoutineChoice')}
        />}
       placement="left"
       centerComponent={{ text: 'Profil', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
     //  rightComponent={<FontAwesome5 
                    //      name="user-alt" 
                    //      size={26} 
                    //      color="black" 
                    //      onPress={() => props.navigation.navigate('Profil', { screen: 'Profil' })}
                    //      />}
      />
      <Content>

          <View style={{flex: 3, alignItems: 'center', justifyContent: 'flex-start', marginTop: '10%'}}>
              <Avatar
                size="xlarge"
                rounded
                source={require('../assets/carmen.jpg')}
                containerStyle={{
                backgroundColor: 'white',
                elevation: 6,
                shadowOffset: { width: 5, height: 5 },
                shadowColor: "black",
                shadowOpacity: 0.5,
                shadowRadius: 10,
              }}
              />
              <Text style={{fontSize: 25, marginTop: '2%', fontFamily: 'Roboto_700Bold'}}>Carmen Dupont</Text>
          </View>
 
          <View style={{flex: 4, alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: '5%', marginTop: '20%' }}>
              
              <TouchableOpacity style={styles.touchable} activeOpacity={1} onPress={() => props.navigation.navigate('MyDiary', { screen: 'MyDiary' })}>
                  <Ionicons name="journal" size={30} color="black" />
                  <Text style={styles.textMenu}>Journal de bord</Text>
              </TouchableOpacity>
      
              <TouchableOpacity style={styles.touchable} activeOpacity={1} onPress={() => props.navigation.navigate('Analyse', { screen: 'Analyse' })}>
                  <MaterialIcons name="favorite" size={30} color="#F543A5" /> 
                  <Text style={styles.textMenu}>Mes favoris</Text>
              </TouchableOpacity>
      
              <TouchableOpacity style={styles.touchable} activeOpacity={1} onPress={() => Linking.openURL('fb://page/104067248169932')}>
                  <MaterialIcons name="facebook" size={30} color="black" />
                  <Text style={styles.textMenu}>Suivez-nous !</Text>
              </TouchableOpacity>
      
              <TouchableOpacity style={styles.touchable} activeOpacity={1}>
                  <MaterialIcons name="info" size={30} color="black" />
                  <Text style={styles.textMenu}>FAQ</Text>
              </TouchableOpacity>
                                
              <TouchableOpacity style={styles.touchable} activeOpacity={1} onPress={() => {props.navigation.navigate('Signin', { screen: 'Signin' }); AsyncStorage.clear()}}> 
                  <Image source={require('../assets/logout.png')} style={{ width: 24, height: 24, marginLeft: '1%'}} /> 
                  <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 20, marginLeft: '4%'}}>Déconnexion</Text>
              </TouchableOpacity>
      
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
       justifyContent: 'flex-start',
     },
     touchable: {
      marginTop: '3%', 
      marginBottom: '3%', 
      flexDirection: 'row'
     },
     textMenu: {
      fontFamily: 'Roboto_700Bold',
      fontSize: 20,
      marginLeft: '3%'
     }
  });
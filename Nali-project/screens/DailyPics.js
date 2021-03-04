// Phyllis
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Linking, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import {  Header, SearchBar, Badge } from 'react-native-elements';
import { Content} from 'native-base';

import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';


export default function DailyPics(props) {
      
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
          <ImageBackground source={require('../assets/005.png')} style={{flex: 1}}>
    
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
            onPress={() => props.navigation.navigate('MyDiary', { screen: 'MyDiary' })}
            />}
           centerComponent={{ text: 'Journal de bord', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
           rightComponent={<FontAwesome5 
                              name="user-alt" 
                              size={26} 
                              color="black" 
                              onPress={() => props.navigation.navigate('Profil', { screen: 'Profil' })}
                              />}
          />
    
        <Content>

        <View style={{ marginLeft: '5%', marginTop: '8%', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24}}>Jour 01</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.boxImage}>
            <Image source={require('../assets/carmen.jpg')} style={{ height: '100%', width: '100%', borderRadius: 10 }} />
          </View>
        </View>

        <View style={{ marginLeft: '7%', marginTop: '12%', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 18}}> Routine du jour </Text>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 18}}> Masque d'argile effectué </Text>
          <Text style={{ fontFamily: 'Roboto_500Medium', fontSize: 18}}> Cheveux plus doux au touché </Text>
        </View>    

        <View style={styles.addIcon}>
        <Ionicons name="add-circle" size={40} color="black" onPress={() => props.navigation.navigate()}/>
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
     boxImage: {
      alignContent: 'center',
      marginTop: '8%', 
      height: 310, 
      width: Platform.select({
        ios: '85%', 
        android:'90%', 
      }),  
      borderRadius: 10, 
      backgroundColor: 'white', 
      elevation: 6, 
      shadowColor: 'black', 
      shadowRadius: 7, 
      shadowOpacity: 0.2,
     },
     addIcon: {
       ...Platform.select({
        ios: {
        marginRight: '10%', 
        marginTop: '20%',
        alignItems: 'flex-end', 
        justifyContent: 'flex-end',
      },
        android: {
        alignItems: 'flex-end', 
        justifyContent: 'flex-end',
        marginRight: '8%', 
        marginTop: '10%',
      },
      }),  
      },

  });
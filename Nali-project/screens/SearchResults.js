// Maurine front
// Chris back

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Linking, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import {  Header, SearchBar, Badge } from 'react-native-elements';
import { Content} from 'native-base';

import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';

export default function SearchResults(props) {
    
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
          <ImageBackground source={require('../assets/008.png')} style={{flex: 1}}>
    
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
            onPress={() => props.navigation.navigate('Analyse', { screen: 'Analyse' })}
            />}
           centerComponent={{ text: 'Analyse', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
           rightComponent={<FontAwesome5 
                              name="user-alt" 
                              size={26} 
                              color="black" 
                              onPress={() => props.navigation.navigate('Profil', { screen: 'Profil' })}
                              />}
          />
    
      <Content>
        <ScrollView>

          <TouchableOpacity activeOpacity={1} style={{marginTop: '7%', alignItems: 'center', justifyContent: 'center'}}>
            <View
            style={styles.box}>
              <Image source={require('../assets/shampoing.png')} style= {{width: 70, height: 110, marginLeft: '5%'}}/>
                <View style={{marginLeft: '5%'}}>
                  <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20, marginTop: '-10%'}}>Shampoing Doux</Text>
                  <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20}}>Aromazon</Text>
                  <View style={{flexDirection: 'row', marginTop: '16%'}}>
                    <Badge value=" "
                    status="success"// success = vert  //  warning = orange  //  error = rouge
                    />
                    <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 17, marginLeft: '5%'}}>18/20</Text>
                  </View>
                </View>
              <MaterialIcons name="favorite" size={30} color="#F543A5" style= {{marginLeft: '-2%', marginTop: '20%'}}/>
            </View> 
          </TouchableOpacity>

          <View style={styles.textAnalyse}>
            <Text style={styles.title}>
              Composition
            </Text>
            <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            </Text>
          </View>
          <View style={styles.textAnalyse}>
            <Text style={styles.title}>
              Avis
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
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
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    box: {
      alignItems: 'center',
      flexDirection: 'row',
      width: 300,
      height: 150,
      backgroundColor: 'white',
      elevation: 3,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: "black",
      shadowOpacity: 0.2,
      shadowRadius: 5,
      borderColor: 'white',
      borderRadius: 10,
     },
    title: {
     marginTop: '13%',
     marginBottom: '3%',
     alignItems: 'flex-start',
     justifyContent: 'flex-start',
     fontFamily: 'Roboto_700Bold',
     fontSize: 20,
    },
    textAnalyse: {
     marginLeft: '4%',
     marginRight: '3.5%',
     alignItems: 'flex-start',
     justifyContent: 'flex-start',
    
     
   },
  });
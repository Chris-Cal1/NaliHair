// Maurine

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Linking, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import {  Header, SearchBar, Badge } from 'react-native-elements';
import { Content} from 'native-base';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';




export default function Analyse(props) {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

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
      <ImageBackground source={require('../assets/006.png')} style={{flex: 1}}>

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
       placement="left"
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
        
        <View style={{alignItems: 'center', justifyContent: 'flex-start', marginTop: "12%"}}>
          <SearchBar
            lightTheme
            containerStyle={{
                backgroundColor: 'white',
                elevation: 6,
                zIndex: 2,
                shadowOffset: { width: 3, height: 3 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                shadowRadius: 5,
                borderColor: 'white',
                borderTopWidth:0,
                borderRadius: 10,
            }}        
            inputContainerStyle={{backgroundColor: 'white', width: 260, height: 45}}
            placeholder="Rechercher produit.."
            placeholderTextColor={ "grey" }
            searchIcon={{color:'#A1DEAB', size: 35 }}
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{color:'black'}}            
          />
          <Text style={{marginTop: '3%', fontSize: 14}}>Que contient votre produit capillaire préféré ?</Text>
        </View>

        <View style={{ marginLeft: '5%', marginTop: '15%', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20,}}>Historique et Favoris</Text>
        </View>


          <TouchableOpacity activeOpacity={1} style={{marginTop: '3%', alignItems: 'center', justifyContent: 'center'}} onPress={() => props.navigation.navigate('SearchResults', { screen: 'SearchResults' })}>
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
        <TouchableOpacity activeOpacity={1} style={{marginTop: '3%', alignItems: 'center', justifyContent: 'center'}} onPress={() => props.navigation.navigate('SearchResults', { screen: 'SearchResults' })}>
          <View
          style={styles.box}>
            <Image source={require('../assets/shampoing.png')} style= {{width: 70, height: 110, marginLeft: '5%'}}/>
              <View style={{marginLeft: '5%'}}>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20, marginTop: '-10%'}}>Shampoing Doux</Text>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20}}>Aromazon</Text>
                 <View style={{flexDirection: 'row', marginTop: '16%'}}>
                  <Badge value=" "
                  status="warning"// success = vert  //  warning = orange  //  error = rouge
                  />
                  <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 17, marginLeft: '5%'}}>11/20</Text>
                </View>
              </View>
            <MaterialIcons name="favorite" size={30} color="#F543A5" style= {{marginLeft: '-2%', marginTop: '20%'}}/>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={{marginTop: '3%', alignItems: 'center', justifyContent: 'center'}} onPress={() => props.navigation.navigate('SearchResults', { screen: 'SearchResults' })}>
          <View
          style={styles.box}>
            <Image source={require('../assets/shampoing.png')} style= {{width: 70, height: 110, marginLeft: '5%'}}/>
              <View style={{marginLeft: '5%'}}>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20, marginTop: '-10%'}}>Shampoing Doux</Text>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20}}>Aromazon</Text>
                 <View style={{flexDirection: 'row', marginTop: '16%'}}>
                  <Badge value=" "
                  status="error"// success = vert  //  warning = orange  //  error = rouge
                  />
                  <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 17, marginLeft: '5%'}}>6/20</Text>
                </View>
              </View>
            <MaterialIcons name="favorite" size={30} color="#F543A5" style= {{marginLeft: '-2%', marginTop: '20%'}}/>
          </View> 
        </TouchableOpacity>
        
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
     }
  });
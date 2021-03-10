// Marie

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import {  Header } from 'react-native-elements';
import { Button, Text, View, Content, Card, CardItem, Left, Body, Right} from 'native-base';

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';



export default function RoutineChoice(props) {

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
      <ImageBackground source={require('../assets/001.png')} style={{flex: 1}}>

      {/* header avec icone chevron à gauche et icone profil à droite -- onPress à compléter*/}
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
       centerComponent={{ text: 'Routines capillaires', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
       rightComponent={<FontAwesome5 
                          name="user-alt" 
                          size={26} 
                          color="black" 
                          onPress={() => props.navigation.navigate('Profil', { screen: 'Profil' })}
                          />}
      />

      <Content>

        <ScrollView>
 
          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Left style= {{marginLeft: 0}}>
                <Image source={require('../assets/manqueVolume.jpg')} style={styles.cardImage} />
              </Left>
              <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>Manque de volume</Text>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem enim.</Text>
                <View style={{flexDirection: 'row', marginTop: '3%'}}>
                  <Left>
                    <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12, marginTop: '10%'}}>7 jours</Text>
                  </Left>
                  <Right>
                    <MaterialIcons 
                                 name="arrow-forward-ios" 
                                 size={26} 
                                 color="#A1DEAB"
                                 style={{marginTop: '15%', marginRight: '20%'}}
                                 onPress={() => props.navigation.navigate('DailyProgram')}
                    />
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Left style= {{marginLeft: 0}}>
                <Image source={require('../assets/cheveuxTernes.jpg')} style={styles.cardImage} />
              </Left>
              <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>Cheveux ternes</Text>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem enim.</Text>
                <View style={{flexDirection: 'row', marginTop: '3%'}}>
                  <Left>
                    <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12, marginTop: '10%'}}>7 jours</Text>
                  </Left>
                  <Right>
                    <MaterialIcons 
                                 name="arrow-forward-ios" 
                                 size={26} 
                                 color="#A1DEAB"
                                 style={{marginTop: '15%', marginRight: '20%'}}
                                 onPress={() => props.navigation.navigate('DailyProgram')}
                    />
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Left style= {{marginLeft: 0}}>
                <Image source={require('../assets/pellicules.jpg')} style={styles.cardImage} />
              </Left>
              <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>Pellicules</Text>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem enim.</Text>
                <View style={{flexDirection: 'row', marginTop: '3%'}}>
                  <Left>
                    <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12, marginTop: '10%'}}>7 jours</Text>
                  </Left>
                  <Right>
                    <MaterialIcons 
                                 name="arrow-forward-ios" 
                                 size={26} 
                                 color="#A1DEAB"
                                 style={{marginTop: '15%', marginRight: '20%'}}
                                 onPress={() => props.navigation.navigate('DailyProgram')}
                    />
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Left style= {{marginLeft: 0}}>
                <Image source={require('../assets/cheveuxCassants.jpg')} style={styles.cardImage} />
              </Left>
              <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>Cheveux cassants</Text>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem enim.</Text>
                <View style={{flexDirection: 'row', marginTop: '3%'}}>
                  <Left>
                    <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12, marginTop: '10%'}}>7 jours</Text>
                  </Left>
                  <Right>
                    <MaterialIcons 
                                 name="arrow-forward-ios" 
                                 size={26} 
                                 color="#A1DEAB"
                                 style={{marginTop: '15%', marginRight: '20%'}}
                                 onPress={() => props.navigation.navigate('DailyProgram')}
                    />
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>



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
     card: {
      flex: 1, 
      marginLeft:'3%', 
      marginTop: '3%', 
      marginRight: '3%', 
      marginBottom: '3%', 
      borderRadius: 10, 
      borderColor: 'white',
      elevation: 3,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: "black",
      shadowOpacity: 0.1,
      shadowRadius: 3,
      borderColor: 'white',
     },
     cardItem: {
      paddingLeft: 0, 
      paddingRight: 0, 
      paddingTop: 0, 
      paddingBottom: 0, 
      borderRadius: 10,
    },
     cardImage: {
      borderBottomLeftRadius: 10, 
      borderTopLeftRadius: 10, 
      height: 150, 
      width: 100, 
      flex: 1,
     }
  });
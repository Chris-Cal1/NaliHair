// Marie

import React from 'react';
import { StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import {  Header } from 'react-native-elements';
import { Button, Text, View, Content, Card, CardItem, Left, Body, Right} from 'native-base';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';



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
      containerStyle = {{backgroundColor: 'white', elevation: 6,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, paddingTop: "5%"}}
       placement="left"
       centerComponent={{ text: 'Routines capillaires', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
       rightComponent={<FontAwesome5 
                          name="user-alt" 
                          size={26} 
                          color="black" 
                          onPress={() => props.navigation.navigate('HomeScreen')}
                          />}
      />

      <Content>

        <ScrollView>
 
          <Card style={{flex: 1, marginLeft:'3%', marginTop: '3%', marginRight: '3%', marginBottom: '3%', borderRadius: 10}}>
            <CardItem style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}}>
              <Left style= {{marginLeft: 0}}>
                <Image source={require('../assets/routines_capillaires_photo1.jpg')} style={{ height: 150, width: 150, flex: 1 }} />
              </Left>
              <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>Manque de volume</Text>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem enim.</Text>
                <View style={{flexDirection: 'row', marginTop: '3%'}}>
                  <Left>
                    <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12}}>7 jours</Text>
                  </Left>
                  <Right>
                    <MaterialIcons 
                                 name="arrow-forward-ios" 
                                 size={26} 
                                 color="#A1DEAB"
                                 onPress={() => props.navigation.navigate('DailyProgram')}
                    />
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>

          <Card style={{flex: 1, marginLeft:'3%', marginTop: '3%', marginRight: '3%', marginBottom: '3%', borderRadius: 10}}>
            <CardItem style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}}>
              <Left style= {{marginLeft: 0}}>
                <Image source={require('../assets/routines_capillaires_photo2.jpg')} style={{ height: 150, width: 150, flex: 1 }} />
              </Left>
              <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>Cheveux ternes</Text>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem enim.</Text>
                <View style={{flexDirection: 'row', marginTop: '3%'}}>
                  <Left>
                    <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12}}>7 jours</Text>
                  </Left>
                  <Right>
                    <MaterialIcons 
                                 name="arrow-forward-ios" 
                                 size={26} 
                                 color="#A1DEAB"
                                 onPress={() => props.navigation.navigate('DailyProgram')}
                    />
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>

          <Card style={{flex: 1, marginLeft:'3%', marginTop: '3%', marginRight: '3%', marginBottom: '3%', borderRadius: 10}}>
            <CardItem style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}}>
              <Left style= {{marginLeft: 0}}>
                <Image source={require('../assets/routines_capillaires_photo3.jpg')} style={{ height: 150, width: 150, flex: 1 }} />
              </Left>
              <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>Pellicules</Text>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem enim.</Text>
                <View style={{flexDirection: 'row', marginTop: '3%'}}>
                  <Left>
                    <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12}}>7 jours</Text>
                  </Left>
                  <Right>
                    <MaterialIcons 
                                 name="arrow-forward-ios" 
                                 size={26} 
                                 color="#A1DEAB"
                                 onPress={() => props.navigation.navigate('DailyProgram')}
                    />
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>

          <Card style={{flex: 0, marginLeft:'3%', marginTop: '3%', marginRight: '3%', marginBottom: '3%', borderRadius: 10}}>
            <CardItem style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}}>
              <Left style= {{marginLeft: 0}}>
                <Image source={require('../assets/routines_capillaires_photo4.jpg')} style={{ height: 150, width: 150, flex: 1 }} />
              </Left>
              <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>Cheveux cassants</Text>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem enim.</Text>
                <View style={{flexDirection: 'row', marginTop: '3%'}}>
                  <Left>
                    <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12}}>7 jours</Text>
                  </Left>
                  <Right>
                    <MaterialIcons 
                                 name="arrow-forward-ios" 
                                 size={26} 
                                 color="#A1DEAB"
                                 onPress={() => props.navigation.navigate('DailyProgram')}
                    />
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>

          </ScrollView>

        </Content>
      
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
  });
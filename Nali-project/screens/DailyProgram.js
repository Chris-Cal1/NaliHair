// Marie

import React from 'react';
import { StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import {  Header } from 'react-native-elements';
import { Button, Text, View, Content, Card, CardItem, Left, Body, Right} from 'native-base';
import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';


export default function DailyProgram() {

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
        containerStyle = {{backgroundColor: 'white', elevation: 6,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, paddingTop: "5%"}}
         placement="left"
         centerComponent={{ text: 'Programmes', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
         rightComponent={<FontAwesome5 
                          name="user-alt" 
                          size={26} 
                          color="black" 
                          onPress={() => props.navigation.navigate('Profil')}
                          />}
      />

      <View>

        <ScrollView>

        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24, paddingBottom: '4%' }}>Manque de volume</Text>
                <View style={{flexDirection: 'row'}}>
                  <Left>
                    <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem enim.</Text>
                  </Left>
                  <Right>
                    <Button style={{backgroundColor: '#A1DEAB', height: 50, width: 50, paddingLeft: '7%', borderRadius: 10 }}>
                     <Entypo
                        name="shopping-basket"
                        size={26}
                        color="#222"
                        onPress={() => props.navigation.navigate('ShoppingList')}
                      />
                    </Button>
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>

          {/*Liste des jours */}

          <Card style={{borderRadius: 10, marginBottom: '3%'}}>
            <CardItem>
              <Left>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17,}}>Jour 1</Text>
              </Left>
              <Right>
                <MaterialIcons 
                  name="arrow-forward-ios" 
                  size={24} 
                  color="#222"
                  onPress={() => props.navigation.navigate('DailyProgram')}
                />
              </Right>
            </CardItem>
          </Card>

          <Card style={{borderRadius: 10, marginBottom: '3%'}}>
            <CardItem>
             <Left>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17,}}>Jour 2</Text>
              </Left>
              <Right>
                <MaterialIcons 
                  name="arrow-forward-ios" 
                  size={24} 
                  color="#222"
                  onPress={() => props.navigation.navigate('DailyProgram')}
                />
              </Right>
            </CardItem>
          </Card>

          <Card style={{borderRadius: 10, marginBottom: '3%'}}>
            <CardItem>
              <Left>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17,}}>Jour 3</Text>
              </Left>
              <Right>
                <MaterialIcons 
                  name="arrow-forward-ios" 
                  size={24} 
                  color="#222"
                  onPress={() => props.navigation.navigate('DailyProgram')}
                />
              </Right>
            </CardItem>
          </Card>

          <Card style={{borderRadius: 10, marginBottom: '3%'}}>
            <CardItem>
              <Left>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17,}}>Jour 4</Text>
              </Left>
              <Right>
                <MaterialIcons 
                  name="arrow-forward-ios" 
                  size={24} 
                  color="#222"
                  onPress={() => props.navigation.navigate('DailyProgram')}
                />
              </Right>
            </CardItem>
          </Card>

          <Card style={{borderRadius: 10, marginBottom: '3%'}}>
            <CardItem>
              <Left>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17,}}>Jour 5</Text>
              </Left>
              <Right>
                <MaterialIcons 
                  name="arrow-forward-ios" 
                  size={24} 
                  color="#222"
                  onPress={() => props.navigation.navigate('DailyProgram')}
                />
              </Right>
            </CardItem>
          </Card>

          <Card style={{borderRadius: 10, marginBottom: '3%'}}>
            <CardItem>
              <Left>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17,}}>Jour 6</Text>
              </Left>
              <Right>
                <MaterialIcons 
                  name="arrow-forward-ios" 
                  size={24} 
                  color="#222"
                  onPress={() => props.navigation.navigate('DailyProgram')}
                />
              </Right>
            </CardItem>
          </Card>

          <Card style={{borderRadius: 10}}>
            <CardItem>
              <Left>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17,}}>Jour 7</Text>
              </Left>
              <Right>
                <MaterialIcons 
                  name="arrow-forward-ios" 
                  size={24} 
                  color="#222"
                  onPress={() => props.navigation.navigate('DailyProgram')}
                />
              </Right>
            </CardItem>
          </Card>
        </Content>

        </ScrollView>
      </View>
      
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
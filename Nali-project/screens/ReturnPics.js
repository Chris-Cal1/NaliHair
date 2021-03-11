// Phyllis
import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Linking,  ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import {  Header, SearchBar, Badge } from 'react-native-elements';

import {  Text, View, Card, CardItem, Left, Body, Right, Button, Textarea} from 'native-base';
import { MaterialIcons, FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';
import {connect} from 'react-redux';

function ReturnPics(props) {
      
  var photoDay = props.photo;
  console.log("PHOTODAY", photoDay)

  /*var myPics = props.photo.map((photo, i) => {
    console.log(photo, "PHOTO")
    return(
     
     <TouchableOpacity key= {i}
      onPress={() => props.navigation.navigate('DailyPics', { screen: 'DailyPics' })}>
      <Card style={{flex: 1, marginLeft:'3%', marginTop: '3%', marginRight: '3%', marginBottom: '3%'}}>
              <CardItem style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0, borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black",shadowColor: "black", shadowRadius: 10}}>
                <Left style= {{marginLeft: 0}}>
                  <Image source={{uri: photo.url}}
                         style={{ height: 150, width: 150, flex: 1 }} />
                </Left>
                <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                  <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>{new Date(photo.date).toLocaleDateString()}</Text>
                  <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12, color: 'black', marginBottom: '2%'}}>{photo.comment}</Text>
                  <View style={{flexDirection: 'row', marginTop: '3%'}}>
                    <Left>
                      <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12}}></Text>
                    </Left>
                    <Right style= {{paddingRight:'3%'}}>
                      <SimpleLineIcons 
                        name="trash" 
                        size={20} 
                        color="black"
                      />
                    </Right>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
    )
})*/

/*var mesPhotos = photoDay.map((pics, i) => {
  return (
    <TouchableOpacity key= {i}
      onPress={() => props.navigation.navigate('DailyPics', { screen: 'DailyPics' })}>
      <Card style={{flex: 1, marginLeft:'3%', marginTop: '3%', marginRight: '3%', marginBottom: '3%'}}>
              <CardItem style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0, borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black",shadowColor: "black", shadowRadius: 10}}>
                <Left style= {{marginLeft: 0}}>
                  <Image source={{uri: pics.url}}
                         style={{ height: 150, width: 150, flex: 1 }} />
                </Left>
                <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                  <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>{new Date(pics.date).toLocaleDateString()}</Text>
                  <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12, color: 'black', marginBottom: '2%'}}>{pics.comment}</Text>
                  <View style={{flexDirection: 'row', marginTop: '3%'}}>
                    <Left>
                      <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12}}></Text>
                    </Left>
                    <Right style= {{paddingRight:'3%'}}>
                      <SimpleLineIcons 
                        name="trash" 
                        size={20} 
                        color="black"
                      />
                    </Right>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
  )
})*/


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
    
    
       <View>
           <ScrollView>
           { /*{myPics}*/}
           {/*{mesPhotos}*/}
           <TouchableOpacity 
      onPress={() => props.navigation.navigate('DailyPics', { screen: 'DailyPics' })}>
      <Card style={{flex: 1, marginLeft:'3%', marginTop: '3%', marginRight: '3%', marginBottom: '3%'}}>
              <CardItem style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0, borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black",shadowColor: "black", shadowRadius: 10}}>
                <Left style= {{marginLeft: 0}}>
                  <Image source={{uri: props.photo.url}}
                         style={{ height: 150, width: 150, flex: 1 }} />
                </Left>
                <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                  <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>{new Date(props.photo.date).toLocaleDateString()}</Text>
                  <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12, color: 'black', marginBottom: '2%'}}>{props.photo.comment}</Text>
                  <View style={{flexDirection: 'row', marginTop: '3%'}}>
                    <Left>
                      <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12}}></Text>
                    </Left>
                    <Right style= {{paddingRight:'3%'}}>
                      <SimpleLineIcons 
                        name="trash" 
                        size={20} 
                        color="black"
                      />
                    </Right>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
            </ScrollView>
            </View>
       

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

  function mapStateToProps(state) {
   // console.log(state);
    return { photo: state.photo, token: state.token }
  }

  export default connect(
    mapStateToProps, 
    null,
  )(ReturnPics);
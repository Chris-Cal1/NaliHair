// Marie

// Marie
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {  Header, Overlay } from 'react-native-elements';
import {  Text, View, Card, CardItem, Left, Body, Right, Button, Textarea} from 'native-base';
import { SimpleLineIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';

//import {Calendar, CalendarList, Agenda, WeekCalendar} from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';
//import moment from 'moment';


export default function MyDiary(props) {

  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };



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
        containerStyle = {{backgroundColor: 'white', elevation: 6,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, paddingTop: "5%"}}
        placement="left"
        centerComponent={{ text: 'Journal de bord', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
        rightComponent={<FontAwesome5 
                          name="user-alt" 
                          size={26} 
                          color="black" 
                          onPress={() => props.navigation.navigate('Profil', { screen: 'Profil' })}
                          />}
      />
  
  <View>

     
  <CalendarStrip
      scrollable
      style={{height:100, margin: '4%',borderRadius: 10, elevation: 6,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10}}
      calendarColor={'#fff'}
      calendarHeaderStyle={{ color: '#222', fontSize: 17, paddingTop: '5%'}}
      dateNumberStyle={{color: '#222'}}
      dateNameStyle={{color: '#222', fontSize: 10}}
      markedDatesStyle={{color:'#222'}}
      highlightDateNumberStyle={{color: '#F475BB', fontSize:16}}
      highlightDateNameStyle={{color: '#F475BB', fontFamily: 'Handlee_400Regular', fontSize: 12}}
      onDateSelected = { ( day )  => {console.log('selected day', day) }}
      iconContainer={{flex: 0.1}}
      
    />

  <Button
      style={{marginTop: '3%', marginBottom: '3%', marginLeft: '20%', marginRight:'10%', backgroundColor: '#222222', justifyContent: 'center', alignItems: 'center', borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black",shadowColor: "black", shadowRadius: 10}}
      onPress={()=> {props.navigation.navigate( 'SnapScreen' )}}>
        <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 20}}> Prendre une photo </Text>
  </Button>

  <ScrollView>
  <TouchableOpacity 
    onPress={() => props.navigation.navigate('DailyPics', { screen: 'DailyPics' })}>
    <Card style={{flex: 1, marginLeft:'3%', marginTop: '3%', marginRight: '3%', marginBottom: '3%'}}>
            <CardItem style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0, borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black",shadowColor: "black", shadowRadius: 10}}>
              <Left style= {{marginLeft: 0}}>
                <Image source={require('../assets/carmen.jpg')}
                       style={{ height: 150, width: 150, flex: 1 }} />
              </Left>
              <Body style={{justifyContent: 'center', marginLeft: '2%'}}>
                <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>Date</Text>
                <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12, color: 'black', marginBottom: '2%'}}>Commentaire</Text>
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
  });
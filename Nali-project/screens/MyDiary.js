import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Button, Header, Overlay } from 'react-native-elements';
import {  Text, View, Card, CardItem, Left, Body, Right, Textarea} from 'native-base';
import { SimpleLineIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';

//import {Calendar, CalendarList, Agenda, WeekCalendar} from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import {connect} from 'react-redux';

function MyDiary(props) {

  const [myPicture, setMyPicture] = useState([]);

useEffect(() => {
  const findPhoto = async () => {

    const dataWishlist = await fetch(`http://10.0.0.103:3000/card-picture?token=${props.token}`)

    const body = await dataWishlist.json()

   // console.log("BODY ARTICLE  ====>>>",body.articles)
   // if(body.articles){

       setMyPicture(body)
       props.loadingPhoto(body)
   //console.log('YOUPI', body)
    //}

  }

  findPhoto()
},[])

// suppression d'une photo
  const handleClickDeletePhoto = async (id) => {

  const response = await fetch('http://10.0.0.103:3000/delete-photo', {
   method: 'DELETE',
   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
   body: `id=${id}&token=${props.token}`
  });
   var myPictureCopy = [...props.loadingPics]
    var position = null
    console.log("myPictureCopy", myPictureCopy, id)
     for(let i=0;i<myPictureCopy.length;i++){
         if(myPictureCopy[i]._id == id){
            position = i
            myPictureCopy.splice(position,1);
             
         }
     } props.loadingPhoto(myPictureCopy)    

}

var myPics = props.loadingPics;


var cardPicture = myPics.map((picture, i) => {
  console.log(picture, 'PIC PIC')
  return (
    <TouchableOpacity key = {i}
    onPress={() => props.navigation.navigate('DailyPics', { screen: 'DailyPics' })}>
    <Card style={{flex: 1, borderRadius: 10, marginLeft:'3%', marginTop: '3%', marginRight: '3%', marginBottom: '3%'}}>
            <CardItem style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0, borderRadius: 10,  elevation: 6,shadowOffset: { width: 5, height: 5 },shadowColor: "black",borderColor: "white", shadowRadius: 10}}>
              <Left style= {{marginLeft: 0}}>
                <Image source={{uri: picture.url}}
                       style={{ height: 150, width: 150, flex: 1, borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }} />
              </Left>
              <Body style={{justifyContent: 'center', marginLeft: '3%'}}>
               <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, color: 'black', marginBottom: '2%'}}>{new Date(picture.date).toLocaleDateString()}</Text>
                <Text style={{fontFamily: 'Roboto_300Light', fontSize: 12, color: 'black', marginBottom: '15%'}}>{picture.comment}</Text>
                <View style={{flexDirection: 'row', marginTop: '3%', marginBottom: '-5%'}}>
                  <Right style= {{paddingRight:'13%'}}>
                    <SimpleLineIcons 
                      name="trash" 
                      size={20} 
                      color="black"
                      onPress={() => handleClickDeletePhoto(picture._id)}
                    />  
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>

  )
}).reverse()



var handleTest = (day) => {
  var thisDay = day;

    //console.log(new Date(thisDay).toLocaleDateString(), "DAY DAY DAY DAY")
        myPicture.map((date, i) => {
        
          //console.log(new Date(date.date).toLocaleDateString(), "DATE string")
           // console.log(date.date.slice(0, 10), "DATE")
           //console.log(date, "date test")
           if(new Date(date.date).toLocaleDateString() == new Date(thisDay).toLocaleDateString()){
            props.sendPhoto(date)
            //props.navigation.navigate('ReturnPics')
             
       }
        props.navigation.navigate('ReturnPics')
    
  })
  
}

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
        placement="left"
        centerComponent={{ text: 'Journal de bord', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
        rightComponent={<FontAwesome5 
                          name="user-alt" 
                          size={26} 
                          color="black" 
                          style={{marginRight: 10}}
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
      onDateSelected = { ( day )  => { console.log('selected day', day); handleTest(day) }}
      
      iconContainer={{flex: 0.1}}
      
    />
            <Button
              title="Prendre une photo"
              titleStyle={{fontFamily: 'Roboto_700Bold', color: 'white'}}
              buttonStyle={styles.button}
              onPress={()=> {props.navigation.navigate( 'SnapScreen' )}}>
            </Button>

  <ScrollView style={{ marginBottom: "80%"}}>

  {cardPicture}
  
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
     button: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      backgroundColor: "#222222", 
      borderRadius: 10, 
      width: 200, 
      height: 50,  
      marginBottom: Platform.select({
        ios: '5%', 
        android:'5%', 
      }),
    }
  });

  function mapStateToProps(state) {
    //console.log(state);
    return {  token: state.token, loadingPics: state.loadPhoto }
  }

  function mapDispatchToProps(dispatch){
    return {
  
      sendPhoto: function(photo) {
       // console.log(photo, 'PHOTO ============>>>>');
        dispatch({type: 'sendPhoto', photo: photo})
  
      },
      loadingPhoto: function(photo) {
        //console.log(photo, 'PHOTO ============>>>>');
        dispatch({type: 'loadingPhoto', photo: photo})
  
      }
    }
  }

  export default connect(
    mapStateToProps, 
    mapDispatchToProps,
  )(MyDiary);
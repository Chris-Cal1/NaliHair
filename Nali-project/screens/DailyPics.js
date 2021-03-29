import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Linking, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import {  Header, SearchBar, Badge, Input } from 'react-native-elements';
import { Content} from 'native-base';

import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';
import {connect} from 'react-redux';

function DailyPics(props) {
      
  const [comment, setComment] = useState('');
  var date = new Date().toLocaleDateString()
  var photo = props.pictureList;

 //console.log("PHOTO", photo[0]._parts[0].[1].uri)

 //sending information for a new photo card
var handleSubmit = async () => {
     
                var data = new FormData();
                data.append('avatar', {
                  uri: photo._parts[0].[1].uri,
                  type: 'image/jpeg',
                  name: 'avatar.jpg'   
                });
                data.append('token', props.token);
                data.append('comment', comment)
           
  const database = await fetch("http://10.0.0.106:3000/add-pics", {
    method: 'POST',
    body: data 
   
  })
   const body = await database.json()
  props.sendPhoto(body.photoSave)
  props.navigation.navigate('MyDiary')

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

         <ScrollView >
              <Content  >
           
          <View style={{ marginLeft: '5%', marginTop: '8%', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24}}>{date}</Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.boxImage}>
             <Image source={{ uri: photo._parts[0].[1].uri}} style={{ height: '100%', width: '100%', borderRadius: 10 }} />
            </View>
          </View>    

          
          <View style={{flexDirection: 'row', margin: 20, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.input}> 
          <Input
            multiline={true}
            numberOfLines={5}
            style={{ fontSize: 15}}
            inputContainerStyle={{backgroundColor:'white', height: 95,}}
            containerStyle={{backgroundColor:'white', height: 115, borderRadius: 10}}
            placeholder="Indiquez le soin du jour et commentez l'état de vos cheveux"
            onChangeText={(val) => setComment(val)}
          />
        </TouchableOpacity>
        </View>
           
            <TouchableOpacity  style={{marginTop: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', fontSize: 40, color: 'white', backgroundColor: "#222222", fontFamily: 'Roboto', borderRadius: 10, height: 50, width: 180}}
            onPress={() => handleSubmit()}>
            <Text style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', color: 'white', fontFamily: 'Roboto', fontSize: 20}}> Valider </Text>
          </TouchableOpacity >
        
          </Content>
     </ScrollView>
       

       
        

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
     input: {
      shadowOffset: { width: 5, height: 5 },
      shadowColor: "black",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      borderColor: 'white',
      height: '110%', 
      backgroundColor: "white", 
      width: Platform.select({
        ios: '95%', 
        android:'100%'
      }), 
      borderRadius: 10, 
      elevation: 3
      }
  });

  function mapStateToProps(state) {
   // console.log(state);
    
    return { pictureList : state.picture, token: state.token }
  }
// sending information from the database to the reducer
  function mapDispatchToProps(dispatch){
    return {
  
      sendPhoto: function(pics) {
        dispatch({type: 'sendPics', pics: pics})
  
      }
      
    }
  }

  export default connect(
    mapStateToProps, 
    mapDispatchToProps,
  )(DailyPics);
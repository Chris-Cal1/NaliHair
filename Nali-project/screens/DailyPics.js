// Phyllis
import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Linking, Text, View, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import {  Header, SearchBar, Badge } from 'react-native-elements';
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
var handleSubmit = async () => {
 
               
                var data = new FormData();
                data.append('avatar', {
                  uri: photo[0]._parts[0].[1].uri,
                  type: 'image/jpeg',
                  name: 'avatar.jpg'   
                });
                data.append('token', props.token);
                data.append('comment', comment)


               
               

  const database = await fetch("http://192.168.0.213:3000/dailypics", {
    method: 'POST',
    body: data 
  })
}

var myPicture = props.pictureList.map((url, i) => {
  //console.log(url._parts[0].[1].uri, "MY URL")
  return(
    <Content key= {i}>

        <View style={{ marginLeft: '5%', marginTop: '8%', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24}}>{date}</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.boxImage}>
            <Image source={{ uri: url._parts[0].[1].uri}} style={{ height: '100%', width: '100%', borderRadius: 10 }} />
          </View>
        </View>    

        <View style={styles.addIcon}>
        <Ionicons name="add-circle" size={40} color="black" onPress={() => props.navigation.navigate()}/>
        </View>
         

        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderColor: 'grey', height: '20%', backgroundColor: "white", width: '90%', margin: 20, borderRadius: 10, elevation: 5, }}> 
        <TextInput  style={{justifyContent: 'center', alignItems: 'center'}}
          multiline={true}
          numberOfLines={10}
          placeholder="Indiquez le soin du jour et commentez l'état de vos cheveux"
         onChangeText={(val) => setComment(val)}
         />
      </TouchableOpacity>

       <TouchableOpacity  style={{ justifyContent: 'center', alignItems: 'center', fontSize: 40, color: 'white', backgroundColor: "#222222", marginTop: 15, fontFamily: 'Roboto', borderRadius: 10, height: 50, width: 180, alignItems: 'center', justifyContent: 'center', marginLeft: "25%", marginBottom: "60%"}}
        onPress={() => handleSubmit()}
        >
        <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 20}}> Valider </Text>
       </TouchableOpacity >

        </Content>
  )

})



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
    <ScrollView>
        {myPicture}
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
    //console.log(state);
    return { pictureList : state.picture, token: state.token }
  }

  export default connect(
    mapStateToProps, 
    null,
  )(DailyPics);
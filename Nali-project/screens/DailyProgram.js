// Marie

import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, ImageBackground } from 'react-native';
import {  Header, CheckBox } from 'react-native-elements';
import { Button, Text, View, Content, Card, CardItem, Left, Body, Right} from 'native-base';
//icons
import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
//fonts
import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';
//storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';


function DailyProgram(props) {

  const [done1, setDone1] = useState(false);
  const [done2, setDone2] = useState(false);
  const [done3, setDone3] = useState(false);
  const [done4, setDone4] = useState(false);
  const [done5, setDone5] = useState(false);
  const [done6, setDone6] = useState(false);
  const [done7, setDone7] = useState(false);

  var handleSubmit1 = () => {
    setDone1(true);
  } 

  var handleSubmit2 = () => {
    setDone2(true);
  }

  var handleSubmit3 = () => {
    setDone3(true);
  }

  var handleSubmit4 = () => {
    setDone4(true);
  }

  var handleSubmit5 = () => {
    setDone5(true);
  }

  var handleSubmit6 = () => {
    setDone6(true);
  }

  var handleSubmit7 = () => {
    setDone7(true);
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
                    <Button style={{backgroundColor: '#A1DEAB', height: 50, width: 50, paddingLeft: '7%', borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10 }}>
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

          <CheckBox
                containerStyle = {{borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, marginBottom:'2%', marginTop:'7%'}}
                title = {<Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, paddingRight:'75%'}}>Jour 1</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => props.navigation.navigate('RecipeDay1_0')}
                              />}
                checked = {props.dayDone1}
                //onPress={() => handleSubmit1()}
            />

          <CheckBox
                containerStyle = {{borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, marginBottom:'2%'}}
                title = {<Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, paddingRight:'75%'}}>Jour 2</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => props.navigation.navigate('RecipeDay2_0')}
                              />}
                checked = {props.dayDone2}
                //onPress={() => handleSubmit2()}
            />

          <CheckBox
                containerStyle = {{borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, marginBottom:'2%'}}
                title = {<Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, paddingRight:'75%'}}>Jour 3</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => props.navigation.navigate('RecipeDay3_0')}
                              />}
                checked = {props.dayDone3}
                //onPress={() => handleSubmit3()}
            />

          <CheckBox
                containerStyle = {{borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, marginBottom:'2%'}}
                title = {<Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, paddingRight:'75%'}}>Jour 4</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => props.navigation.navigate('RecipeDay4_0')}
                              />}
                checked = {props.dayDone4}
                //onPress={() => handleSubmit4()}
            />           

          <CheckBox
                containerStyle = {{borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, marginBottom:'2%'}}
                title = {<Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, paddingRight:'75%'}}>Jour 5</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => props.navigation.navigate('RecipeDay5_0')}
                              />}
                checked = {done5}
                onPress={() => handleSubmit5()}
            /> 

          <CheckBox
                containerStyle = {{borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, marginBottom:'2%'}}
                title = {<Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, paddingRight:'75%'}}>Jour 6</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => props.navigation.navigate('RecipeDay6_0')}
                              />}
                checked = {done6}
                onPress={() => handleSubmit6()}
            />

          <CheckBox
                containerStyle = {{borderRadius: 10,  elevation: 10,shadowOffset: { width: 5, height: 5 },shadowColor: "black", shadowColor: "black", shadowRadius: 10, marginBottom:'2%'}}
                title = {<Text style={{fontFamily: 'Roboto_700Bold', fontSize: 17, paddingRight:'75%'}}>Jour 7</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => props.navigation.navigate('RecipeDay7_0')}
                              />}
                checked = {done7}
                onPress={() => handleSubmit7()}
            />

        </Content>


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


function mapStateToProps(state) {
  return{dayDone1: state.done1, dayDone2: state.done2, dayDone3: state.done3, dayDone4: state.done4 }
}


export default connect(
  mapStateToProps,
  null,
)(DailyProgram)
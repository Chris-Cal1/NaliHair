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

  const [done5, setDone5] = useState(false);
  const [done6, setDone6] = useState(false);
 

  var handleSubmit5 = () => {
    setDone5(true);
  }

  var handleSubmit6 = () => {
    setDone6(true);
  }


// recherche d'une recette 
var findRecipe = async day => {
    

  const saveReq = await fetch('http:/10.0.0.103:3000/search-recipe', {

     method: 'POST',
     headers: {'Content-Type':'application/x-www-form-urlencoded'},
     body: `day=${day}`
    }); 
    var response = await saveReq.json();
    console.log(response.recipe, 'RESPONSE.RECIPE =================>>>')
    

    if(response.recipe) {
      props.sendRecipe(response.recipe)
      props.navigation.navigate('RecipeDay7_0')
    }
    
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
         centerComponent={{ text: 'Programmes', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
         rightComponent={<FontAwesome5 
                          name="user-alt" 
                          size={26} 
                          color="black" 
                          style={{marginRight: 10}}
                          onPress={() => props.navigation.navigate('Signin')}

                          />}
      />

<ScrollView>
      <View>
        <Content padder>
          <Card transparent style={{marginBottom: '5%'}}>
            <CardItem>
              <Body>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24, paddingBottom: '4%' }}>Manque de volume</Text>
                <View style={{flexDirection: 'row'}}>
                  <Left style= {{marginRight: -40}}>
                    <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 13}}>Pour donner du volume aux cheveux fins, on adopte des huiles légères comme l'huile de coco, de macadamia, de jojoba, de carotte.</Text>
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
                containerStyle = {styles.box}
                title = {<Text style={styles.jour}>Jour 1</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => props.navigation.navigate('RecipeDay1_0')}
                              />}
                checked = {props.dayDone1}
                onPress={() => props.navigation.navigate('RecipeDay1_0')}
            />

          <CheckBox
                containerStyle = {styles.box}
                title = {<Text style={styles.jour}>Jour 2</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => props.navigation.navigate('RecipeDay2_0')}
                              />}
                checked = {props.dayDone2}
                onPress={() => props.navigation.navigate('RecipeDay2_0')}
                
            />

          <CheckBox
                containerStyle = {styles.box}
                title = {<Text style={styles.jour}>Jour 3</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => props.navigation.navigate('RecipeDay3_0')}
                              />}
                checked = {props.dayDone3}
                onPress={() => props.navigation.navigate('RecipeDay3_0')}
              
            />

          <CheckBox
                containerStyle = {styles.box}
                title = {<Text style={styles.jour}>Jour 4</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => props.navigation.navigate('RecipeDay4_0')}
                              />}
                checked = {props.dayDone4}
                onPress={() => props.navigation.navigate('RecipeDay4_0')}
                
            />           

          <CheckBox
                containerStyle = {styles.box}
                title = {<Text style={styles.jour}>Jour 5</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => findRecipe('day7')}
                              />}
                checked = {done5}
                onPress={() => findRecipe('day7')}
            /> 

          <CheckBox
                containerStyle = {styles.box}
                title = {<Text style={styles.jour}>Jour 6</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => findRecipe('day7')}
                              />}
                checked = {done6}
                onPress={() => findRecipe('day7')}
            />

          <CheckBox
                containerStyle = {styles.box}
                title = {<Text style={styles.jour}>Jour 7</Text>}
                iconRight
                checkedIcon = {<Entypo name="check" size={24} color="#A1DEAB"/>}
                uncheckedIcon={<MaterialIcons 
                                  name="arrow-forward-ios" 
                                  size={24} 
                                  color="#222"
                                  onPress={() => {findRecipe('day7')}}
                              />}
                checked = {props.done4}
                onPress={() => {findRecipe('day7')}}
                
            />

        </Content>
      </View>
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
     box: {
      height: 55, 
      marginBottom: '3%',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
      elevation: 3,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: "black",
      shadowOpacity: 0.1,
      shadowRadius: 3,
      borderColor: 'white',
      borderRadius: 10,
     },
     jour: {
      fontFamily: 'Roboto_700Bold', 
      fontSize: 17, 
      marginLeft: '5%', 
      paddingRight:'70%',
     }
  });


function mapStateToProps(state) {
  return{dayDone1: state.done1, dayDone2: state.done2, dayDone3: state.done3, dayDone4: state.done4, dayAll: state.doneAll }
}

function mapDispatchToProps(dispatch){
  return {

    sendRecipe: function(recipe) {
      console.log(recipe, 'RECIPE ============>>>>');
      dispatch({type: 'sendRecipe', recipe: recipe})

    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DailyProgram)
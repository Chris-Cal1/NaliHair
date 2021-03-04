// X
import React, { Component } from 'react';
import { StyleSheet, Text, Button, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen(props) {
    return (
      
  <ScrollView>
  <View>
        <Text style={{ fontSize: 30, color: 'black', margin: 45 }}>Home Screen</Text>
        <Button
            title="Home"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('StackNav', { screen: 'HomeScreen' })}
            type="solid"
          />
           <Button
            title="Home2"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('Home2', { screen: 'Home2' })}
            type="solid"
          />
          <Button
            title="RecipeDay1_0"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('RecipeDay1_0') }
            type="solid"
          />
          <Button
            title="RecipeDay1_1"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('RecipeDay1_1') }
            type="solid"
          />
           <Button
            title="RecipeDay2_0"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('RecipeDay2_0') }
            type="solid"
          />
           <Button
            title="RecipeDay2_1"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('RecipeDay2_1' ) }
            type="solid"
          />
           <Button
            title="RecipeDay3_0"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('RecipeDay3_0' ) }
            type="solid"
          />
          <Button
            title="RecipeDay4_0"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('RecipeDay4_0' ) }
            type="solid"
          />
           <Button
            title="RecipeDay5_0"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('RecipeDay5_0' ) }
            type="solid"
          />
           <Button
            title="RecipeDay6_0"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate( 'RecipeDay6_0' ) }
            type="solid"
          />
         <Button
            title="RecipeDay7_0"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('RecipeDay7_0' ) }
            type="solid"
          />

           <Button
            title="Routine Choice"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('RoutineChoice' ) }
            type="solid"
          />
          <Button
            title="Daily Program"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate( 'DailyProgram' ) }
            type="solid"
          />
          <Button
            title="Bravo"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('Bravo' ) }
            type="solid"
          />
          <Button
            title="Shopping List"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate('ShoppingList' ) }
            type="solid"
          />
          <Button
            title="Profil"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate( 'Profil' ) }
            type="solid"
          />
          <Button
            title="DailyPics"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate( 'DailyPics' ) }
            type="solid"
          />
         
          <Button
            title="signin"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate( 'Signin' ) }
            type="solid"
          />
           <Button
            title="Signup"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate( 'Signup' ) }
            type="solid"
          />
          <Button
            title="SearchResults"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate( 'SearchResults' ) }
            type="solid"
          />
          <Button
            title="Analyse"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate( 'Analyse' ) }
            type="solid"
          />
          <Button
            title="SnapScreen"
            buttonStyle={{ backgroundColor: "#eb4d4b" }}
            onPress={() => props.navigation.navigate( 'SnapScreen' ) }
            type="solid"
          />
  </View>
  </ScrollView>
     
    );
  }
  
  const styles = StyleSheet.create({
     container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'flex-start',
     },
  });

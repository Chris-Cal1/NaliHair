// Chris

import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';



export default function RecipeDay1() {
    return (
      
  <ImageBackground source={require('../assets/007.png')} style={styles.container}>
   <View>
        <Text style={{ fontSize: 30, color: 'black', margin: 45 }}>Recipe day 1 ok</Text>
             
   </View>
 </ImageBackground>
    
    );
  }
  
  const styles = StyleSheet.create({
     container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'flex-start',
     },
  });
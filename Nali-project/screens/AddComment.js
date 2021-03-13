
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light} from '@expo-google-fonts/roboto';


export default function AddComment() {
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
      
  
  <View>
        <Text style={{ fontSize: 30, color: 'black', margin: 45 }}>AddComment</Text>
        
         
  </View>
  
     
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
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text} from 'react-native';
import { Button} from 'react-native-elements'
import { View} from 'native-base';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';



export default function Home2(props) {

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
      <ImageBackground source={require('../assets/pellicule.jpg')} style={{flex: 1}}>

      

        <View>

        <Text style={{fontSize: 50, fontFamily: 'Handlee_400Regular', color: 'white', marginBottom: '3%', marginLeft: '3%', marginTop: '15%'}}>Mon programme cheveux </Text>
        <Text style={{fontSize: 18, fontFamily: 'Roboto_700Bold', color: 'white', marginBottom: '8%', marginRight: '25%', marginLeft: '3%', marginTop: '5%'}}>
          La routine capillaire est indispensable pour pouvoir prendre soin de ses cheveux crépus, frisés, bouclés, et frisés au quotidien. {"\n"}{"\n"}
          Découvrez votre programme de recettes de soins à base de produits naturels pour embellir vos cheveux.
        </Text>

          <View style={{ justifyContent:'center', alignItems: 'center'}}>
            <Button 
              title="Je découvre ma routine"
              titleStyle={{fontFamily: 'Roboto_700Bold', color: 'white'}}
              buttonStyle={styles.button}
              onPress={() => props.navigation.navigate('Signup', {sreen: 'Signup'})}
              type="solid"
            />
          </View>

        </View>
  

      <StatusBar style="hidden" translucent={false} />
 
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
      backgroundColor: "#222222", 
      borderRadius: 10, 
      width: 250, 
      height: 50, 
      fontFamily: 'Roboto_700Bold', 
      marginTop: Platform.select({
        ios: '120%', 
        android:'70%', 
      }),
     }
  });
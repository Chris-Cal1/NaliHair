import React from 'react';

import HomeScreen from './screens/HomeScreen';
import RoutineChoice from './screens/RoutineChoice';
import DailyProgram from './screens/DailyProgram';

import RecipeDay1 from './screens/RecipeDay1';
import RecipeDay2 from './screens/RecipeDay2';
import RecipeDay3 from './screens/RecipeDay3';
import RecipeDay4 from './screens/RecipeDay4';
import RecipeDay5 from './screens/RecipeDay5';
import RecipeDay6 from './screens/RecipeDay6';
import RecipeDay7 from './screens/RecipeDay7';

import ShoppingList from './screens/ShoppingList';
import Bravo from './screens/Bravo';

import MyDiary from './screens/MyDiary';
import Profil from './screens/Profil';
import DailyPics from './screens/DailyPics';
import Favorites from './screens/Favorites';
import HistoryFavorites from './screens/History&favorites';
import Signin from './screens/Sign-in';
import Signup from './screens/Sign-up';
import SearchResults from './screens/SearchResults';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

  return (
 
   
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
 
          if (route.name == 'RoutineChoice') {
            iconName = 'home';
          } else if (route.name == 'DailyProgram') {
            iconName = 'list';
          } else if (route.name == 'MyDiary') {
            iconName = 'journal';
          } else if (route.name == 'Recherche') {
            iconName = 'search';
          }
  
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        })}
      tabBarOptions={{
        activeTintColor: '#A1DEAB',
        inactiveTintColor: '#FFFFFF',
        style: {
          backgroundColor: '#222222',
        }
      }}
    >
      <Tab.Screen name="RoutineChoice" component={RoutineChoice} />
      <Tab.Screen name="DailyProgram" component={DailyProgram} />
      <Tab.Screen name="MyDiary" component={MyDiary} />
      <Tab.Screen name="Recherche" component={HistoryFavorites} />
    </Tab.Navigator>
    
  );
 }
 
 export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        

        <Stack.Screen name="RoutineChoice" component={RoutineChoice} />
        
        <Stack.Screen name="DailyProgram" component={DailyProgram} />
      
        <Stack.Screen name="RecipeDay1" component={RecipeDay1} />
        <Stack.Screen name="RecipeDay2" component={RecipeDay2} />
        <Stack.Screen name="RecipeDay3" component={RecipeDay3} />
        <Stack.Screen name="RecipeDay4" component={RecipeDay4} />
        <Stack.Screen name="RecipeDay5" component={RecipeDay5} />
        <Stack.Screen name="RecipeDay6" component={RecipeDay6} />
        <Stack.Screen name="RecipeDay7" component={RecipeDay7} />

        <Stack.Screen name="Bravo" component={Bravo} />

        <Stack.Screen name="ShoppingList" component={ShoppingList} />

        <Stack.Screen name="Profil" component={Profil} />

        <Stack.Screen name="DailyPics" component={DailyPics} />

        <Stack.Screen name="Favorites" component={Favorites} />

        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="SearchResults" component={SearchResults} />


        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
 }
/*<View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 55}}>
      <MaterialIcons 
                         name="arrow-back-ios" 
                         size={36} 
                         color="black" 
                         onPress={() => props.navigation.navigate('RecipeDay2')}
                         />
          <Text style={{ fontFamily: 'Handlee_400Regular', fontSize: 30, color: 'black', marginLeft: 100 }}>Retour</Text>
          <FontAwesome5 
                         style={{  marginLeft: 100 }}
                          name="user-alt" 
                          size={36} 
                          color="black" 
                          onPress={() => props.navigation.navigate('Profil')}
                          />
          </View>*/
import React from 'react';
import {Platform} from 'react-native';

import Home2 from './screens/Home2';

import HomeScreen from './screens/HomeScreen';
import RoutineChoice from './screens/RoutineChoice';
import DailyProgram from './screens/DailyProgram';


import RecipeDay1 from './screens/RecipeDay1';
import RecipeDay11 from './screens/RecipeDay1.1';
import RecipeDay2 from './screens/RecipeDay2';
import RecipeDay3 from './screens/RecipeDay3';
import RecipeDay4 from './screens/RecipeDay4';
import RecipeDay5 from './screens/RecipeDay5';
import RecipeDay6 from './screens/RecipeDay6';
import RecipeDay7 from './screens/RecipeDay7';

import ShoppingList from './screens/ShoppingList';
import Bravo from './screens/Bravo';
import SnapScreen from './screens/SnapScreen';

import MyDiary from './screens/MyDiary';
import Profil from './screens/Profil';
import DailyPics from './screens/DailyPics';
import Signin from './screens/Sign-in';
import Signup from './screens/Sign-up';
import Analyse from './screens/Analyse';
import SearchResults from './screens/SearchResults';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import done1 from './reducers/routine';

const store = createStore(combineReducers({done1}))

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {

  return (
 
    <Provider store={store}> 
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        
        <Stack.Screen name="Home2" component={Home2} />

        <Stack.Screen name="RoutineChoice" component={RoutineChoice} />
        
        <Stack.Screen name="DailyProgram" component={DailyProgram} />
      
        <Stack.Screen name="RecipeDay1" component={RecipeDay1} />
        <Stack.Screen name="RecipeDay11" component={RecipeDay11} />
        <Stack.Screen name="RecipeDay2" component={RecipeDay2} />
        <Stack.Screen name="RecipeDay3" component={RecipeDay3} />
        <Stack.Screen name="RecipeDay4" component={RecipeDay4} />
        <Stack.Screen name="RecipeDay5" component={RecipeDay5} />
        <Stack.Screen name="RecipeDay6" component={RecipeDay6} />
        <Stack.Screen name="RecipeDay7" component={RecipeDay7} />

        <Stack.Screen name="Bravo" component={Bravo} />
        <Stack.Screen name="SnapScreen" component={SnapScreen} />

        <Stack.Screen name="ShoppingList" component={ShoppingList} />

        <Stack.Screen name="Profil" component={Profil} />

        <Stack.Screen name="DailyPics" component={DailyPics} />

        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="Analyse" component={Analyse} />

        
      </Stack.Navigator>
    
      </Provider>
    
  );
 }
 
 export default function App() {
  return (
    
    <NavigationContainer>
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
          } else if (route.name == 'Analyse') {
            iconName = 'search';
          } 
  
          return <Ionicons name={iconName} size={28} color={color} />;
        },
        })}
        
      tabBarOptions={{
        //showLabel: false,
        activeTintColor: '#A1DEAB',
        inactiveTintColor: '#FFFFFF',
        style: { 
          backgroundColor: '#222222',
          alignContent: 'center', 
          justifyContent: 'center',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: "black",
          shadowOpacity: 0.39,
          shadowRadius: 8, 
          height: Platform.select({
            ios: '10%', 
            android:'8%', 
          }),
        },
      }}
    >
     
      <Stack.Screen name='StackNav' options={{}} component={StackNavigator} />
      <Tab.Screen name="RoutineChoice" component={RoutineChoice} />
      <Tab.Screen name="DailyProgram" component={DailyProgram} />
      <Tab.Screen name="MyDiary" component={MyDiary} />
      <Tab.Screen name="Analyse" component={Analyse} />
      
      
    </Tab.Navigator>
     
        
        

    </NavigationContainer>
    
  );
 }

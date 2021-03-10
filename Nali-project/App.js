import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import React from 'react';

import {Platform} from 'react-native';

import Home2 from './screens/Home2';

import HomeScreen from './screens/HomeScreen';
import RoutineChoice from './screens/RoutineChoice';
import DailyProgram from './screens/DailyProgram';


import RecipeDay1_0 from './screens/RecipeDay1_0';
import RecipeDay1_1 from './screens/RecipeDay1_1';
import RecipeDay2_0 from './screens/RecipeDay2_0';
import RecipeDay2_1 from './screens/RecipeDay2_1';
import RecipeDay3_0 from './screens/RecipeDay3_0';
import RecipeDay4_0 from './screens/RecipeDay4_0';
import RecipeDay5_0 from './screens/RecipeDay5_0';
import RecipeDay6_0 from './screens/RecipeDay6_0';
import RecipeDay7_0 from './screens/RecipeDay7_0';

import ShoppingList from './screens/ShoppingList';
import Bravo from './screens/Bravo';
import SnapScreen from './screens/SnapScreen';
import ReturnPics from './screens/ReturnPics';

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
import done2 from './reducers/routine2';
import done3 from './reducers/routine3';
import done4 from './reducers/routine4';
import doneAll from './reducers/routineAll';
import article from './reducers/article';
import articlesLiked from './reducers/articleLiked';
import token from './reducers/token';
import recipe from './reducers/recipe';
import picture from './reducers/picture';
import photo from './reducers/photo';

const store = createStore(combineReducers({done1, done2, done3, done4, article, articlesLiked, token, recipe, doneAll, picture, photo}))

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RoutineChoiceStack = createStackNavigator();
const DailyProgramStack = createStackNavigator();
const MyDiaryStack = createStackNavigator();
const RechercheStack = createStackNavigator();



function RoutineChoiceStackScreen() {
  return (
    <RoutineChoiceStack.Navigator screenOptions={{headerShown: false}}>
     <RoutineChoiceStack.Screen name="RoutineChoice" component={RoutineChoice} />
   
    
    </RoutineChoiceStack.Navigator>
  );
}


function DailyProgramStackScreen() {
  return (
    <DailyProgramStack.Navigator screenOptions={{headerShown: false}}>

        <DailyProgramStack.Screen name="DailyProgram" component={DailyProgram} />
        <DailyProgramStack.Screen name="RecipeDay1_0" component={RecipeDay1_0} />
        <DailyProgramStack.Screen name="RecipeDay1_1" component={RecipeDay1_1} />
        <DailyProgramStack.Screen name="RecipeDay2_0" component={RecipeDay2_0} />
        <DailyProgramStack.Screen name="RecipeDay2_1" component={RecipeDay2_1} />
        <DailyProgramStack.Screen name="RecipeDay3_0" component={RecipeDay3_0} />
        <DailyProgramStack.Screen name="RecipeDay4_0" component={RecipeDay4_0} />
        <DailyProgramStack.Screen name="RecipeDay5_0" component={RecipeDay5_0} />
        <DailyProgramStack.Screen name="RecipeDay6_0" component={RecipeDay6_0} />
        <DailyProgramStack.Screen name="RecipeDay7_0" component={RecipeDay7_0} />
        <DailyProgramStack.Screen name="ShoppingList" component={ShoppingList} />
        <DailyProgramStack.Screen name="Bravo" component={Bravo} />
    </DailyProgramStack.Navigator>
  );
}

function MyDiaryStackScreen() {
  return (
    <MyDiaryStack.Navigator screenOptions={{headerShown: false}}>
        <MyDiaryStack.Screen name="MyDiary" component={MyDiary} />
        <MyDiaryStack.Screen name="DailyPics" component={DailyPics} />
        <MyDiaryStack.Screen name="ReturnPics" component={ReturnPics} />
    </MyDiaryStack.Navigator>
  );
}

function RechercheStackScreen() {
  return (
    <RechercheStack.Navigator screenOptions={{headerShown: false}}>
         <RechercheStack.Screen name="Analyse" component={Analyse} />
         <RechercheStack.Screen name="SearchResults" component={SearchResults} />
    </RechercheStack.Navigator>
  );
}



 
 function NewTab() {
    
   
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
     

     
     <Tab.Screen name="RoutineChoice" component={RoutineChoiceStackScreen} />
      <Tab.Screen name="DailyProgram" component={DailyProgramStackScreen} />
      <Tab.Screen name="MyDiary" component={MyDiaryStackScreen} />
      <Tab.Screen name="Analyse" component={RechercheStackScreen} />

     
      
    </Tab.Navigator>
     
        
   ) }   

   

  

  export default function App() {
    return (
      <Provider store={store}>
      <NavigationContainer >
   
        <Stack.Navigator screenOptions={{headerShown: false}}> 
          <Stack.Screen name="Home" component={Home2} />
          <Stack.Screen name="Home1" component={NewTab} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="SnapScreen" component={SnapScreen} />
          <Stack.Screen name="Profil" component={Profil} />
  
         </Stack.Navigator>
   
  
  
  
  
      </NavigationContainer>
      </Provider>
  
      );

 }

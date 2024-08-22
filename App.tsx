import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';


import HomeScreen from './src/screens/HomeScreen';
import ExerciseListScreen from './src/screens/ExerciseListScreen';
import StartWorkoutScreen from './src/screens/StartWorkoutScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Start Workout" component={StartWorkoutScreen} />
      <Tab.Screen name="Exercises" component={ExerciseListScreen} />
    </Tab.Navigator>
  );
}

const App = () => {

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}


export default App;

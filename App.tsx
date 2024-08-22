import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import ExerciseListScreen from './src/screens/ExerciseListScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
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

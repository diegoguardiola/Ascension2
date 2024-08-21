import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from './src/theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'


const App = () => {

  return (
    <View>
        <Text>Hello</Text>
        <AntDesign name='stepforward' size={25}/>
    </View>
  )
}


export default App;

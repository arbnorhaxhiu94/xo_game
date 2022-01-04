// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import MultiPlayerScreen from '../screens/MultiPlayerScreen';
import SinglePlayerScreen from '../screens/SinglePlayerScreen';

import MyHeader from '../components/Header';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{header: () => <MyHeader title={'X vs O'} />}} >
            {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen 
          name="SinglePlayer" 
          options={{header: ({navigation}) => <MyHeader title={'Single Player'} backButton={true} navigation={navigation} />}}>
            {props => <SinglePlayerScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen 
          name="MultiPlayer" 
          options={{header: ({navigation}) => <MyHeader title={'Multi Player'} backButton={true} navigation={navigation}/>}}>
            {props => <MultiPlayerScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
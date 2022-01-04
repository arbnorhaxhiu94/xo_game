/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Colors from './src/assets/colors';
import MainStack from './src/navigation/MainStack';

import SplashScreen from 'react-native-splash-screen'
import { MySplashScreen } from './src/screens/MySplashScreen';

const App = () => {

  const [splashScreen, setSplashScreen] = useState<boolean>(true)

  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      setSplashScreen(false)
    }, 1500);
  }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={Colors.BLACK_3} barStyle={'light-content'} />
      {splashScreen ? 
      <MySplashScreen /> 
      :
      <MainStack />}
    </SafeAreaView>
  );
};

export default App;

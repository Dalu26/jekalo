import React from 'react';
import { LogBox } from 'react-native';
import { SwitchStack } from './src/navigation/SwitchNavigator';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return  <SwitchStack />
};

export default App;

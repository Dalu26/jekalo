import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import SplashScreen from '../screens/splashscreen'
import Drawer from './DrawerNavigation'
enableScreens()
const RootStack = createStackNavigator()

function AppNavigator() {
    return(
    <RootStack.Navigator intialRouteName="Drawer" options={{gestureEnabled: true}}>
        {/* <RootStack.Screen 
            name="Splash" 
            component={SplashScreen} 
            options={{headerShown: false, 
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} 
        /> */}
        <RootStack.Screen 
            name="Drawer" 
            component={Drawer} 
            options={{headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} 
        />
    </RootStack.Navigator>
    );
}

export default function App() {
    return (
        <AppNavigator />
    );
}
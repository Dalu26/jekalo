import React from 'react';
import { Easing } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Character from '../screens/character/index';

import Episode from '../screens/episode/index';


const Stack = createStackNavigator();
const transitionSpec = { 
        open: {animation: 'timing', config: {
            duration: 500, easing: Easing.inOut(Easing.ease)
        }}, 
        close: {animation: 'timing', config: {
            duration: 400, easing: Easing.inOut(Easing.ease)
        }}
}

export function CharacterStack(){
    return(
        <Stack.Navigator 
            initialRouteName="Character" 
            options={{ gestureEnabled: true }}>
            <Stack.Screen 
                name="Character" 
                component={Character} 
                options={{ headerShown: false, 
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} 
            />
        </Stack.Navigator>
    );
}


export function EpisodeStack(){
    return(
        <Stack.Navigator 
            initialRouteName="Episode" 
            options={{gestureEnabled: true}}>
            <Stack.Screen 
                name="Episode" 
                component={Episode} 
                options={{headerShown: false}} 
            />
        </Stack.Navigator>
    );
}
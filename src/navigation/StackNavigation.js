import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Character from '../screens/character/index';

import Episode from '../screens/episode/index';


const Stack = createStackNavigator();

export function CharacterStack(){
    return(
        <Stack.Navigator 
            initialRouteName="index" 
            options={{ gestureEnabled: true }}>
            <Stack.Screen 
                name="index" 
                component={Character} 
                options={{ headerShown: false, 
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS 
                }} 
            />
        </Stack.Navigator>
    );
}


export function EpisodeStack(){
    return(
        <Stack.Navigator 
            initialRouteName="index" 
            options={{gestureEnabled: true}}>
            <Stack.Screen 
                name="index" 
                component={Episode} 
                options={{headerShown: false}} 
            />
        </Stack.Navigator>
    );
}
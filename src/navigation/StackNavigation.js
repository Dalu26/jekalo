import React from 'react';
import { Easing } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/index';
import Details from '../screens/home/details';

import More from '../screens/more';
import CreateProduct from '../screens/more/createProduct';
import Inventory from '../screens/more/inventory';
import Edit from '../screens/more/edit';
import Trash from '../screens/more/trash';


const Stack = createStackNavigator();
const transitionSpec = { 
        open: {animation: 'timing', config: {
            duration: 500, easing: Easing.inOut(Easing.ease)
        }}, 
        close: {animation: 'timing', config: {
            duration: 400, easing: Easing.inOut(Easing.ease)
        }}
}

export function HomeStack(){
    return(
        <Stack.Navigator 
            initialRouteName="Home" 
            options={{ gestureEnabled: true }}>
            <Stack.Screen 
                name="Homescreen" 
                component={Home} 
                options={{ headerShown: false, 
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} 
            />
            <Stack.Screen 
                name="details" 
                component={Details} 
                options={() => ({ headerShown: false,
                    gestureEnabled: false, 
                    transitionSpec: transitionSpec, 
                    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                })}
            />
        </Stack.Navigator>
    );
}


export function MoreStack(){
    return(
        <Stack.Navigator 
            initialRouteName="More" 
            options={{gestureEnabled: true}}>
            <Stack.Screen 
                name="Morescreen" 
                component={More} 
                options={{headerShown: false}} 
            />
            <Stack.Screen 
                name="Inventory" 
                component={Inventory} 
                options={{ headerShown: false, 
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} 
            />
            <Stack.Screen 
                name="CreateProduct" 
                component={CreateProduct} 
                options={{ headerShown: false, 
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} 
            />
            <Stack.Screen 
                name="Edit" 
                component={Edit} 
                options={{ headerShown: false, 
                    transitionSpec: transitionSpec, 
                    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS }} 
            />
            <Stack.Screen 
                name="Trash" 
                component={Trash} 
                options={{ headerShown: false, 
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} 
            />
        </Stack.Navigator>
    );
}
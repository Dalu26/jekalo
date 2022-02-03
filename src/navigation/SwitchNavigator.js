import React from 'react';
import AppNavigator from "./AppNavigation";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export function SwitchStack() {
    return (
      <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="AppNavigator" 
            options={{ gestureEnabled: true }}>
                <Stack.Screen 
                    name="AppNavigator" 
                    component={AppNavigator} 
                    options={{ headerShown: false }} 
                />
          </Stack.Navigator>
      </NavigationContainer>
    );
}
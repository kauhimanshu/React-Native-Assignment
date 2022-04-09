import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from "./BottomNavigation";



const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
           
            
            

        </Stack.Navigator>
    );
}
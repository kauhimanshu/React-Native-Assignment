import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from "./BottomNavigation";
import DetailScreen from "../screen/DetailScreen";
import Setting from "../screen/Setting";



const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
            <Stack.Screen name="Setting" component={Setting} />
           
            
            

        </Stack.Navigator>
    );
}
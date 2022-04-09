import React from "react";
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashBoardScreen from "../screen/DashBoard";
import Profile from "../screen/Profile";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'



const Tab = createBottomTabNavigator();

export default BottomNavigation = () => {
    return (

        <Tab.Navigator
            tabBarOptions={{
                inactiveTintColor: 'darkgray',
                activeTintColor: 'black'

            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, focused }) => {
                    let activeIcon, InactiveIcone;

                    if (route.name == 'Home') {
                        activeIcon = 'home'
                        InactiveIcone = 'home-outline'
                    }
                    else if (route.name == 'Profile') {
                        activeIcon = 'man'
                        InactiveIcone = 'man-outline'
                    }
                    return (
                        <>
                            {
                                focused &&
                                <View style={{ position: 'absolute', top: 0, borderTopColor: 'red', borderTopWidth: 3, width: '100%' }} />
                            }
                            <Ionicons
                                name={color == 'darkgray' ? activeIcon : InactiveIcone}
                                color={color == 'darkgray' ? 'gray' : 'black'}
                                size={24}

                            />
                        </>
                    )
                }

            })}

        >
            <Tab.Screen name="Home" component={DashBoardScreen} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>



    )
}
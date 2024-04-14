import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';

//screens
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarColor: '#009387',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ size, color }) => (<Feather name="home" size={24} color="black" />),
                    tabBarBadge: 3
                }} />
            <Tab.Screen
                name="Setting"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ size, color }) => (<Feather name="settings" size={24} color="black" />),
                    tabBarBadge: 20
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ size, color }) => (<Feather name="user" size={24} color="black" />),
                    tabBarBadge: 1
                }} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';

//screens
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";

const Tab = createMaterialBottomTabNavigator();

const LoginStackNavigator = createStackNavigator();

function MyStack() {
    return (
        <LoginStackNavigator.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerShown: false }}>
            <LoginStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerTitle: false }} />

            <LoginStackNavigator.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerTitle: false }} />
            <LoginStackNavigator.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerBackTitleVisible: false }} />
            <LoginStackNavigator.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{ headerBackTitleVisible: false }} />
        </LoginStackNavigator.Navigator>
    );
}

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
                }} />
            <Tab.Screen
                name="Setting"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ size, color }) => (<Feather name="search" size={24} color="black" />),
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ size, color }) => (<Feather name="user" size={24} color="black" />),
                }} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
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
import CameraScreen from "./screens/CameraScreen";

const Tab = createMaterialBottomTabNavigator();

const LoginStackNavigator = createStackNavigator();
const HomeStackNavigator = createStackNavigator();

function LoginStack() {
    return (
        <LoginStackNavigator.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerShown: false }}
        >
            <LoginStackNavigator.Screen
                name="HomeScreen"
                component={MyTabs}
                screenOptions={{ headerShown: false }}
            />

            <LoginStackNavigator.Screen
                name="LoginScreen"
                component={LoginScreen}
                screenOptions={{ headerShown: false }}
            />
            <LoginStackNavigator.Screen
                name="SignUp"
                component={SignUpScreen}
                screenOptions={{ headerShown: true }}
                options={{ headerBackTitleVisible: false }}
            />
            <LoginStackNavigator.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{ headerBackTitleVisible: false }} />
        </LoginStackNavigator.Navigator>
    );
}

function HomeStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{ headerShown: false }}>
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="ProfileScreen"
                component={ProfileScreen}
            />
            <HomeStackNavigator.Screen
                name="CameraScreen"
                component={CameraScreen}
            />
        </HomeStackNavigator.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}

        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
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
            <LoginStack />
        </NavigationContainer>
    );
}
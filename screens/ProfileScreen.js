import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExperienceComponent from './components/ExperienceComponent';

import { Feather } from '@expo/vector-icons';
const ProfileScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text style={{
                fontSize: 30,
                textAlign: 'center',
                marginTop: "20%"

            }}>Profile</Text>
            <View>
                <Feather name="user" size={52} color="#141E46" style={{ alignSelf: 'center', marginTop: 20 }} />
            </View>


        </View >
    );
}

export default ProfileScreen;
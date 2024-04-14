import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text style={{
                fontSize: 30,
                textAlign: 'center',
                marginTop: "20%"

            }}>Profile Screen</Text>

        </View>
    );
}

export default ProfileScreen;
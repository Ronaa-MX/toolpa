import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import ExperienceComponent from './components/ExperienceComponent';




const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View >
            <View style={{ margin: 10, justifyContent: "left", alignContent: "center", alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity
                    style={{
                        position: "relative",
                        marginTop: "10%",
                        backgroundColor: "white",
                        padding: 10,
                        borderRadius: 50,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                    }}
                    onPress={() => navigation.navigate('ProfileScreen')}
                >
                    <Feather name="user" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{
                    position: "relative",
                    fontSize: 16,
                    textAlign: 'center',
                    alignContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    marginTop: "10%",
                    marginLeft: "5%"

                }}>userName</Text>
            </View>
            <Text style={{
                fontSize: 30,
                textAlign: 'center',
                marginTop: "10%",
                marginBottom: "15%",
                margin: "5%"


            }}>Where do you want to travel today?</Text>

            <View style={{ padding: 10, justifyContent: "center", alignContent: "center", alignItems: "flex-start" }}>
                <Text style={{ marginStart: 15, fontSize: 20 }}>Suggestions</Text>
                <View style={{ margin: 20, flexDirection: "row", alignItems: "center", marginBottom: 40, flexWrap: "wrap" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/previewTest.png")}
                            title="Monas chinas"
                            description="anime catgirls" />
                    </TouchableOpacity>
                </View>
            </View>


        </View >
    );
}


export default HomeScreen;
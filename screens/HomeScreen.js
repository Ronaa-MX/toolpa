import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import ExperienceComponent from './components/ExperienceComponent';




const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <ScrollView style={{ backgroundColor: 'FFF5E0' }}>
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
                    <Feather name="user" size={24} color="#141E46" />
                </TouchableOpacity>
                <Text style={{
                    position: "relative",
                    fontSize: 16,
                    textAlign: 'center',
                    alignContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    marginTop: "10%",
                    marginLeft: "5%",
                    color: "#141E46"

                }}>userName</Text>
            </View>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: "10%",
                marginBottom: "15%",
                margin: "5%",
                color: "#41B06E"
            }}>Where do you want to travel today?</Text>

            <View style={{ padding: 10, justifyContent: "center", alignContent: "center", alignItems: "flex-start" }}>
                <Text style={{ marginStart: 15, fontSize: 20, color: "#141E46" }}>Suggestions</Text>
                <View style={{ margin: 5, flexDirection: "row", alignItems: "center", marginBottom: 40, flexWrap: "wrap" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/previewTest.png")}
                            title="Monas chinas"
                            description="anime catgirls" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/image-icon.png")}
                            title="Title"
                            description="Description" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/image-icon.png")}
                            title="Title"
                            description="Description" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/image-icon.png")}
                            title="Title"
                            description="Description" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/image-icon.png")}
                            title="Title"
                            description="Description" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/image-icon.png")}
                            title="Title"
                            description="Description" />
                    </TouchableOpacity>
                </View>
            </View>


        </ScrollView >
    );
}


export default HomeScreen;
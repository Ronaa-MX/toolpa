import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExperienceComponent from './components/ExperienceComponent';
import { FontAwesome } from '@expo/vector-icons';


const SearchScreen = () => {

    const navigation = useNavigation();

    return (
        <ScrollView style={{ backgroundColor: 'FFF5E0' }}>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'left',
                marginTop: "20%",
                marginLeft: "5%",
                color: "#41B06E"

            }}>Search </Text>
            <TextInput style={{ fontSize: 24, margin: 20, borderColor: '#141E46', borderWidth: 1, borderRadius: 6, textAlign: 'center' }}
                placeholder=""
                autoCapitalize="none"

            />
            <View style={{ padding: 10, justifyContent: "center", alignContent: "center", alignItems: "flex-start" }}>
                <Text style={{ marginStart: 15, fontSize: 20, color: "#141E46" }}>Suggestions</Text>
                <View style={{ margin: 5, flexDirection: "row", alignItems: "center", alignContent: "center", alignSelf: "center", marginBottom: 40, flexWrap: "wrap", gap: 0 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/previewtest.jpg")}
                            title="Templo Mayor"
                            description="El Templo Mayor o Gran Templo de México es un recinto que comprende una serie de construcciones, edificios, torres y un patio, el espacio físico donde se ubicaban las mismas, cercado por una pared que contaba con unas puertas que daban acceso a las calzadas principales de la ciudad.​" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/bocana.jpg")}
                            title="Bocana del rio"
                            description="Bocana del rio" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/huijazoo.jpg")}
                            title="Huijazoo"
                            description="Huijazoo" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/itza.jpg")}
                            title="Chichen Itza"
                            description="Chichen Itza" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/tulum.jpg")}
                            title="Tulum"
                            description="Tulum" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                        <ExperienceComponent
                            preview={require("../assets/tulum.jpg")}
                            title="Tulum"
                            description="Tulum" />
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}

export default SearchScreen;
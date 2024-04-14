import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    Image,
    Linking,
    View,
    Text,
    TextInput,
    StyleSheet,
    ActivityIndicator,
    Button,
    KeyboardAvoidingView,
} from "react-native";



const LoginScreen = () => {

    const navigation = useNavigation();

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Image
                    style={{ width: 250, height: 250 }}
                    resizeMode="contain"
                    source={require("../assets/icon.png")} />

            </View>

            <View style={{ padding: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: 24 }}> Log in </Text>
            </View>

            <View style={{ margin: 20, padding: 20, width: 300, justifyContent: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 10 }}>

                <Text style={{ fontSize: 16 }}> Email </Text>
                <TextInput style={{ fontSize: 20, margin: 10, borderColor: 'black', borderWidth: 1, borderRadius: 5, textAlign: 'center' }}
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={{ fontSize: 16 }}> Password </Text>
                <TextInput style={{ fontSize: 20, margin: 10, borderColor: 'black', borderWidth: 1, borderRadius: 5, textAlign: 'center' }}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <View>
                    <Text onPress={() => Linking.openURL('http://google.com')} style={{ fontSize: 12, marginTop: 1, margin: 10, textAlign: 'center', color: "blue", }}>Forgot password? </Text>
                </View>

            </View>
        </View >
    );

}

export default LoginScreen;
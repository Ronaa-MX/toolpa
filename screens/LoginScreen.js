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
    TouchableOpacity
} from "react-native";

const LoginScreen = () => {

    const navigation = useNavigation();

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'FFF5E0' }}>
            <View>
                <Image
                    style={{ width: 250, height: 250 }}
                    resizeMode="contain"
                    source={require("../assets/icon.png")} />

            </View>

            <View style={{ padding: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: 24, color: '#41B06E', fontWeight: 800 }}> Log in </Text>
            </View>

            <View style={{ margin: 20, padding: 20, width: 300, justifyContent: 'center', borderColor: '#141E46', borderWidth: 1, borderRadius: 10 }}>

                <Text style={{ fontSize: 16, color: '#141E46' }}> Email </Text>
                <TextInput style={{ fontSize: 20, margin: 10, borderColor: '#141E46', borderWidth: 1, borderRadius: 5, textAlign: 'center' }}
                    placeholder="Email"
                    autoCapitalize="none"
                />
                <Text style={{ fontSize: 16, color: '#141E46' }}> Password </Text>
                <TextInput style={{ fontSize: 20, margin: 10, borderColor: '#141E46', borderWidth: 1, borderRadius: 5, textAlign: 'center' }}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <View>
                    <Text onPress={() => navigation.navigate('ForgotPassword')} style={{ fontSize: 12, marginTop: 1, margin: 10, textAlign: 'right', color: "#73C2FB", fontWeight: 400 }}>Forgot password? </Text>
                </View>
                <TouchableOpacity style={
                    {
                        backgroundColor: '#8DECB4',
                        padding: 10,
                        borderRadius: 6,
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                        margin: 10,
                        width: 100
                    }
                } onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={{ fontSize: 16, marginTop: 1, textAlign: 'center', color: "#141E46", }} >Log in</Text>
                </TouchableOpacity>

            </View>
            <View>
                <Text onPress={() => navigation.navigate('SignUp')} style={{ fontSize: 16, marginTop: 1, margin: 10, textAlign: 'center', color: "#73C2FB", fontWeight: 600 }}>Sign Up </Text>
            </View>
        </View >
    );

}

export default LoginScreen;
import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function CameraScreen() {
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            <Video
                style={styles.video}
                source={
                    require('../assets/teoti2.mp4')
                }
                shouldPlay
                isLooping={true}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        width: 620,
        height: 750,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

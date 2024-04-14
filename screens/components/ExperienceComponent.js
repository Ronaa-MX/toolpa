import React from 'react';
import { View, Image, Text } from 'react-native';

const ExperienceComponent = ({ preview, title, description }) => {
    return (
        <View style={styles.container}>
            <Image source={preview} style={styles.preview} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = {
    container: {
        justifyContent: "flex .space-around",
        alignItems: "center",
        padding: 2,
        marginBottom: 20,
        marginEnd: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        marginTop: 5,
    },
    preview: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
};


export default ExperienceComponent;
import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const ExperienceComponent = ({ preview, title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <View style={styles.container}>
            <Image source={preview} style={styles.preview} />
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                <Text style={styles.description}>
                    {isExpanded ? description : `${description.substring(0, 50)}...`}
                </Text>
            </TouchableOpacity>
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
        color: "#73C2FB"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        color: "#41B06E"
    },
    description: {
        fontSize: 16,
        marginTop: 2,
        color: "#141E46"
    },
    preview: {
        width: 150,
        height: 100,
        borderRadius: 10,
    },
};


export default ExperienceComponent;
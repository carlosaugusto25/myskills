import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export function Button({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text style={styles.textButton} >ADD</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    }
})
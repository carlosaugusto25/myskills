import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Welcome, Carlos</Text>
            <TextInput
                style={styles.input}
                placeholder="digite aqui"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.textButton} >ADD</Text>
            </TouchableOpacity>
            <Text style={[styles.title, { marginTop: 50 }]} >
                My Skill
            </Text>
            {
                mySkills.map(skill => (
                    <TouchableOpacity key={skill} style={styles.buttonSkill} >
                        <Text style={styles.textSkill} >
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: "#1f1e25",
        borderRadius: 7,
        marginTop: 30,
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
    },
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
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    }
})
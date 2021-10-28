import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Platform,
    FlatList,
    StatusBar
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [cumprimento, setCumprimento] = useState('');

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if(currentHour < 12) {
            setCumprimento('Bom dia');
        } else if (currentHour > 12 && currentHour < 18) {
            setCumprimento('Boa tarde')
        } else {
            setCumprimento('Boa noite')
        }
    },[])

    return (
        <View style={styles.container} >
            <StatusBar barStyle="light-content" />
            <Text style={styles.title} >Bem-vindo, Carlos</Text>
            <Text style={styles.cumprimentos} >{ cumprimento }</Text>
            <TextInput
                style={styles.input}
                placeholder="digite aqui"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />
            <Button onPress={handleAddNewSkill} />
            <Text style={[styles.title, { marginVertical: 50 }]} >
                My Skill
            </Text>
            <FlatList 
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item} />
                )}
            />
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
    cumprimentos: {
        color: '#fff',
    }
})
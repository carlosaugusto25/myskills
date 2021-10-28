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

interface SkillData {
    id: string;
    name: string;
}

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [cumprimento, setCumprimento] = useState('');

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id != id
        ));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if(currentHour < 12) {
            setCumprimento('Bom dia');
        } else if (currentHour >= 12 && currentHour < 18) {
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
            <Button title="ADD" onPress={handleAddNewSkill} />
            <Text style={[styles.title, { marginVertical: 50 }]} >
                My Skill
            </Text>
            <FlatList 
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard 
                    skill={item.name} 
                    onPress={() => handleRemoveSkill(item.id)} //usar essa notação porque precisa de parametro
                    />
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
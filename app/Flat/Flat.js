import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
    {
        id: 1,
        name: "Zeeshan Ansari",
        age: 24
    },
    {
        id: 2,
        name: "Rizwan Ansari",
        age: 23
    },
    {
        id: 3,
        name: "Sarfaraj Ansari",
        age: 48
    },
    {
        id: 4,
        name: "Zareena Bano",
        age: 42
    }
]
const Flat = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: 'crimson', marginVertical: 5, paddingHorizontal: 8, paddingVertical: 8, borderRadius: 5 }}>
                <Text style={styles.title}>{item.id}</Text>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.title}>{item.age}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text>Flat In React Native</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Flat;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})
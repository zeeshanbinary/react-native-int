import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
const List = () => {
    return (
        <View style={styles.container}>
            <Text>List In React Native</Text>
            {
                data.map((item) => {
                    return (
                        <View key={item.id} style={{ backgroundColor: 'crimson', marginVertical: 5, paddingHorizontal: 8, paddingVertical: 8, borderRadius: 5 }}>
                            <Text style={styles.title}>{item.id}</Text>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.title}>{item.age}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default List;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    }
})
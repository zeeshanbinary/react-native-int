import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Views = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello Zeeshan Ansari</Text>
        </View>
    )
}

export default Views;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        marginVertical: 8
    },
    title: {
        fontSize: 16,
        color: 'crimson',
        fontWeight: '800',
        textAlign: 'center'
    }
})
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Prop = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello React native Props</Text>
            <Text>Your Name {props.name}</Text>
            <Text>Your age is {props.age}</Text>
            <Text>Your address {props.address}</Text>
        </View>
    )
}

export default Prop;
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
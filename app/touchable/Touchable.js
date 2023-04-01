import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const Touchable = () => {
    return (
        <View style={styles.container}>
            <TouchableHighlight>
                <Text style={[styles.button, styles.btn]}>Button 1</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[styles.button, styles.btn1]}>Button 1</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[styles.button, styles.btn2]}>Button 1</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Touchable;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginVertical: 10
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 10
    },
    btn: {
        backgroundColor: 'crimson',
        color: '#fff'
    },
    btn1: {
        backgroundColor: 'pink',
        color: '#fff'
    },
    btn2: {
        backgroundColor: 'green',
        color: '#fff'
    }
})
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View, TouchableHighlight } from "react-native";

const Loader = () => {
    const [show, setShow] = useState(false);

    const handlePress = () => {
        setShow(true)
    }

    setTimeout(() => {
        setShow(false)
    }, 3000);
    return (
        <View style={styles.container}>
            <ActivityIndicator size={30} color="red" animating={show} />
            <TouchableHighlight onPress={handlePress}>
                <Text style={[styles.button, styles.btn]}>Button 1</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Loader;

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
})
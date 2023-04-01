import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View, Pressable } from "react-native";

const Press = () => {
    const [show, setShow] = useState(false);

    const handlePress = () => {
        alert("Hello Zeeshan Ansari")
    }

    setTimeout(() => {
        setShow(false)
    }, 3000);
    return (
        <View style={styles.container}>
            <Pressable onPress={handlePress}>
                <Text style={[styles.button, styles.btn]}>Button 1</Text>
            </Pressable>
        </View>
    )
}

export default Press;

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
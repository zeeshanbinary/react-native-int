import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const State = () => {
    const [item, setItem] = useState(0);

    useEffect(() => {
        console.warn("Hello World")
    }, [])
    const handlePress = () => {
        setItem(item + 1)
    }
    return (
        <View style={styles.container}>
            <Text>Use Effect In React Js</Text>
            <Text>Your Item {item}</Text>
            <Button title="Click Here" onPress={handlePress} />
        </View>
    )
}

export default State;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})
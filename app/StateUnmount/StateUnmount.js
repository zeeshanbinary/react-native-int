import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const StateUnMount = () => {
    const [show, setShow] = useState(false);


    const handlePress = () => {
        setShow(!show)
    }


    return (
        <View style={styles.container}>
            <Text>React Native State UnMount </Text>
            <Button title="Click Here" onPress={handlePress} />
            {
                show ? <User /> : null
            }
        </View>
    )
}

export default StateUnMount;

const User = () => {
    let timer = setInterval(() => {
        console.warn("Your Time Is Start")
    }, 2000);
    useEffect(() => {
        return () => clearInterval(timer)
    })
    return (
        <View>
            <Text>Hello Use Component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})
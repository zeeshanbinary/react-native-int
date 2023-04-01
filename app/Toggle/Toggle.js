import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Toggle = () => {
    const [show, setShow] = useState(false);

    const handlePress = () => {
        setShow(!show)
    }


    return (
        <View style={styles.container}>
            <Text>React Native Toggle </Text>
            <Button title="Click Here" onPress={handlePress} />
            {
                show ? <User /> : null
            }
        </View>
    )
}

export default Toggle;

const User = () => {
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
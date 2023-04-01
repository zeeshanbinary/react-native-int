import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const StateUpdate = () => {
    const [item, setItem] = useState(0);
    const [data, setData] = useState(100)

    useEffect(() => {
        console.warn(item, "Item")
    }, [item])

    useEffect(() => {
        console.warn("Call some Api")
    },[data])

    const handlePress = () => {
        setItem(item + 1)
    }

    const handleData = () => {
        setData(data + 1)
    }
    return (
        <View style={styles.container}>
            <Text>Use Effect In React Js</Text>
            <Text>Your Item {item}</Text>
            <Button title="Click Here" onPress={handlePress} />

            <View>
                <Text>Your Data {data}</Text>
                <Button title="Click Here" onPress={handleData} />
            </View>
        </View>
    )
}

export default StateUpdate;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})
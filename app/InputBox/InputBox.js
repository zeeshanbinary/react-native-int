import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const InputBox = () => {
    const [name, setName] = useState("");
    const handlePress = () => {
        setName("")
    }
    return (
        <View style={styles.container}>
            <Text>Input In React Native</Text>
            <Text>Your Name Is {name}</Text>
            <TextInput
                placeholder='Enter Name'
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button title='Click Here' onPress={handlePress} />
        </View>
    )
}

export default InputBox;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 4,
        maxHeight: 42,
        padding: 5,
        marginVertical: 7
    }
})
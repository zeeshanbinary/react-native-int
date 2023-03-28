import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState(false)
    const handlePress = () => {
        setData(true)
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setPassword("")
    }
    return (
        <View style={styles.container}>
            <Text>Form In React Native</Text>
            {
                data ?
                    <>

                        <Text>Your Name Is {name}</Text>
                        <Text>Your Email is {email}</Text>
                        <Text>Your Password is {password}</Text>
                    </> : null
            }
            <TextInput
                placeholder='Enter Username'
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                placeholder='Enter Email'
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                placeholder='Enter Password'
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />
            <View style={styles.btn}>
                <Button title='Submit' onPress={handlePress} />
                <Button title='Reset' color={'crimson'} onPress={handleReset} />
            </View>
        </View>
    )
}

export default Form;

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
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const GetAPi = () => {
    const [data, setData] = useState("")

    async function UserData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData)
    }

    useEffect(() => {
        UserData()
    }, [])
    return (
        <View style={styles.container}>
            {
                data ?
                    <View style={styles.subContainer}>
                        <Text>{data.id}</Text>
                        <Text>{data.title}</Text>
                        <Text>{data.body}</Text>
                    </View>
                    : null
            }
        </View>
    )
}

export default GetAPi;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 8,
        marginVertical: 8
    },
    subContainer: {
        backgroundColor: '#f4f4f4',
        paddingVertical: 8,
        paddingHorizontal: 8
    }
})
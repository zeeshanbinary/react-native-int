import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

const FlatAPi = () => {
    const [data, setData] = useState([])

    async function UserData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData)
    }

    useEffect(() => {
        UserData()
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.subContainer}>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default FlatAPi;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 8,
        marginVertical: 8,
    },
    subContainer: {
        backgroundColor: '#f4f4f4',
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 10
    }
})
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ListAPi = () => {
    const [data, setData] = useState("")

    async function UserData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData)
    }

    useEffect(() => {
        UserData()
    }, [])
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {
                data.length > 0 ? data.map((item) => {
                    return (
                        <View style={styles.subContainer} key={item.id}>
                            <Text>{item.id}</Text>
                            <Text>{item.title}</Text>
                            <Text>{item.body}</Text>
                        </View>
                    )
                }) : null
            }
        </ScrollView>
    )
}

export default ListAPi;

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
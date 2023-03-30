import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import UserComponent from "./UserComponent";

const data = [
    {
        id: 1,
        name: "Zeeshan",
        email:"abc123@gmail.com"
    },
    {
        id: 2,
        name: "Shubham",
        email:"abc123@gmail.com"
    },
    {
        id: 3,
        name: "Alok",
        email:"abc123@gmail.com"
    },
    {
        id: 4,
        name: "Simran",
        email:"abc123@gmail.com"
    },
    {
        id: 6,
        name: "Asba",
        email:"abc123@gmail.com"
    },
    {
        id: 7,
        name: "Zeeshan",
        email:"abc123@gmail.com"
    },
    {
        id: 8,
        name: "Shubham",
        email:"abc123@gmail.com"
    },
    {
        id: 9,
        name: "Alok",
        email:"abc123@gmail.com"
    },
    {
        id: 10,
        name: "Simran",
        email:"abc123@gmail.com"
    },
    {
        id: 11,
        name: "Asba",
        email:"abc123@gmail.com"
    }
]
const ListComponent = () => {
    const renderItem = ({ item }) => {
        return (
            <UserComponent item={item} />
        )
    }
    return (
        <View style={styles.container}>
            <Text>React Native List Component</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
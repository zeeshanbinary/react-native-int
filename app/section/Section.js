import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

const users = [
    {
        id: 1,
        name: "Zeeshan",
        data: ['a', 'b', 'c', 'd']
    },
    {
        id: 2,
        name: "Shubham",
        data: ['a', 'b', 'c', 'd']
    },
    {
        id: 3,
        name: "Alok",
        data: ['a', 'b', 'c', 'd']
    },
    {
        id: 4,
        name: "Simran",
        data: ['a', 'b', 'c', 'd']
    },
    {
        id: 6,
        name: "Asba",
        data: ['a', 'b', 'c', 'd']
    },
    {
        id: 7,
        name: "Zeeshan",
        data: ['a', 'b', 'c', 'd']
    },
    {
        id: 8,
        name: "Shubham",
        data: ['a', 'b', 'c', 'd']
    },
    {
        id: 9,
        name: "Alok",
        data: ['a', 'b', 'c', 'd']
    },
    {
        id: 10,
        name: "Simran",
        data: ['a', 'b', 'c', 'd']
    },
    {
        id: 11,
        name: "Asba",
        data: ['a', 'b', 'c', 'd']
    }
]
const SectionData = () => {
    return (
        <View style={styles.container}>
            <Text>React Native SectionData List Component</Text>
            <SectionList
                sections={users}
                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({section:{name}}) => <Text>{name}</Text>}
            />
        </View>
    )
}

export default SectionData;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
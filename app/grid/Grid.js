import React from "react";
import { StyleSheet, Text, View } from "react-native";

const data = [
    {
        id: 1,
        name: "Zeeshan"
    },
    {
        id: 2,
        name: "Shubham"
    },
    {
        id: 3,
        name: "Alok"
    },
    {
        id: 4,
        name: "Simran"
    },
    {
        id: 6,
        name: "Asba"
    },
    {
        id: 7,
        name: "Zeeshan"
    },
    {
        id: 8,
        name: "Shubham"
    },
    {
        id: 9,
        name: "Alok"
    },
    {
        id: 10,
        name: "Simran"
    },
    {
        id: 11,
        name: "Asba"
    }
]
const Grid = () => {
    return (
        <View style={styles.container}>
            <Text>React Native Grid</Text>

            <View style={styles.subContainer}>
                {
                    data.map((item) => {
                        return (
                            <Text key={item.id} style={styles.title}>{item.name}</Text>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Grid;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    title:{
        height:100,
        width:100,
        backgroundColor:'crimson',
        textAlign:'center',
        textAlignVertical:'center',
        color:'#fff',
        fontWeight:'bold',
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:10
    }
})
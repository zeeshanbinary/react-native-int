import React from "react";
import { StyleSheet, Text, View } from "react-native";

const JSX = () => {
    let name = "Zeeshan Ansari";
    let age = 24;
    let address = "Quazipur,Bhadohi (S.R.N)";
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello JSX</Text>
            <Text>Hello {name}</Text>
            <Text>Your age is {age}</Text>
            <Text>Your address {address}</Text>
        </View>
    )
}

export default JSX

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    title:{
        color:'crimson',
        fontSize:14,
        fontWeight:'700',
        textAlign:'center'
    }
})
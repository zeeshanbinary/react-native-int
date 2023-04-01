import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Responsive = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.InnerBox1}></View>
                <View style={styles.InnerBox2}></View>
                <View style={styles.InnerBox3}></View>
            </View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

export default Responsive;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box1: {
        flex: 2,
        backgroundColor: 'red',
        flexDirection:'row'
    },
    box2: {
        flex: 1,
        backgroundColor: 'pink'
    },
    box3: {
        flex: 1,
        backgroundColor: 'grey'
    },
    InnerBox1: {
        flex: 1,
        backgroundColor: 'yellow',
    },

    InnerBox2: {
        flex: 1,
        backgroundColor: 'grey'
    },
    InnerBox3: {
        flex: 1,
        backgroundColor: 'orange'
    },
})
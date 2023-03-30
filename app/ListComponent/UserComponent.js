import React from "react";
import { Text, View,StyleSheet } from "react-native";

const UserComponent = (props) => {
    return (
        <View style={styles.subContainer}>
            <Text style={styles.title}>{props.item.name}</Text>
            <Text style={styles.title}>{props.item.email}</Text>
        </View>
    )
}

export default UserComponent;

const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor:'crimson',
        marginHorizontal: 8,
        marginVertical: 5,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:5
    },
    title: {
        color: '#fff',
        fontWeight: 'bold'
    }
})
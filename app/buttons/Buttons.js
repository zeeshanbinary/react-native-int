import React,{useState} from "react";
import { View,Text, StyleSheet, Button } from "react-native";

const Buttons = () => {
    const [data,setData] = useState(0)
    return(
        <View style={styles.container}>
            <Text>React Native Button</Text>
            <Text>{data}</Text>
            <Button title="Click Me" onPress={() => setData(data+1)} />
        </View>
    )
}

export default Buttons;

const styles = StyleSheet.create({
    container:{
        padding:8
    }
})
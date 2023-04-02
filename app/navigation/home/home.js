import React from 'react';
import { View, Text, Button } from 'react-native';
const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home Page</Text>
            <Button
                title='Goto About Page'
                onPress={() => navigation.navigate('About',{
                    name:"Zeeshan Ansari",
                    age:25,
                    address:"Bhadohi"
                })}
            />
        </View>
    )
}

export default Home;
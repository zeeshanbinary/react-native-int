import React from 'react';
import { View, Text, Button } from 'react-native';
const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home Page</Text>
            <Button
                title='Goto About Page'
            />
        </View>
    )
}

export default Home;
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home/home';
import About from './about/about';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    const screenOptions = (() => ({
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTitleStyle: {
            fontSize: 26
        },
        headerTintColor: '#fff',
        headerLeft: () => <Button title='Click' />,
        headerRight: () => <Button title='Press ' color={'green'} />
    }))
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
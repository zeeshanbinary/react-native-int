import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home/home';
import About from './about/about';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="About" component={About} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavigation;
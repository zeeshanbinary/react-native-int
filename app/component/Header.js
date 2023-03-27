import React from "react";
import { Text, View } from "react-native";

const Header = () => {
    return(
        <View>
            <Text>This is a header component</Text>
            <Footer />
            <Footer />
            <Footer />
        </View>
    )
}


const Footer = () => {
    return(
        <View>
            <Text>This is a footer component</Text>
        </View>
    )
}

export default Header;
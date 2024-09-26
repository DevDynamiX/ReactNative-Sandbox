import { SafeAreaProvider } from "react-native-safe-area-context";
import {StatusBar, Text, Image} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";

export default function App() {
    return (
    <SafeAreaProvider>
            <StatusBar barStyle={"dark-content"} />
            <Text> Thrift Marketplace </Text>
            <Image source={require('../2.png')} />
    </SafeAreaProvider>
    );
}


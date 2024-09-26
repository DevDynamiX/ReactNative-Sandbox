import React from 'react';
import { StyleSheet,ImageBackground, Text, View } from "react-native";

export default function loadPage() {
    return (
        <ImageBackground
            source = {{uri: './assets/images/ThriftMarketplaceLoadpage.png'}}
            style = {styles.background}
        >
            <View style={styles.content}>
                <text>Welcome</text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        resizeMode: "cover",
    },
    content: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

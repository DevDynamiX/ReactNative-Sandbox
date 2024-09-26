import { SafeAreaProvider } from "react-native-safe-area-context";
import {StatusBar, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    return (
    <SafeAreaProvider>
            <StatusBar barStyle={"dark-content"} />
            <NavigationContainer>
                <Text> hello world </Text>
            </NavigationContainer>
    </SafeAreaProvider>
    );
}


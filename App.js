import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./src/screen/HomeScreen";
import DetailScreen from "./src/screen/DetailScreen";
import Header from "./src/components/Header";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <Header {...props} />,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "VGA Store" }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: "Product Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

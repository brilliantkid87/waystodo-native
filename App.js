import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from 'native-base';
import Welcome from "./screen/welcome";
import Login from "./screen/login";
import Register from "./screen/register";
import Home from "./screen/home";
import AddCategory from "./screen/add_category";


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddCategory" component={AddCategory} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
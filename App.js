import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from 'native-base';
import Welcome from "./screen/welcome";
import Login from "./screen/login";
import Register from "./screen/register";
import Home from "./screen/home";
import AddCategory from "./screen/add_category";
import AddList from "./screen/add_list";
import DetailList from "./screen/detail_list";


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
          <Stack.Screen name="AddList" component={AddList} />
          <Stack.Screen name="DetailList" component={DetailList} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
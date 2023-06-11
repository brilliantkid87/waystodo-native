import React from "react";
import { Button, View, Text, Image } from "native-base";

export default function Welcome({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image
                source={require('../assets/home.png')}
                alt="home"
            />
            <Image
                source={require('../assets/waystodo.png')}
                alt="waystodo"
            />
            <Text textAlign={"center"} width={250} marginTop={10}>Ways ToDO
                Write your activity and finish your activity.
                Fast, Simple and Easy to Use
                Login
                Register</Text>
            <Button
                bg="error.500"
                width="75%"
                marginTop={10}
                _hover={{ backgroundColor: "error.600" }}
                py={3}
                _text={{
                    fontSize: "md",
                    fontWeight: "bold",
                }}
                onPress={() => navigation.navigate("Login")}
            >
                Login
            </Button>
            <Button
                bg="muted.400"
                width="75%"
                marginTop={10}
                _hover={{ backgroundColor: "muted.500" }}
                py={3}
                _text={{
                    fontSize: "md",
                    fontWeight: "bold",
                }}
                onPress={() => navigation.navigate("Register")}
            >
                Register
            </Button>
        </View>
    );
}
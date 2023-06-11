import React from "react";

import { Text, View, Input, Button, Heading, Stack, Center, Divider, HStack } from "native-base";

export default function AddCategory({ navigation }) {
    return (

        <>

            <View alignItems="center" margin={15}>
                <Input mx="3" placeholder="Search List" w="100%" />

                <Button
                    bg="muted.400"
                    width="100%"
                    marginTop={10}
                    _hover={{ backgroundColor: "muted.500" }}
                    py={3}
                    _text={{
                        fontSize: "md",
                        fontWeight: "bold",
                    }}
                >
                    Add Category
                </Button>

            </View>

            <Heading style={{ marginTop: 20, alignItems: "flex-start", display: "flex", marginLeft: 20 }}
            >
                List Category
            </Heading>

            <HStack space={3} justifyContent="flex-start" marginTop={10} marginLeft={5}>
                <Button size="sm" backgroundColor="#81C8FF">STUDY</Button>
                <Button size="sm" backgroundColor="#FF8181">
                    HOME WORK
                </Button>
                <Button size="sm" backgroundColor="#FFB681" onPress={() => navigation.navigate("AddList")}>
                    WORKOUT
                </Button>
            </HStack>


        </>
    )
}

import React, { Component } from "react";
import { Form, Stack, Box, FormControl, View, Text, Image, Item, Input, Label, Heading, VStack, Link, Button, HStack } from "native-base";
export default function Register({navigation}) {
    return (

        <>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image
                    source={require('../assets/loginicon.png')}
                    alt="loginicon"
                />
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Register
                    </Heading>
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input placeholder="Email"/>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input placeholder="Password" type="password" />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Input placeholder="Confirm Password" type="password" />
                        </FormControl>
                        <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate("Welcome")}>
                            Sign up
                        </Button>
                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                Joined us before?{" "}
                            </Text>
                            <Link _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }} onPress={() => navigation.navigate("Login")}>
                                Login
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </View>
        </>
    )
}
import React from "react";
import { Text, Stack, FormControl, Input, VStack, Select, Item, CheckIcon, Box, TextArea, Button } from "native-base";

export default function AddList({ navigation }) {

    return (

        <>

            <Box
                display="flex"
                flex={1}
                bg="white"
                px={3}
                py={5}
                w={"100%"}
                alignItems="center"
            >
                <Box display="flex" w={"90%"} mt={5}>
                    <Text fontWeight="bold" fontSize={30}>
                        Add List
                    </Text>
                    <Box display="flex" w={"100%"} mt={5}>
                        <Input
                            w={"100%"}
                            bg="muted.200"
                            placeholder="Name"
                            py={3}
                            my={2}
                            // value={dataList.name}
                            fontSize={15}
                            borderRadius="sm"
                            borderColor="muted.500"
                            // onChangeText={(value) => handleChangeText("name", value)}
                        />
                        <Select
                            // defaultValue={dataList.category_id}
                            placeholder="Pilih category..."
                            w={"100%"}
                            h={50}
                            bg="muted.200"
                            py={3}
                            my={2}
                            fontSize={15}
                            borderRadius="sm"
                            borderColor="muted.500"
                            _selectedItem={{
                                bg: "muted.500",
                            }}
                            mt={1}
                            // onValueChange={(value) => handleChangeText("category_id", value)}
                        >
                           
                        </Select>
                        <Input
                            w={"100%"}
                            bg="muted.200"
                            placeholder="Date (miliseconds)"
                            type="number"
                            keyboardType="numeric"
                            py={3}
                            my={2}
                            // value={dataList.date}
                            fontSize={15}
                            borderRadius="sm"
                            borderColor="muted.500"
                            // onChangeText={(value) => handleChangeText("date", value)}
                        />
                        <TextArea
                            w={"100%"}
                            h={100}
                            bg="muted.200"
                            placeholder="Description"
                            py={3}
                            my={2}
                            // value={dataList.description}
                            fontSize={15}
                            borderRadius="sm"
                            borderColor="muted.500"
                            // onChangeText={(value) => handleChangeText("description", value)}
                        />
                        <Button
                            w={"100%"}
                            mt={5}
                            bg="error.500"
                            _hover={{ backgroundColor: "error.600" }}
                            py={3}
                            _text={{
                                fontSize: "md",
                                fontWeight: "bold",
                            }}
                            onPress={() => navigation.navigate("DetailList")}
                        >
                            Add List
                        </Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}
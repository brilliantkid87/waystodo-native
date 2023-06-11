import { Box, Button, Image, Text } from "native-base"

export default function DetailList({ navigation }) {

    return (

        <>

            <Box display="flex" flex={1} alignItems="center" bg="white">
                <Box
                    // intinya dia ngambil dari data todo color kita find ngecompare index sama index item terus di modulus banyaknya todoColor
                    // object keys itu ngambil banyaknya length terus di - 1 biar modulus 4, jadi loop balik ke index awal lagi
                    bg={"red.500"}
                    w={"90%"}
                    p={10}
                    // borderRadius={10}
                    display="flex"
                    flexDirection="row"
                    mx={5}
                    my={5}
                >
                    <Box flex={2}>
                        <Text
                            fontWeight="bold"
                            fontSize={20}
                        // textDecorationLine={list?.is_done == 0 ? "none" : "line-through"}
                        >

                        </Text>
                        <Text
                            color="muted.500"
                            flex={1}
                        // textDecorationLine={list?.is_done == 0 ? "none" : "line-through"}
                        >

                        </Text>
                        <Text color="muted.500" display="flex" alignItems="center">
                            {/* <FontAwesome
                                name="calendar"
                                size={15}
                                color="muted.500"
                                style={{ marginRight: 5 }}
                            /> */}

                        </Text>
                    </Box>
                    <Box flex={1}>
                        <Box
                            p={1}
                            // borderRadius={10}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            // intinya dia ngambil dari data todo color kita find ngecompare index sama index item terus di modulus banyaknya todoColor
                            // object keys itu ngambil banyaknya length terus di - 1 biar modulus 4, jadi loop balik ke index awal lagi
                            bg={"red.300"}
                        >
                            <Text color="white" fontWeight="bold">

                            </Text>
                        </Box>
                        <Box
                            flex={1}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {/* intinya buat ngatur buttonnya udah di klik belum, kalau udah ada checklistnya kalau belum ilangin */}
                            <Button
                                bg={"white"}
                                // borderRadius={"100%"}
                                _hover={{ backgroundColor: "muted.300" }}
                                _pressed={{ backgroundColor: "muted.400" }}
                                mt={2}
                                w={50}
                                h={50}
                            // onPress={(e) => handleUpdateIsDone(e, list?._id, list?.is_done)}
                            >




                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>

    )
}
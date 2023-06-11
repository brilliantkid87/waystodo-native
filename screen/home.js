import React from "react";
import { Button, Text, Stack, HStack, Center, Heading, Box, View, Input, Image } from "native-base";

export default function Home({navigation}) {
    const [service, setService] = React.useState("");
    return (
        <>
            <Box>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Heading fontSize={16} marginLeft={5} marginTop={5} flex={1}>Brilliantkid</Heading>
                    <Image style={{ marginRight: 12, marginTop: 5}}
                        source={require('../assets/Ellipse1.png')}
                        alt="ellipse"
                    />
                </View>


                <View alignItems="center" margin={15}>
                    <Input mx="3" placeholder="Search List" w="100%" />
                </View>;
                <HStack space={3} justifyContent="center">
                    <Input mx="3" placeholder="Search List" w="26%" />
                    <Input mx="3" placeholder="Search List" w="26%" />
                    <Input mx="3" placeholder="Search List" w="26%" />
                </HStack>;

                <View style={{ alignItems: "center", justifyContent: "center", marginTop: 40 }}>

                    <Image
                        source={require('../assets/Group5.png')}
                        alt="group5"
                    />

                </View>
                <Button onPress={() => navigation.navigate("AddCategory")}>text</Button>
            </Box>

        </>
    )
}

        // <Center flex={1}>
        //     <Stack space={3} alignItems="space-between" justifyContent="center">
        //         <HStack space={3} alignItems="center">
        //             <Center size={16} bg="primary.400" rounded="md" _text={{
        //                 color: "white"
        //             }} shadow={3}>
        //                 Box 1
        //             </Center>
        //             <Center bg="secondary.400" size={16} rounded="md" _text={{
        //                 color: "white"
        //             }} shadow={3}>
        //                 Box 2
        //             </Center>
        //             <Center size={16} bg="emerald.400" rounded="md" _text={{
        //                 color: "white"
        //             }} shadow={3}>
        //                 Box 3
        //             </Center>
        //         </HStack>
        //     </Stack>
        // </Center>
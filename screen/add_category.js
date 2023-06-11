import { Text, View, Input } from "native-base";

export default function AddCategory({ navigation }) {
    return (

        <>

            <View alignItems="center" margin={15}>
                <Input mx="3" placeholder="Search List" w="100%" />
            </View>

        </>
    )
}
import { NavigationContainer } from "@react-navigation/native"
import { Button, Text, View } from "react-native"
import { RootStackParamList } from "../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
    const { userId, name } = route.params
    return <View>
        <Text>Profile Screen</Text>
        <Text>User ID: {userId}</Text>
        <Text>Name: {name}</Text>

        <Button title="Go Back" onPress={() => navigation.goBack()} />

    </View>
}
export default ProfileScreen;
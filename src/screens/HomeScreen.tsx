import { NavigationContainer } from "@react-navigation/native"
import { Button, Text, View } from "react-native"
import { RootStackParamList } from "../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return <View>
        <Text >Home Screen</Text>
        <Button title="Go to Profile" onPress={() => { navigation.navigate('Profile', { userId: 1, name: 'John Doe' }) }} />
        <Button title="Go to More Tabs" onPress={() => { navigation.navigate('MoreTabs') }} />
    </View>
}
export default HomeScreen;
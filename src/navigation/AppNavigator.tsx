import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/profileScreen";
import { Alert, Button } from "react-native";
import MoreTabs from "../screens/MoreTabs";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerBackTitle: 'Custom Back',
                headerBackTitleStyle: { fontSize: 30 },
            }} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={(route) => {
                return { title: route.route.params.name }
            }} />
            {/* <Stack.Screen name="MoreTabs" component={MoreTabs} /> */}
        </Stack.Navigator>
    )
}
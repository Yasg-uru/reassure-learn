import { Button, Text, View } from "react-native"
import { useEffect, useRef, useState } from "react";
import { RootStackParamList } from "../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

    const renderCount = useRef(0);
    renderCount.current += 1;

    const [tick, setTick] = useState(0);

  
    useEffect(() => {
        const interval = setInterval(() => {
            setTick((t) => t + 1);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const items = Array.from({ length: 10000 }, (_, i) => i * i);

    return (
        <View>
            <Text>Home Screen</Text>
            <Text>Render count: {renderCount.current}</Text>
            <Text>Tick: {tick}</Text>

            {items.map((item) => (
                <Text key={item}>{item}</Text>
            ))}

            <Button title="Go to Profile" onPress={() =>
                navigation.navigate('Profile', { userId: 1, name: 'John Doe' })
            } />

            <Button title="Go to More Tabs" onPress={() =>
                navigation.navigate('MoreTabs')}
            />
        </View>
    );
};

export default HomeScreen;

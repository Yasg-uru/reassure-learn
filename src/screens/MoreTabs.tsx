import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './FeedScreen';
import Messages from './Messages';

const Tab = createBottomTabNavigator();

export default function MoreTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Messages" component={Messages} />
        </Tab.Navigator>
    );
}

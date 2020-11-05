import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';

const Navigator = () => {
    let Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="float"
                screenOptions={{
                    headerTitleAlign: 'center',
                    gestureDirection: 'horizontal'
                }}>
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
                <Stack.Screen name="Detail" options={{ headerTitle: '详情页' }} component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;

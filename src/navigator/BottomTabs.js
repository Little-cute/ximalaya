import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';

const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '首页';
    let name = '首页';
    switch (routeName) {
        case 'Home':
            name = '首页';
            break;
        case 'Listen':
            name = '我听';
            break;
        case 'Found':
            name = '发现';
            break;
        case 'Account':
            name = '我的';
            break;
        default:
            name = '首页';
            break;
    }
    return name;
}

class BottomTabs extends React.Component {
    componentDidUpdate() {
        const { navigation, route } = this.props;
        navigation.setOptions({
            headerTitle: getHeaderTitle(route)
        })
    }
    render() {
        return (
            <Tab.Navigator tabBarOptions={{ activeTintColor: '#f86442' }}>
                <Tab.Screen name='Home' component={Home} options={{ tabBarLabel: '首页' }} />
                <Tab.Screen name='Listen' component={Listen} options={{ tabBarLabel: '我听' }} />
                <Tab.Screen name='Found' component={Found} options={{ tabBarLabel: '发现' }} />
                <Tab.Screen name='Account' component={Account} options={{ tabBarLabel: '我的' }} />
            </Tab.Navigator>
        )
    }
}

export default BottomTabs;

import React from 'react';
import { View, Text, Button } from 'react-native';

class Home extends React.Component {
    onPress = () => {
        const { navigation } = this.props
        navigation.navigate("Detail", {
            id: 100,
        })
    }
    render() {
        return (
            <View>
                <Text>Home</Text>
                <Button title="跳转到详情页" onPress={this.onPress} />
            </View>
        )
    }
}

export default Home;
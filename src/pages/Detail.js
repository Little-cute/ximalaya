import React from 'react';
import { View, Text } from 'react-native';

class Detail extends React.Component {
    render() {
        const { route } = this.props;
        return (
            <View>
                <Text>Detail</Text>
                <Text>{route.params.id}</Text>
            </View>
        )
    }
}

export default Detail;
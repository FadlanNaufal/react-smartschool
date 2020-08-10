import React from 'react'
import { View, Text } from 'react-native'

const Gap = ({height, width}) => {
    return (
        <View>
            <View style={{height : height, width : width}}></View>
        </View>
    )
}

export default Gap

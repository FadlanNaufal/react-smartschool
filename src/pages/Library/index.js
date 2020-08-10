import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { basicColors } from '../../utils/color'

const Library = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Library</Text>
            </View>
        </View>
    )
}

export default Library

const styles = StyleSheet.create({
    container : {
        backgroundColor : basicColors.bottomNav,
        flex : 1
    },
    content : {
        flex : 1,
        backgroundColor : basicColors.mainBackground,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    }
})

import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Avatar1, IconNotification } from '../../assets/icon'
import { basicColors, fonts } from './../../utils'

const HomeProfile = ({ avatar, name, onPress }) => {
    return (
        <View style={styles.container}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.wrapperText}>
                <Text style={styles.greetingText}>Good Morning,</Text>
                <Text  style={styles.nameText}>{name}</Text>
            </View>
            <TouchableOpacity onPress={onPress}>
                <IconNotification/>
            </TouchableOpacity>
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container : {
        backgroundColor : basicColors.white,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        flexDirection : 'row',
        paddingHorizontal : 18,
        paddingVertical : 24,
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    avatar : {
        width : 46,
        height :46
    },
    greetingText : {
        fontSize :12,
        fontFamily : fonts.primary.normal,
        color : basicColors.text.secondary
    },
    nameText : {
        fontSize :16,
        fontFamily : fonts.primary[600],
        color : basicColors.text.primary
    },
    wrapperText : {
        paddingLeft : 10,
        flex : 1
    }
})

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { basicColors } from '../../utils/color'
import { fonts } from '../../utils'

const Button = ({onPress, title, type, icon}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container : {
        backgroundColor : basicColors.button.primary.background,
        paddingVertical : 10,
        borderRadius : 5
    },
    buttonText : {
        color : basicColors.button.primary.text,
        fontSize : 16,
        fontFamily : fonts.primary[600],
        textAlign : 'center'
    }
})

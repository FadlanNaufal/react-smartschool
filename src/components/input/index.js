import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { basicColors } from '../../utils/color'
import { fonts } from '../../utils'

const Input = ({label, value, onChangeText, secureTextEntry}) => {
    return (
        <View>
            <Text style={styles.labelText}>{label}</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} value={value} secureTextEntry={secureTextEntry}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input : {
        paddingHorizontal : 19,
        paddingVertical : 10,
        marginTop :7,
        borderWidth : 1.5,
        borderColor : basicColors.border,
        borderRadius : 5
    },
    labelText : {
        color : basicColors.text.secondary,
        fontFamily : fonts.primary.normal,
        fontSize : 16
    }
})

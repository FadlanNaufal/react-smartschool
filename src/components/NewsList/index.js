import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { ILNews } from './../../assets'
import { basicColors, fonts } from '../../utils'

const NewsList = ({image, title, desc, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <ImageBackground style={styles.container} source={image}>
               <View style={styles.wrapperNews}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{title}</Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.desc}>{desc}</Text>
               </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
 
export default NewsList

const styles = StyleSheet.create({
    container : {
        width : 234,
        height : 140,
        borderRadius : 5,
        marginRight : 10
    },
    title : {
        fontSize : 16,
        color : basicColors.white,
        fontFamily : fonts.primary[600],
        maxWidth : 205
    },
    desc : {
        fontSize : 12,
        color : basicColors.white,
        fontFamily : fonts.primary.normal,
        maxWidth : 210
    },
    wrapperNews : {
        marginTop : 87,
        paddingLeft : 12
    }
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { basicColors, fonts } from '../../utils'

const ChapterList = ({chapter, video, ebook}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.chapterText}>{chapter}</Text>
            <Text style={styles.materialText}>{video} Videos | {ebook} Ebooks</Text>
        </View>
    )
}

export default ChapterList

const styles = StyleSheet.create({
    container : {
        backgroundColor : basicColors.white,
        paddingVertical : 11,
        paddingHorizontal : 15,
        marginVertical : 11,
        marginHorizontal : 18,
    },
    chapterText : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : basicColors.text.primary
    },
    materialText : {
        fontSize : 10,
        fontFamily : fonts.primary.normal,
        color : basicColors.text.secondary,
        marginTop : 13
    }
})

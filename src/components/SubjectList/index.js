import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { basicColors, fonts } from '../../utils'
import { IconSubject } from '../../assets'

const SubjectList = ({subject, teacher, chapter, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <IconSubject/>
            <View style={styles.wrapperText}>
                <Text style={styles.subjectText}>{subject}</Text>
                <Text style={styles.teacherText}>{teacher}</Text>
                <Text style={styles.chapterText}>{chapter} Chapters</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SubjectList

const styles = StyleSheet.create({
    container : {
        backgroundColor : basicColors.white,
        paddingVertical : 11,
        paddingHorizontal : 15,
        marginVertical : 11,
        marginHorizontal : 18,
        flexDirection : 'row'
    },
    wrapperText : {
        marginLeft : 15,
        justifyContent : 'space-between'
    },
    subjectText : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : basicColors.text.primary
    },
    teacherText : {
        fontSize : 12,
        fontFamily : fonts.primary[600],
        color : basicColors.text.secondary
    },
    chapterText : {
        fontSize : 10,
        fontFamily : fonts.primary[600],
        color : basicColors.text.secondary
    }
})

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { basicColors, fonts } from '../../utils'

const TimetableList = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.subjectText}>Ilmu Pengetahuan Alam</Text>
            <View  style={styles.wrapperDesc}>
                <Text style={styles.descText}>Een Endrawati</Text>
                <Text style={styles.descText}>07:00 - 08:00</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TimetableList

const styles = StyleSheet.create({
    container : {
        backgroundColor : basicColors.white,
        paddingVertical : 11,
        paddingHorizontal : 15,
        marginTop : 15,
        borderRadius : 3
    },
    subjectText : {
        fontFamily : fonts.primary[600],
        color : basicColors.text.primary,
        fontSize : 16
    },
    descText : {
        fontFamily : fonts.primary.normal,
        color : basicColors.text.primary,
        fontSize : 12
    },
    wrapperDesc : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 12
    }
})

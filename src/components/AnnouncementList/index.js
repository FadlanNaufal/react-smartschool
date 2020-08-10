import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { basicColors, fonts } from '../../utils'
import { BottomSheet } from 'react-native-btr'

const AnnouncementList = ({title, day, description}) => {

    const [visible, setVisible] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.wrapperText}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.day}>{day}</Text>
            </View>
            <Text style={styles.description}>
               {description}
            </Text>
        </View>
    )
}

export default AnnouncementList

const styles = StyleSheet.create({
    container : {
        backgroundColor : basicColors.white,
        paddingHorizontal :  15,
        paddingVertical : 11,
        marginVertical : 11,
        marginHorizontal : 18
    },
    wrapperText : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    title : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : basicColors.black
    },
    day : {
        fontSize : 11,
        fontFamily : fonts.primary.normal,
        color : basicColors.text.secondary
    },
    description : {
        fontSize : 12,
        fontFamily : fonts.primary.normal,
        color : basicColors.text.primary,
        marginTop : 17
    }
})

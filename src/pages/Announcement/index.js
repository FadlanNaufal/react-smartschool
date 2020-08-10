import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, AnnouncementList } from '../../components'
import { basicColors } from '../../utils'



const Announcement = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title='Announcement' icon onPress={()=>navigation.goBack()}/>
            <AnnouncementList title="Upacara Hari Senin" day="Sunday, 14 July" description=" Perhatian untuk seluruh warga SMP Kodein 01 yang beragama islam, besok akan di adakan sholat dhuha bersama yang akan di pimpin oleh Pak Hafid sekaligus doa bersama."/>
        </View>
    )
}

export default Announcement

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : basicColors.mainBackground,
    }
})

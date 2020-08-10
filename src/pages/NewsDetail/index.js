import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Header } from '../../components'
import { ILNewsDetail } from '../../assets'
import { basicColors, fonts } from '../../utils'

const NewsDetail = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title="News Detail" icon onPress={()=>navigation.goBack()}/>
            <ImageBackground source={ILNewsDetail} style={styles.imageDetail} />
            <View style={styles.newsContent}>
                <Text style={styles.newsTitle}>Proses KBM mulai besok</Text>
                <Text style={styles.newsAuthor}>Posted by Maman Abdurahman</Text>
                <Text style={styles.newsDesc}>
                    Menurut kementrian, sekolah mulai melakukan proses KBM nya pada besok dan tidak lupa untuk tetap berjalan sesuai protokol kesehatan yang telah di tentukan oleh pemerintah pusat
                </Text>
            </View>
        </View>
    )
}

export default NewsDetail

const styles = StyleSheet.create({
    container : {
        flex : 1
    },  
    imageDetail : {
        height : 200
    },
    newsContent : {
        backgroundColor : basicColors.white,
        // backgroundColor :'red',
        flex : 1,
        borderTopRightRadius : 20,
        borderTopLeftRadius : 20,
        marginTop : -15,
        padding : 18
    },
    newsTitle : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : basicColors.text.primary
    },
    newsAuthor : {
        fontSize : 14,
        fontFamily : fonts.primary.normal,
        color : basicColors.text.secondary,
        paddingVertical : 12
    },
    newsDesc : {
        fontSize : 14,
        fontFamily : fonts.primary.normal,
        color : basicColors.text.primary,
    }
})

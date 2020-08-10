import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { basicColors } from '../../utils'
import { Header } from '../../components'
import ChapterList from '../../components/ChapterList'

const SubjectDetail = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title="Ilmu Pengetahuan Alam" icon onPress={()=>navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom : 5 }}>
                <ChapterList chapter="Objek IPA dan Pengamatannya" video={2} ebook={13}/>
                <ChapterList chapter="Objek IPA dan Pengamatannya" video={2} ebook={13}/>
                <ChapterList chapter="Objek IPA dan Pengamatannya" video={2} ebook={13}/>
                <ChapterList chapter="Objek IPA dan Pengamatannya" video={2} ebook={13}/>
                <ChapterList chapter="Objek IPA dan Pengamatannya" video={2} ebook={13}/>
                <ChapterList chapter="Objek IPA dan Pengamatannya" video={2} ebook={13}/>
                <ChapterList chapter="Objek IPA dan Pengamatannya" video={2} ebook={13}/>
                <ChapterList chapter="Objek IPA dan Pengamatannya" video={2} ebook={13}/>
            </ScrollView>
        </View>
    )
}

export default SubjectDetail

const styles = StyleSheet.create({
    container : {
        backgroundColor : basicColors.mainBackground,
        flex : 1
    }
})

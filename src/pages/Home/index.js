import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { basicColors } from '../../utils/color'
import { HomeProfile, NewsList, TimetableList, Gap } from '../../components'
import { Avatar1 } from '../../assets/icon'
import { fonts } from '../../utils'
import { ILNews } from '../../assets'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom : 5 }}>
                <HomeProfile avatar={Avatar1} name="Fadlan Naufal" onPress={()=>navigation.navigate('Announcement')}/>
                <View style={styles.wrapperSection}>
                    <Text style={styles.sectionText}>News</Text>
                </View>
                <View style={styles.wrapperScroll}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.wrapperNews}>
                        <Gap width={30} />
                        <NewsList onPress={()=>navigation.navigate('NewsDetail')} image={ILNews} title="Proses KBM Mulai Besok" desc="Menurut kementrian, sekolah mulai besok pada hari senin"/>
                        <NewsList onPress={()=>navigation.navigate('NewsDetail')} image={ILNews} title="Orang Tua Siswa Ingin Keringanan SPP BUlanan" desc="Protes dari beberapa orang tua siswa"/>
                        <NewsList onPress={()=>navigation.navigate('NewsDetail')} image={ILNews} title="Pandemic Memanjang, Biaya Melonjak" desc="Biaya yang melonjak"/>
                        <Gap width={18}/>
                    </ScrollView>
                </View>
                <View style={styles.wrapperSection}>
                        <View style={styles.wrapperTimetable}>
                            <Text style={styles.sectionText}>Timetable</Text>
                            <Text style={styles.dateText}>Monday, 15 Juli</Text>
                        </View>
                        <TimetableList/>
                        <TimetableList/>
                        <TimetableList/>
                        <TimetableList/>
                        <TimetableList/>
                        <TimetableList/>
                </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container : {
        backgroundColor : basicColors.bottomNav,
        flex : 1
    },
    content : {
        flex : 1,
        backgroundColor : basicColors.mainBackground,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    },
    wrapperSection : {
        padding : 13
    },
    sectionText : {
        fontSize : 12,
        fontFamily : fonts.primary[600],
        color : basicColors.text.primary,
    },
    dateText : {
        fontSize : 12,
        fontFamily : fonts.primary[600],
        color : basicColors.text.secondary,
    },
    wrapperScroll : {
        marginHorizontal : -16
    },
    wrapperTimetable : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
})

import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { basicColors } from '../../utils/color'
import SubjectList from '../../components/SubjectList'
import Header from '../../components/Header'

const Study = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom : 5 }}>
                <Header title="Subject" />
                <SubjectList subject="Ilmu Pengetahuan Alam" teacher="Een Endrawati" chapter={10} onPress={()=>navigation.navigate('SubjectDetail')}/>
                <SubjectList subject="Ilmu Pengetahuan Alam" teacher="Een Endrawati" chapter={10} onPress={()=>navigation.navigate('SubjectDetail')}/>
                <SubjectList subject="Ilmu Pengetahuan Alam" teacher="Een Endrawati" chapter={10} onPress={()=>navigation.navigate('SubjectDetail')}/>
                <SubjectList subject="Ilmu Pengetahuan Alam" teacher="Een Endrawati" chapter={10} onPress={()=>navigation.navigate('SubjectDetail')}/>
                <SubjectList subject="Ilmu Pengetahuan Alam" teacher="Een Endrawati" chapter={10} onPress={()=>navigation.navigate('SubjectDetail')}/>
                <SubjectList subject="Ilmu Pengetahuan Alam" teacher="Een Endrawati" chapter={10} onPress={()=>navigation.navigate('SubjectDetail')}/>
                <SubjectList subject="Ilmu Pengetahuan Alam" teacher="Een Endrawati" chapter={10} onPress={()=>navigation.navigate('SubjectDetail')}/>
                <SubjectList subject="Ilmu Pengetahuan Alam" teacher="Een Endrawati" chapter={10} onPress={()=>navigation.navigate('SubjectDetail')}/>
                <SubjectList subject="Ilmu Pengetahuan Alam" teacher="Een Endrawati" chapter={10} onPress={()=>navigation.navigate('SubjectDetail')}/>
                <SubjectList subject="Ilmu Pengetahuan Alam" teacher="Een Endrawati" chapter={10} onPress={()=>navigation.navigate('SubjectDetail')}/>
            </ScrollView>
            </View>
        </View>
    )
}

export default Study

const styles = StyleSheet.create({
    container : {
        backgroundColor : basicColors.bottomNav,
        flex : 1
    },
    content : {
        flex : 1,
        backgroundColor : basicColors.mainBackground,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
    }
})

import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import { ILLogin } from './../../assets'
import { fonts } from './../../utils'
import Input from '../../components/input'
import Gap from '../../components/Gap'
import { Button } from '../../components'

const Login = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <ImageBackground style={styles.imageBG} source={ILLogin}>
                    <Text  style={styles.welcomeText}>Masuk untuk mulai belajar dengan mudah</Text>
                </ImageBackground>
                <View style={styles.loginBox}>
                    <Input label="Username" />
                    <Gap height={24}/>
                    <Input label="Password" />
                    <Gap height={34}/>
                    <Button title="Login" onPress={()=> navigation.replace('MainApp')}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    imageBG : {
        height : 350,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    welcomeText : {
        maxWidth : 274,
        color : 'white',
        fontSize : 23,
        fontFamily : fonts.primary[600],
        paddingTop : 231,
        paddingLeft : 21,
        paddingBottom : 32
    },
    loginBox : {
        backgroundColor : 'white',
        flex  : 1,
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        marginTop : -28,
        paddingVertical : 40,
        paddingHorizontal : 31
    }
})

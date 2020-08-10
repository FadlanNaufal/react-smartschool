import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconBackLight } from '../../assets'
import { basicColors, fonts } from '../../utils'
import Gap from '../Gap'

const Header = ({onPress, title, type, icon}) => {
    const Icon = () => {
        return <IconBackLight/>
    }
    return (
        <View style={styles.container}>
            {
                icon ?
                <TouchableOpacity onPress={onPress}>
                <Icon/>
                </TouchableOpacity> : <Gap width={25} />
            }
            <Text style={styles.title}>{title}</Text>
            <Gap width={25} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container : {
        backgroundColor : basicColors.bottomNav,
        paddingHorizontal : 18,
        paddingVertical : 30,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    title : {
        fontSize : 18,
        color : basicColors.white,
        fontFamily : fonts.primary[600]
    }
})

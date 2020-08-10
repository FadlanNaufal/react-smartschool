import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconHomeActive, IconHomeUnactive, IconStudyActive, IconStudyUnactive, IconQuizActive, IconQuizUnactive, IconLibraryActive, IconLibraryUnactive } from '../../assets'
import { basicColors } from '../../utils/color'
import { fonts } from '../../utils'

const TabIitem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if (title === 'Home'){
            return active ? <IconHomeActive/> : <IconHomeUnactive/>
        }

        if (title === 'Study'){
            return active ? <IconStudyActive/> : <IconStudyUnactive/>
        }

        if (title === 'Quiz'){
            return active ? <IconQuizActive/>  : <IconQuizUnactive/>
        }

        if (title === 'Library'){
            return active ? <IconLibraryActive/> : <IconLibraryUnactive/>
        }

        return <IconHomeActive/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.textMenu(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabIitem

const styles = StyleSheet.create({
    container : {
        alignItems : 'center'
    },
    textMenu : (active) => ({
        fontSize : 10,
        color : active ? basicColors.text.active : basicColors.text.unactive,
        fontFamily : fonts.primary[600],
        marginTop : 4
    })
})

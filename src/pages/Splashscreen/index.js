import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from './../../assets'
import { fonts } from './../../utils'

const Splashscreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ILLogo/>
      <Text style={styles.welcomeText} onPress={() => navigation.navigate('Login')}>Smartschool</Text>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  welcomeText : {
    fontFamily : fonts.primary[600],
    fontSize : 20,
    paddingTop : 19
  }
})

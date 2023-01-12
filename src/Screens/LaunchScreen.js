import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LaunchScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <ImageBackground source={require('../images/background.png')} style={styles.containerImg} >
        <TouchableOpacity onPress={() =>
          navigation.navigate('Login')
        }>
          <View style={styles.button}>
            <Text style={styles.text}>Login/SignUp</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default LaunchScreen

const styles = StyleSheet.create({
  containerImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'

  },
  button: {
    width: 295,
    height: 40,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    marginBottom: 40,
    borderRadius: 10,

  },
  text: {
    textAlign: 'center',
    color: '#057c82',
    fontSize: 16,
    fontWeight: '800',

  }
})
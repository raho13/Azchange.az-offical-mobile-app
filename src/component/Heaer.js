import React, { Component } from 'react'
import { Bodystyle } from '../style/Entrystyle'
import { Image, View } from 'react-native'
const Header = () => {
  return (
    <View style={Bodystyle.Header}>
      <Image
        resizeMode={'center'}
        style={Bodystyle.img}
        source={require('../img/logo1.png')}
      />
    </View>
  )
}
export { Header }

import React, { Component } from 'react'
import { Bodystyle } from '../style/Entrystyle'
import { View, Text } from 'react-native'
const Footer = () => {
  return (
    <View style={Bodystyle.footer}>
      <Text style={Bodystyle.footertxt}>© 2020 AzChange.io</Text>
    </View>
  )
}
export { Footer }

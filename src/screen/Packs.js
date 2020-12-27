import React from 'react'
import { Bodystyle, colors, dimensions } from '../style/Entrystyle'
import Icon from 'react-native-vector-icons/Ionicons'
import { ExchangeStyle } from '../style/ExchangeStyle'
import { PacksStyle } from '../style/PacksStyle'
import { Header } from '../component/Heaer'
import { Footer } from '../component/Footer'
import {
  StatusBar,
  Text,
  CheckBox,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
const Packs = () => {
  return (
    <View style={Bodystyle.container}>
      <Text style={ExchangeStyle.title}>
        Referal paketlərdən birini seçin və gətirdiyiniz istifadəçilərdən qazanc
        əldə edin
      </Text>
      <ScrollView style={PacksStyle.scroll} pagingEnabled={true} horizontal>
        <View style={PacksStyle.border}>
          <View style={PacksStyle.header}>
            <Text style={PacksStyle.eggtxt}>1</Text>
            <Icon
              name="md-egg"
              size={100}
              color="white"
              style={PacksStyle.icon}
            />
            <Text style={PacksStyle.headertxt}>Student</Text>
          </View>
          <View style={PacksStyle.main}>
            <Text style={PacksStyle.maintxt}>2,000 ATC-2</Text>
            <Text style={PacksStyle.maintxt}>30 gün</Text>
          </View>
          <View style={PacksStyle.footer}>
            <Text style={PacksStyle.footertxt}>20 ATC</Text>
            <Text style={PacksStyle.buybutton}>Paketi əldə et</Text>
          </View>
        </View>
    
        <View style={PacksStyle.border}>
          <View style={PacksStyle.header}>
            <Text style={PacksStyle.eggtxt}>1</Text>
            <Icon
              name="md-egg"
              size={100}
              color="white"
              style={PacksStyle.icon}
            />
            <Text style={PacksStyle.headertxt}>Student</Text>
          </View>
          <View style={PacksStyle.main}>
            <Text style={PacksStyle.maintxt}>2,000 ATC-2</Text>
            <Text style={PacksStyle.maintxt}>30 gün</Text>
          </View>
          <View style={PacksStyle.footer}>
            <Text style={PacksStyle.footertxt}>20 ATC</Text>
            <Text style={PacksStyle.buybutton}>Paketi əldə et</Text>
          </View>
        </View>
    
        <View style={PacksStyle.border}>
          <View style={PacksStyle.header}>
            <Text style={PacksStyle.eggtxt}>1</Text>
            <Icon
              name="md-egg"
              size={100}
              color="white"
              style={PacksStyle.icon}
            />
            <Text style={PacksStyle.headertxt}>Student</Text>
          </View>
          <View style={PacksStyle.main}>
            <Text style={PacksStyle.maintxt}>2,000 ATC-2</Text>
            <Text style={PacksStyle.maintxt}>30 gün</Text>
          </View>
          <View style={PacksStyle.footer}>
            <Text style={PacksStyle.footertxt}>20 ATC</Text>
            <Text style={PacksStyle.buybutton}>Paketi əldə et</Text>
          </View>
        </View>
    
      </ScrollView>
    </View>
  )
}

export default Packs

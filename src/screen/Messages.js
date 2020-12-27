import React from 'react'
import { Bodystyle, colors, dimensions } from '../style/Entrystyle'
import Icon from 'react-native-vector-icons/Ionicons'
import { ExchangeStyle } from '../style/ExchangeStyle'
import { MessagesStyle } from '../style/MessagesStyle'
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
const Messages = () => {
  return (
    <View style={Bodystyle.container}>
      <Text style={ExchangeStyle.title}>Məktublar</Text>
      <View style={MessagesStyle.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={MessagesStyle.item}>
            <Icon
              style={MessagesStyle.icon}
              name="ios-arrow-forward"
              size={20}
            />
            <Text style={MessagesStyle.txt}>Hədiyyə</Text>
            <Text style={MessagesStyle.txt}>19.04.2020</Text>
          </View>
          <View style={MessagesStyle.item}>
            <Icon
              style={MessagesStyle.icon}
              name="ios-arrow-forward"
              size={20}
            />
            <Text style={MessagesStyle.txt}>Hədiyyə</Text>
            <Text style={MessagesStyle.txt}>19.04.2020</Text>
          </View>
          <View style={MessagesStyle.item}>
            <Icon
              style={MessagesStyle.icon}
              name="ios-arrow-forward"
              size={20}
            />
            <Text style={MessagesStyle.txt}>Hədiyyə</Text>
            <Text style={MessagesStyle.txt}>19.04.2020</Text>
          </View>
          <View style={MessagesStyle.item}>
            <Icon
              style={MessagesStyle.icon}
              name="ios-arrow-forward"
              size={20}
            />
            <Text style={MessagesStyle.txt}>Hədiyyə</Text>
            <Text style={MessagesStyle.txt}>19.04.2020</Text>
          </View>
      
        </ScrollView>
      </View>
    </View>
  )
}


export default Messages

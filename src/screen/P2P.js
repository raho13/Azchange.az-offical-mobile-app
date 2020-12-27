import React from 'react'
import { Bodystyle } from '../style/Entrystyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ExchangeStyle } from '../style/ExchangeStyle'
import { P2PStyle } from '../style/P2PStyle'
import { Header } from '../component/Heaer'
import {
  Text,
  CheckBox,
  View,
  Picker,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
const P2P = () => {
  return (
    <View style={Bodystyle.container}>
      <Text style={ExchangeStyle.title}>
        Digər sistem istifadəçisinə hədiyyə göndər
      </Text>
      <View style={P2PStyle.border}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Icon
            style={P2PStyle.icon}
            name="alert-outline"
            size={40}
            color="red"
          />
          <Text style={P2PStyle.title}>
            Əməliyyat zamanı diqqətli olmanız xahiş olunur. Əks halda itirilmiş
            məbləğ geri qaytarılmayacağ
          </Text>

          <Text style={P2PStyle.inputHeader}>Valyuta seçin</Text>
          <View style={P2PStyle.pickerBox}>
            <Picker style={P2PStyle.picker}>
              <Picker.Item label="AZN(10 AZN)" value="1" />
              <Picker.Item label="ATC(20 ATC)" value="1" />
            </Picker>
          </View>
          <Text style={P2PStyle.inputHeader}>Email ünvanı daxil edin</Text>
          <TextInput
            placeholder="Email ünvanı daxil edin"
            keyboardType="email-address"
            style={P2PStyle.pickerBox}
          ></TextInput>
          <Text style={P2PStyle.inputHeader}>Mesaj</Text>
          <TextInput style={P2PStyle.textarea} multiline={true}></TextInput>
          <CheckBox />
          <Text style={P2PStyle.CheckBoxText}>info</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={P2PStyle.sendButton}>Göndər</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export default P2P

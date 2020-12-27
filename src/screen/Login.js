import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Bodystyle,dimensions } from '../style/Entrystyle'
import { Header } from '../component/Heaer'
import { Footer } from '../component/Footer'
import { Text, View, TextInput, ScrollView, StatusBar } from 'react-native'
const Body = () => {
  return (
      <View style={Bodystyle.container}>
        <Header />
        <View style={Bodystyle.inputcontainner}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Bodystyle.border}>
            <Text style={Bodystyle.Text}>Daxil olun</Text>
            <Text style={Bodystyle.Text1}>Və başlayın</Text>
            <Text style={Bodystyle.inputHeader}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={Bodystyle.input}
            ></TextInput>
            <Icon style={Bodystyle.icon} name="user" size={50} />
            <Text style={Bodystyle.inputHeader}>Şifrə</Text>
            <TextInput
              keyboardType="default"
              secureTextEntry={true}
              style={Bodystyle.input}
            ></TextInput>
            <Icon style={Bodystyle.icon} name="lock" size={50} />
            <Icon1 style={Bodystyle.icon1} name="eye" size={25} />
            <View style={Bodystyle.button}>
              <Text style={{ color: 'white' }}>Daxil ol</Text>
            </View>

            <View style={Bodystyle.TextView}>
              <Text style={Bodystyle.Text2_0}>Hesabınız yoxdur?</Text>
              <Text style={Bodystyle.Text2_1}>Qeydiyyatdan keçin</Text>
            </View>
            <View style={Bodystyle.Text3}>
              <Text style={Bodystyle.Text3_0}>Şifrəni unutmusuz?</Text>
            </View>
          </View>
          </ScrollView>
        </View>
        <Footer />
      </View>
  )
}

export default Body

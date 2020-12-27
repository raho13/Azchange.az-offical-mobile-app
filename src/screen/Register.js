import React from 'react'
import { Bodystyle, dimensions } from '../style/Entrystyle'
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
const Body = () => {
  return (
    <View style={Bodystyle.container}>
      <Header />
      <View style={Bodystyle.inputcontainner}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Bodystyle.border}>
            <Text style={Bodystyle.inputHeader}>S.A.A</Text>
            <TextInput
              placeholder="Tam adınızı daxil edin"
              keyboardType="default"
              style={Bodystyle.input}
            ></TextInput>

            <Text style={Bodystyle.inputHeader}>Email</Text>
            <TextInput
              placeholder="Email daxil edin"
              keyboardType="email-address"
              style={Bodystyle.input}
            ></TextInput>

            <Text style={Bodystyle.inputHeader}>Referral kodu</Text>
            <TextInput
              placeholder="Sizi dəvət edən referral"
              keyboardType="default"
              style={Bodystyle.input}
            ></TextInput>

            <Text style={Bodystyle.inputHeader}>Şifrə</Text>
            <TextInput
              placeholder="Şifrə daxil edin"
              keyboardType="default"
              secureTextEntry={true}
              style={Bodystyle.input}
            ></TextInput>

            <Text style={Bodystyle.inputHeader}>Şifrənin təsdiqlənməsi</Text>
            <TextInput
              placeholder="Şifrənizi təsdiqləyin"
              keyboardType="default"
              secureTextEntry={true}
              style={Bodystyle.input}
            ></TextInput>
            <CheckBox style={Bodystyle.CheckBox} />
            <Text style={Bodystyle.Text4}>info</Text>
            <View style={Bodystyle.button}>
              <Text style={{ color: 'white' }}>Qeydiyyatdan keçin</Text>
            </View>
            <View style={Bodystyle.TextView}>
              <Text style={Bodystyle.Text2_0}>Hesabınız var?</Text>
              <Text style={Bodystyle.Text2_1}>Daxil olun</Text>
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

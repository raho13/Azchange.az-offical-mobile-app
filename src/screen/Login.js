import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Bodystyle, dimensions, colors } from '../style/Entrystyle'
import { Header } from '../component/Heaer'
import { Footer } from '../component/Footer'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
const Login = ({ navigation }) => {
  return (
    <View style={Bodystyle.container}>
      <Header />
      <ScrollView style={style.inputcontainner}>
        <View style={style.border}>
          <Text style={style.Text}>Daxil olun</Text>
          <Text style={style.Text1}>Və başlayın</Text>
          <Text style={style.inputHeader}>Email</Text>
          <TextInput
            keyboardType="email-address"
            style={style.input}
          ></TextInput>
          <Icon style={style.icon} name="user" size={50} />
          <Text style={style.inputHeader}>Şifrə</Text>
          <TextInput
            keyboardType="default"
            secureTextEntry={true}
            style={style.input}
          ></TextInput>
          <Icon style={style.icon} name="lock" size={50} />
          <Icon1 style={style.icon1} name="eye" size={25} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={style.button}
            onPress={() => navigation.navigate('Navigator')}
          >
            <Text style={{ color: 'white' }}>Daxil ol</Text>
          </TouchableOpacity>

          {/* <View style={style.TextView}>
            <Text style={style.Text2_0}>Hesabınız yoxdur?</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={style.Text2_1}>Qeydiyyatdan keçin</Text>
            </TouchableOpacity>
          </View>
          <View style={style.Text3}>
            <Text style={style.Text3_0}>Şifrəni unutmusuz?</Text>
          </View> */}
        </View>
      </ScrollView>
      <Footer />
    </View>
  )
}

const style = StyleSheet.create({
  inputcontainner: {
    backgroundColor: '#ffffff',
    backgroundColor: 'yellow',
    width: '90%',
    marginTop: 10,
    borderRadius: 20,
    height:300
  },
  Text2_0: {
    color: colors.color1,
  },
  CheckBox: {
    marginLeft: '10%',
  },
  Text4: {
    color: 'white',
    top: -27,
    width: 30,
    left: 65,
    padding: 1.5,
    textAlign: 'center',
    backgroundColor: colors.color2,
    borderRadius: 7,
  },
  Text: {
    textAlign: 'center',
    marginTop: '10%',
    color: colors.color2,
    fontWeight: 'bold',
    fontSize: 22,
  },
  Text1: {
    textAlign: 'center',
    color: colors.color1,
    marginTop: 10,
    fontSize: 15,
  },
  Text2_1: {
    color: '#4D79F6',
  },
  TextView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
  inputHeader: {
    marginLeft: 40,
    marginTop: 10,
    color: colors.color2,
    marginBottom: 3,
  },
  button: {
    paddingLeft: 10,
    backgroundColor: '#4D79F6',
    borderWidth: 1,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: '#E5ECF4',
  },
  icon: {
    color: colors.color2,
    bottom: 40,
    alignSelf: 'flex-end',
    right: '10%',
  },
  icon1: {
    color: colors.color2,
    bottom: 70,
    alignSelf: 'flex-end',
    right: '25%',
  },
  input: {
    paddingLeft: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    width: '80%',
    height: 40,
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: '#E5ECF4',
  },

  Text3_0: {
    color: colors.color2,
    fontSize: 16,
  },
  Text3: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  border: {
    borderWidth: 2,
    margin: '3%',
    borderColor: '#E5ECF4',
    borderRadius: 15,
    height: '100%',
  },
})

export default Login

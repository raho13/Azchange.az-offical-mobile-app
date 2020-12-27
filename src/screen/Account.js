import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Bodystyle, colors } from '../style/Entrystyle'
import { AccountStyle } from '../style/AccountStyle'
import { ExchangeStyle } from '../style/ExchangeStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import P2P from './P2P'
import Referral from './Referral'
setting = () => {
  return (
    <View style={Bodystyle.container}>
      <Text style={ExchangeStyle.title}>setting</Text>
      <View style={AccountStyle.Content}>
        <ScrollView style={{ height: '80%' }}>
          <Text style={Bodystyle.inputHeader}>Köhnə şifrə</Text>
          <TextInput
            keyboardType="default"
            secureTextEntry={true}
            style={AccountStyle.input}
          ></TextInput>
          <Text style={Bodystyle.inputHeader}>Yeni şifrə</Text>
          <TextInput
            keyboardType="default"
            secureTextEntry={true}
            style={AccountStyle.input}
          ></TextInput>
          <Text style={Bodystyle.inputHeader}>Yeni şifrənin təkrarı</Text>
          <TextInput
            keyboardType="default"
            secureTextEntry={true}
            style={AccountStyle.input}
          ></TextInput>
          <Text style={Bodystyle.inputHeader}>İstifadəçinin tam adı</Text>
          <TextInput
            keyboardType="default"
            style={AccountStyle.input}
          ></TextInput>
          <Text style={Bodystyle.inputHeader}>Telefon</Text>
          <TextInput
            keyboardType="default"
            style={AccountStyle.input}
          ></TextInput>
          <Text style={Bodystyle.inputHeader}>Ünvan</Text>
          <TextInput
            keyboardType="default"
            style={AccountStyle.input}
          ></TextInput>

          <View style={AccountStyle.button}>
            <Text style={{ color: 'white' }}>Yadda saxla</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

sosial = () => {
  return (
    <View style={Bodystyle.container}>
      <Text style={ExchangeStyle.title}>sosial</Text>
      <View style={AccountStyle.Content}>
        <ScrollView style={{ height: '70%' }}>
          <Text style={Bodystyle.inputHeader}>Facebook</Text>
          <TextInput
            keyboardType="default"
            style={AccountStyle.input}
          ></TextInput>
          <Text style={Bodystyle.inputHeader}>Twitter</Text>
          <TextInput
            keyboardType="default"
            style={AccountStyle.input}
          ></TextInput>
          <Text style={Bodystyle.inputHeader}>Instagram</Text>
          <TextInput
            keyboardType="default"
            style={AccountStyle.input}
          ></TextInput>
          <Text style={Bodystyle.inputHeader}>Linkedin</Text>
          <TextInput
            keyboardType="default"
            style={AccountStyle.input}
          ></TextInput>
          <Text style={Bodystyle.inputHeader}>Skype</Text>
          <TextInput
            keyboardType="default"
            style={AccountStyle.input}
          ></TextInput>
          <View style={AccountStyle.button}>
            <Text style={{ color: 'white' }}>Yadda saxla</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

main = ({ navigation }) => {
  return (
    <View style={Bodystyle.container}>
      <Text style={ExchangeStyle.title}>istifadəçi hesabı</Text>
      <View style={AccountStyle.Header}>
        <Text style={AccountStyle.HeaderText}>Rahib Rzayev Şamil</Text>
        <View style={AccountStyle.HeaderContent}>
          <Text style={AccountStyle.HeaderKey}>Telefon:</Text>
          <Text style={AccountStyle.HeaderValue}>0516327017</Text>
        </View>
        <View style={AccountStyle.HeaderContent}>
          <Text style={AccountStyle.HeaderKey}>Email:</Text>
          <Text style={AccountStyle.HeaderValue}>
            rahibrzayev2000@gmail.com
          </Text>
        </View>
        <View style={AccountStyle.HeaderContent}>
          <Text style={AccountStyle.HeaderKey}>Ünvan:</Text>
          <Text style={AccountStyle.HeaderValue}>Baku</Text>
        </View>
      </View>
      <ScrollView
        style={AccountStyle.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={AccountStyle.AccountSetting}>
          <TouchableOpacity
            onPress={() => navigation.navigate('P2P')}
            activeOpacity={0.5}
            style={AccountStyle.AccountSettingCon}
          >
            <View style={AccountStyle.AccountSettingItems}>
              <Ionicons
                name="ios-send"
                size={60}
                Text
                style={AccountStyle.AccountSettingIcon}
              />
            </View>
            <Text style={AccountStyle.AccountSettingText}>P2P</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Referral')}
            activeOpacity={0.5}
            style={AccountStyle.AccountSettingCon}
          >
            <View style={AccountStyle.AccountSettingItems}>
              <AntDesign
                name="addusergroup"
                size={60}
                Text
                style={AccountStyle.AccountSettingIcon}
              />
            </View>
            <Text style={AccountStyle.AccountSettingText}>Referral</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('setting')}
            activeOpacity={0.5}
            style={AccountStyle.AccountSettingCon}
          >
            <View style={AccountStyle.AccountSettingItems}>
              <AntDesign
                name="setting"
                size={60}
                Text
                style={AccountStyle.AccountSettingIcon}
              />
            </View>
            <Text style={AccountStyle.AccountSettingText}>setting</Text>
           
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('sosial')}
            activeOpacity={0.5}
            style={AccountStyle.AccountSettingCon}
          >
            <View style={AccountStyle.AccountSettingItems}>
              <AntDesign
                name="earth"
                size={60}
                Text
                style={AccountStyle.AccountSettingIcon}
              />
            </View>
            <Text style={AccountStyle.AccountSettingText}>sosial</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const Stack = createStackNavigator()

const Account = () => {
  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="main" component={main} />
      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="P2P"
        component={P2P}
      />
      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="Referral"
        component={Referral}
      />
      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="setting"
        component={setting}
      />
      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="sosial"
        component={sosial}
      />
    </Stack.Navigator>
  
  )
}
export default Account

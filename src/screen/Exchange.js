import React, { Profiler, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ExchangeStyle } from '../style/ExchangeStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//bu deyiwecey
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native'
import { Bodystyle, colors, dimensions } from '../style/Entrystyle'
import { AccountStyle } from '../style/AccountStyle'
import P2P from './P2P'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack'
import Wallet from './Wallet'

 //import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="P2P" component={P2P} />
//       <Tab.Screen name="Wallet" component={Wallet} />
//     </Tab.Navigator>
//   );
// }

a = ({ navigation }) => {
  return (
    <View style={Bodystyle.container}>
      <View style={ExchangeStyle.navbar}>
        <Text style={ExchangeStyle.navbaritems}>Valyuta mübadiləsi</Text>
        <Text style={ExchangeStyle.navbaritems}>Taxiçə</Text>
      </View>
      <View style={ExchangeStyle.exchange}>
        <View style={ExchangeStyle.exchangeheader}>
          <Text style={ExchangeStyle.Text}>Mübadilə cütlüyü</Text>
          <Text style={ExchangeStyle.Text}> Qiymət</Text>
        </View>
        <ScrollView
          style={ExchangeStyle.scroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={ExchangeStyle.exchangecontent}>
            <Text style={ExchangeStyle.Text1}>ATC/AZN</Text>
            <Text style={ExchangeStyle.Text1}>1</Text>
          </View>
          <View style={ExchangeStyle.exchangecontent}>
            <Text style={ExchangeStyle.Text1}>ATC-2/AZN</Text>
            <Text style={ExchangeStyle.Text1}>0.001</Text>
          </View>
          <View style={ExchangeStyle.exchangecontent}>
            <Text style={ExchangeStyle.Text1}>ATC-2/AZN</Text>
            <Text style={ExchangeStyle.Text1}>0.001</Text>
          </View>
          <View style={ExchangeStyle.exchangecontent}>
            <Text style={ExchangeStyle.Text1}>ATC-2/AZN</Text>
            <Text style={ExchangeStyle.Text1}>0.001</Text>
          </View>
          <View style={ExchangeStyle.exchangecontent}>
            <Text style={ExchangeStyle.Text1}>ATC-2/AZN</Text>
            <Text style={ExchangeStyle.Text1}>0.001</Text>
          </View>
          <View style={ExchangeStyle.exchangecontent}>
            <Text style={ExchangeStyle.Text1}>ATC-2/AZN</Text>
            <Text style={ExchangeStyle.Text1}>0.001</Text>
          </View>
          <View style={ExchangeStyle.exchangecontent}>
            <Text style={ExchangeStyle.Text1}>USDT/AZN</Text>
            <Text style={ExchangeStyle.Text1}>1.71</Text>
          </View>
          <View style={ExchangeStyle.exchangecontent}>
            <Text style={ExchangeStyle.Text1}>BTC/AZN</Text>
            <Text style={ExchangeStyle.Text1}>18000</Text>
          </View>
          <View style={ExchangeStyle.exchangecontent}>
            <Text style={ExchangeStyle.Text1}>ETH/AZN</Text>
            <Text style={ExchangeStyle.Text1}>750</Text>
          </View>
          <View style={ExchangeStyle.exchangecontent}>
            <Text style={ExchangeStyle.Text1}>BTC/USDT</Text>
            <Text style={ExchangeStyle.Text1}>10300</Text>
          </View>
        </ScrollView>
      </View>
      <View style={ExchangeStyle.exchangebtns}>
        <TouchableOpacity
          onPress={() => navigation.navigate('navbuy')}
          activeOpacity={0.7}
        >
          <Text style={ExchangeStyle.exchangebtn1}>Al</Text>
          <MaterialCommunityIcons
            style={ExchangeStyle.icon1}
            name="arrow-bottom-left"
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('navsel')}
          activeOpacity={0.7}
        >
          <Text style={ExchangeStyle.exchangebtn2}>Sat</Text>
          <MaterialCommunityIcons
            style={ExchangeStyle.icon1}
            name="arrow-top-right"
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

navbuy = ({ navigation }) => {
  return (
    <View style={Bodystyle.container}>
      <View style={ExchangeStyle.exchange}>
        <View style={ExchangeStyle.exchangeheader1}>
          <Text style={ExchangeStyle.Text}>Valyuta Alış</Text>
        </View>
        <ScrollView style={ExchangeStyle.scroll1}>
          <View style={ExchangeStyle.icon}>
            <Icon name="wallet" size={20} color={colors.color2} />
            <Text style={ExchangeStyle.iconText}>0 ATC-2</Text>
          </View>
          <View style={ExchangeStyle.icon}>
            <Icon name="wallet" size={20} color={colors.color2} />
            <Text style={ExchangeStyle.iconText}>0 AZN</Text>
          </View>
          <View style={ExchangeStyle.percentBox}>
            <View style={ExchangeStyle.percentCount}>
              <Text style={ExchangeStyle.percenttext}>20%</Text>
            </View>
            <View style={ExchangeStyle.percentCount}>
              <Text style={ExchangeStyle.percenttext}>50%</Text>
            </View>
            <View style={ExchangeStyle.percentCount}>
              <Text style={ExchangeStyle.percenttext}>75%</Text>
            </View>
            <View style={ExchangeStyle.percentCount}>
              <Text style={ExchangeStyle.percenttext}>100%</Text>
            </View>
          </View>
          <View style={{ marginBottom: '40%' }}>
            <View style={ExchangeStyle.exchangeInput}>
              <Text style={ExchangeStyle.exchangeInputHeader}>Məbləğ</Text>
              <TextInput
                style={ExchangeStyle.exchangeInputmain}
                keyboardType="numeric"
              ></TextInput>
              <Text style={ExchangeStyle.exchangeInputFooter}>ATC-2</Text>
            </View>
            <View style={ExchangeStyle.exchangeInput}>
              <Text style={ExchangeStyle.exchangeInputHeader}>Qiymət</Text>
              <TextInput
                style={ExchangeStyle.exchangeInputmain}
                keyboardType="numeric"
              ></TextInput>
              <Text style={ExchangeStyle.exchangeInputFooter}>AZN</Text>
            </View>
            <View style={ExchangeStyle.exchangeInput}>
              <Text style={ExchangeStyle.exchangeInputHeader}>Ümumi</Text>
              <TextInput
                style={ExchangeStyle.exchangeInputmain}
                keyboardType="numeric"
              ></TextInput>
              <Text style={ExchangeStyle.exchangeInputFooter}>AZN</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={ExchangeStyle.exchangeButtonbuy}>Al</Text>
            </TouchableOpacity>
            <Text style={ExchangeStyle.exchangetext}>Komissiya=0 ATC-2</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
navsel = ({ navigation }) => {
  return (
    <View style={Bodystyle.container}>
      <View style={ExchangeStyle.exchange}>
        <View style={ExchangeStyle.exchangeheader1}>
          <Text style={ExchangeStyle.Text}>Valyuta Satışı</Text>
        </View>
        <ScrollView style={ExchangeStyle.scroll1}>
          <View style={ExchangeStyle.icon}>
            <Icon name="wallet" size={20} color={colors.color2} />
            <Text style={ExchangeStyle.iconText}>0 AZN</Text>
          </View>
          <View style={ExchangeStyle.icon}>
            <Icon name="wallet" size={20} color={colors.color2} />
            <Text style={ExchangeStyle.iconText}>0 ATC-2</Text>
          </View>
          <View style={ExchangeStyle.percentBox}>
            <View style={ExchangeStyle.percentCount}>
              <Text style={ExchangeStyle.percenttext}>20%</Text>
            </View>
            <View style={ExchangeStyle.percentCount}>
              <Text style={ExchangeStyle.percenttext}>50%</Text>
            </View>
            <View style={ExchangeStyle.percentCount}>
              <Text style={ExchangeStyle.percenttext}>75%</Text>
            </View>
            <View style={ExchangeStyle.percentCount}>
              <Text style={ExchangeStyle.percenttext}>100%</Text>
            </View>
          </View>
          <View style={{ marginBottom: '40%' }}>
            <View style={ExchangeStyle.exchangeInput}>
              <Text style={ExchangeStyle.exchangeInputHeader}>Məbləğ</Text>
              <TextInput
                style={ExchangeStyle.exchangeInputmain}
                keyboardType="numeric"
              ></TextInput>
              <Text style={ExchangeStyle.exchangeInputFooter}>ATC-2</Text>
            </View>
            <View style={ExchangeStyle.exchangeInput}>
              <Text style={ExchangeStyle.exchangeInputHeader}>Qiymət</Text>
              <TextInput
                style={ExchangeStyle.exchangeInputmain}
                keyboardType="numeric"
              ></TextInput>
              <Text style={ExchangeStyle.exchangeInputFooter}>AZN</Text>
            </View>
            <View style={ExchangeStyle.exchangeInput}>
              <Text style={ExchangeStyle.exchangeInputHeader}>Ümumi</Text>
              <TextInput
                style={ExchangeStyle.exchangeInputmain}
                keyboardType="numeric"
              ></TextInput>
              <Text style={ExchangeStyle.exchangeInputFooter}>AZN</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={ExchangeStyle.exchangeButtoncell}>Sat</Text>
            </TouchableOpacity>
            <Text style={ExchangeStyle.exchangetext}>Komissiya=0 ATC-2</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const Stack = createStackNavigator()

Exchange = () => {
  return (  
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="a" component={a} />
      <Stack.Screen name="navbuy" component={navbuy} />
      <Stack.Screen name="navsel" component={navsel} />
    </Stack.Navigator>
  )
}

//  <View style={ExchangeStyle.exchange}>
//     <View style={ExchangeStyle.exchangeheader1}>
//       <Text style={ExchangeStyle.Text}>Əməliyyat tarixi</Text>
//     </View>
//     <ScrollView style={ExchangeStyle.scroll}></ScrollView>
//   </View>

export default Exchange

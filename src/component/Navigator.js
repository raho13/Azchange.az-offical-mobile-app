import React from 'react'
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  Button,
  View,
  SafeAreaView,
  Text,
} from 'react-native'
import P2P from '../screen/P2P'
import Referral from '../screen/Referral'
import Messages from '../screen/Messages'
import Packs from '../screen/Packs'
import Wallet from '../screen/Wallet'
import Account from '../screen/Account'
import Exchange from '../screen/Exchange'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { Bodystyle, colors, dimensions, isdark } from '../style/Entrystyle'
import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createBottomTabNavigator()

export default function Navigator() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: colors.color2,
            labelStyle: {
              fontSize: 12,
              paddingBottom: 3,
            },
            style: {
              backgroundColor: isdark ? colors.dark : 'white',
              height: 60,
            },
          }}
        >
          <Tab.Screen
            name="Exchange"
            component={Exchange}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={36} />
              ),
            }}
          />
          <Tab.Screen
            name="Messages"
            component={Messages}
            options={{
              tabBarLabel: 'Messages',
              tabBarIcon: ({ color }) => (
                <Entypo name="mail" color={color} size={36} />
              ),
            }}
          />
          <Tab.Screen
            name="Packs"
            component={Packs}
            options={{
              tabBarLabel: 'Packs',
              tabBarIcon: ({ color }) => (
                <Feather name="package" color={color} size={32} />
              ),
            }}
          />
          <Tab.Screen
            name="Wallet"
            component={Wallet}
            options={{
              tabBarLabel: 'Wallet',
              tabBarIcon: ({ color }) => (
                <Entypo name="wallet" color={color} size={32} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={40}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  )
}

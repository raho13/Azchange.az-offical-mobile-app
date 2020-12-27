import React from 'react'
import { Bodystyle, colors } from '../style/Entrystyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ExchangeStyle } from '../style/ExchangeStyle'
import { ReferralStyle } from '../style/ReferralStyle'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Clipboard,
  Alert,
} from 'react-native'
const Copying = () => {
  Clipboard.setString('link to where')
  Alert.alert('Copied')
}
const Referral = () => {
  return (
    <View style={Bodystyle.container}>
      <Text style={ExchangeStyle.title}>Referal proqram</Text>
      <View style={ReferralStyle.linkcontainer}>
        <Text style={ReferralStyle.title}>Referal linkiniz</Text>
        <View style={ReferralStyle.linkBox}>
          <Icon
            name="link"
            size={25}
            color="#1ECBB8"
            style={ReferralStyle.icon}
          />
          <Text style={ReferralStyle.linkBoxtxt}>
            https://azchange.io/register?referral=100809808976897
          </Text>
          <TouchableOpacity
            onPress={() => Copying()}
            style={ReferralStyle.copybutton}
            activeOpacity={0.5}
          >
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
              Kopyala
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ReferralStyle.container}>
        <View style={ReferralStyle.containerHeader}>
          <Text style={ReferralStyle.containerHeadertxt}>Valyuta</Text>
          <Text style={ReferralStyle.containerHeadertxt}>Balans</Text>
          <Text style={ReferralStyle.containerHeadertxt}>
            Bloklanmış balans
          </Text>
          <Text style={ReferralStyle.containerHeadertxt}>Hesaba köçür</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={ReferralStyle.containerBody}>
            <Text style={ReferralStyle.containerBodytxt}>AZN</Text>
            <Text style={ReferralStyle.containerBodytxt}>0234235</Text>
            <Text style={ReferralStyle.containerBodytxt}>052352</Text>
            <TouchableOpacity
              style={ReferralStyle.containerBodybtn}
              activeOpacity={0.5}
            >
              <Text style={{ color: '#1ECBB8', textAlign: 'center' }}>
                Hesaba köçür
              </Text>
            </TouchableOpacity>
          </View>

          <View style={ReferralStyle.containerBody}>
            <Text style={ReferralStyle.containerBodytxt}>AZN</Text>
            <Text style={ReferralStyle.containerBodytxt}>0234235</Text>
            <Text style={ReferralStyle.containerBodytxt}>052352</Text>
            <TouchableOpacity
              style={ReferralStyle.containerBodybtn}
              activeOpacity={0.5}
            >
              <Text style={{ color: '#1ECBB8', textAlign: 'center' }}>
                Hesaba köçür
              </Text>
            </TouchableOpacity>
          </View>

          <View style={ReferralStyle.containerBody}>
            <Text style={ReferralStyle.containerBodytxt}>AZN</Text>
            <Text style={ReferralStyle.containerBodytxt}>0234235</Text>
            <Text style={ReferralStyle.containerBodytxt}>052352</Text>
            <TouchableOpacity
              style={ReferralStyle.containerBodybtn}
              activeOpacity={0.5}
            >
              <Text style={{ color: '#1ECBB8', textAlign: 'center' }}>
                Hesaba köçür
              </Text>
            </TouchableOpacity>
          </View>

          <View style={ReferralStyle.containerBody}>
            <Text style={ReferralStyle.containerBodytxt}>AZN</Text>
            <Text style={ReferralStyle.containerBodytxt}>0234235</Text>
            <Text style={ReferralStyle.containerBodytxt}>052352</Text>
            <TouchableOpacity
              style={ReferralStyle.containerBodybtn}
              activeOpacity={0.5}
            >
              <Text style={{ color: '#1ECBB8', textAlign: 'center' }}>
                Hesaba köçür
              </Text>
            </TouchableOpacity>
          </View>

          <View style={ReferralStyle.containerBody}>
            <Text style={ReferralStyle.containerBodytxt}>AZN</Text>
            <Text style={ReferralStyle.containerBodytxt}>0234235</Text>
            <Text style={ReferralStyle.containerBodytxt}>052352</Text>
            <TouchableOpacity
              style={ReferralStyle.containerBodybtn}
              activeOpacity={0.5}
            >
              <Text style={{ color: '#1ECBB8', textAlign: 'center' }}>
                Hesaba köçür
              </Text>
            </TouchableOpacity>
          </View>

          <View style={ReferralStyle.containerBody}>
            <Text style={ReferralStyle.containerBodytxt}>AZN</Text>
            <Text style={ReferralStyle.containerBodytxt}>0234235</Text>
            <Text style={ReferralStyle.containerBodytxt}>052352</Text>
            <TouchableOpacity
              style={ReferralStyle.containerBodybtn}
              activeOpacity={0.5}
            >
              <Text style={{ color: '#1ECBB8', textAlign: 'center' }}>
                Hesaba köçür
              </Text>
            </TouchableOpacity>
          </View>

          <View style={ReferralStyle.containerBody}>
            <Text style={ReferralStyle.containerBodytxt}>AZN</Text>
            <Text style={ReferralStyle.containerBodytxt}>0234235</Text>
            <Text style={ReferralStyle.containerBodytxt}>052352</Text>
            <TouchableOpacity
              style={ReferralStyle.containerBodybtn}
              activeOpacity={0.5}
            >
              <Text style={{ color: '#1ECBB8', textAlign: 'center' }}>
                Hesaba köçür
              </Text>
            </TouchableOpacity>
          </View>

          <View style={ReferralStyle.containerBody}>
            <Text style={ReferralStyle.containerBodytxt}>AZN</Text>
            <Text style={ReferralStyle.containerBodytxt}>0234235</Text>
            <Text style={ReferralStyle.containerBodytxt}>052352</Text>
            <TouchableOpacity
              style={ReferralStyle.containerBodybtn}
              activeOpacity={0.5}
            >
              <Text style={{ color: '#1ECBB8', textAlign: 'center' }}>
                Hesaba köçür
              </Text>
            </TouchableOpacity>
          </View>

          <View style={ReferralStyle.containerBody}>
            <Text style={ReferralStyle.containerBodytxt}>AZN</Text>
            <Text style={ReferralStyle.containerBodytxt}>0234235</Text>
            <Text style={ReferralStyle.containerBodytxt}>052352</Text>
            <TouchableOpacity
              style={ReferralStyle.containerBodybtn}
              activeOpacity={0.5}
            >
              <Text style={{ color: '#1ECBB8', textAlign: 'center' }}>
                Hesaba köçür
              </Text>
            </TouchableOpacity>
          </View>

          <View style={ReferralStyle.containerBody}>
            <Text style={ReferralStyle.containerBodytxt}>AZN</Text>
            <Text style={ReferralStyle.containerBodytxt}>0234235</Text>
            <Text style={ReferralStyle.containerBodytxt}>052352</Text>
            <TouchableOpacity
              style={ReferralStyle.containerBodybtn}
              activeOpacity={0.5}
            >
              <Text style={{ color: '#1ECBB8', textAlign: 'center' }}>
                Hesaba köçür
              </Text>
            </TouchableOpacity>
          </View>

          <View style={ReferralStyle.containerBody}>
            <Text style={ReferralStyle.containerBodytxt}>AZN</Text>
            <Text style={ReferralStyle.containerBodytxt}>0234235</Text>
            <Text style={ReferralStyle.containerBodytxt}>052352</Text>
            <TouchableOpacity
              style={ReferralStyle.containerBodybtn}
              activeOpacity={0.5}
            >
              <Text style={{ color: '#1ECBB8', textAlign: 'center' }}>
                Hesaba köçür
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
 
 )
}

export default Referral

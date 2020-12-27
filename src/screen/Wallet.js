import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Bodystyle } from '../style/Entrystyle'
import { colors } from '../style/Entrystyle'
import { Header } from '../component/Heaer'
import { ExchangeStyle } from '../style/ExchangeStyle'
import { WalletStyle } from '../style/WalletStyle'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
const Wallet = () => {
  return (
    <View style={Bodystyle.container}>
      <Text style={ExchangeStyle.title}>Balans</Text>

      <View style={WalletStyle.border}>
        <View style={WalletStyle.THeader}>
          <Text style={WalletStyle.THText}>Valyuta</Text>
          <Text style={WalletStyle.THText}>Balans</Text>
          <Text style={WalletStyle.THText}>Əməliyyat</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={WalletStyle.TBody}>
            <Text style={WalletStyle.TBcontent}>AZN-FVK</Text>
            <Text style={WalletStyle.TBcontent}>105887868 $</Text>
            <View style={WalletStyle.TBcontent1}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-upward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Çıxarın</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={WalletStyle.TBcontentBox}>
                  <Icon
                    style={WalletStyle.icon}
                    name="arrow-downward"
                    size={30}
                  />
                  <Text style={WalletStyle.TBcontentTxt}>Yatırın</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
       
        </ScrollView>
      </View>
    </View>
  )
}
export default Wallet

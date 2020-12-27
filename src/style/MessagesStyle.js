import {
  colors
} from '../style/Entrystyle'
import {
  StyleSheet
} from 'react-native'
import {
  dimensions,
  isdark
} from '../style/Entrystyle'

const MessagesStyle = StyleSheet.create({
  container: {
    margin: 5,
    width: dimensions.width - 10,
    borderRadius: 5,
    height: '80%'
  },
  icon: {
    alignSelf: 'center',
    marginLeft: -30,
    color: isdark ? colors.color1 : colors.color2,

  },
  txt: {
    alignSelf: 'center',
    fontSize: 16,
    color: isdark ? colors.color1 : colors.color2,

  },
  item: {
    width: '95%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.color1,
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
})
export {
  MessagesStyle
}
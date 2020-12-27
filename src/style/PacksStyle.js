import { colors, dimensions } from '../style/Entrystyle'
import { StyleSheet } from 'react-native'
const PacksStyle = StyleSheet.create({
  border: {
    width: dimensions.width * 0.95,
    borderRadius: 5,
    height: dimensions.height * 0.5,
    marginLeft: 10,
    marginRight: 10,
  },
  eggtxt: {
    position: 'absolute',
    top: '10%',
    left: '15%',
    fontWeight: 'bold',
    zIndex: 1,
    fontSize: 50,
    color: colors.color5,
  },
  headertxt: {
    position: 'absolute',
    left: 40,
    top: '70%',
    fontSize: 25,
    color: 'white',
  },
  maintxt: {
    fontSize: 20,
    paddingTop: '6%',
    paddingLeft: 40,
    color: colors.color5,
  },
  icon: {
    transform: [{ rotate: '140deg' }],
    position: 'absolute',
    left: 40,
    top: 5,
  },

  header: {
    width: '100%',
    height: dimensions.height * 0.2,
    backgroundColor: colors.color5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  scroll:{
    height: dimensions.height * 0.5,
    marginTop:40
  },
  main: {
    width: '100%',
    height: dimensions.height * 0.18,
    backgroundColor: colors.color3,
  },
  footertxt: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    color: colors.color5,
  },
  footer: {
    width: '100%',
    height: dimensions.height * 0.2,
    backgroundColor: colors.color1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  buybutton: {
    textAlign: 'center',
    height: 60,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#1ECBB8',
    fontSize: 28,
    paddingTop: 12,
    color: 'white',
  },
})
export { PacksStyle }

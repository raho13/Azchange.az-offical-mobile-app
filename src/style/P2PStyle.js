import { colors, dimensions, isdark, Bodystyle } from '../style/Entrystyle'
import { StyleSheet } from 'react-native'
const P2PStyle = StyleSheet.create({
  border: {
    width: dimensions.width - 10,
    height: '70%',
    backgroundColor: isdark ? null : 'white',
    borderRadius: 5,
    marginTop: 20,
  },
  picker: {
    height: 20,
    marginTop: 5,
    color: isdark ? 'white' : null,
  },
  textarea: {
    textAlignVertical: 'top',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.color2,
    marginLeft: 5,
    color: isdark ? 'white' : null,
    marginRight: 5,
    padding: 5,
    height: dimensions.height * 0.15,
    fontSize: 18,
    justifyContent: 'flex-start',
  },
  sendButton: {
    backgroundColor: '#0F5CFE',
    color: 'white',
    width: '97%',
    height: 45,
    textAlign: 'center',
    marginLeft: '1.5%',
    fontSize: 20,
    marginBottom: '5%',
    paddingTop: 10,
    borderRadius: 5,
  },
  pickerBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.color2,
    marginLeft: 5,
    marginRight: 5,
    height: 35,
    paddingLeft: 10,
    color: isdark ? 'white' : null,
    fontSize: 18,
  },
  inputHeader: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    fontSize: 19,
    color: colors.color2,
  },
  CheckBoxText: {
    color: 'white',
    width: 30,
    top: -27,
    left: 35,
    padding: 1.5,
    textAlign: 'center',
    backgroundColor: colors.color2,
    borderRadius: 5,
  },
  title: {
    color: 'red',
    fontSize: 17,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center',
  },
})

export { P2PStyle }

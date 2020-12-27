import {
    StyleSheet,
    StatusBar,
} from 'react-native'
import {
    Bodystyle,
    colors,
    dimensions,
    isdark
} from '../style/Entrystyle'

const WalletStyle = StyleSheet.create({
    THeader: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    TBcontentTxt: {
        fontSize: 15,
        paddingTop: 7,
        color: isdark ? colors.color1 : colors.color2,
    },
    icon: {
        marginLeft: 1,
        marginTop: 2,
        color: isdark ? colors.color1 : colors.color2,
    },
    TBcontentBox: {
        width: '95%',
        marginTop: 4,
        borderRadius: 5,
        marginBottom: 4,
        height: 37,
        borderWidth: 1,
        borderColor: isdark ? colors.color1 : colors.color2,
        flexDirection: 'row',
    },
    border: {
        width: dimensions.width - 10,
        backgroundColor: isdark ? null : 'white',
        borderRadius: 5,
        height: dimensions.height - 90
    },
    TBcontent: {
        width: '30%',
        marginLeft: '4%',
        fontSize: 15,
        color: isdark ? colors.color1 : colors.color2,
        paddingTop: 33,
    },
    TBcontent1: {
        width: '28%',
        marginLeft: '4%',
    },
    THText: {
        width: '30%',
        marginLeft: '4%',
        fontSize: 18,
        color: colors.color4,
    },
    TBody: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: colors.color4,
        marginBottom: 5,
        paddingBottom: 1,
    },
})
export {
    WalletStyle,
}
import {
    StyleSheet,
} from 'react-native'
import {
    colors,
    dimensions,
    isdark
} from '../style/Entrystyle'

const ExchangeStyle = StyleSheet.create({
    exchange: {
        width: dimensions.width - 10,
        borderRadius: 5,
        alignItems: 'center',
        height: '70%',
        backgroundColor: isdark ? null : 'white',
    },
    exchangeButtoncell: {
        width: '90%',
        marginTop: 30,
        backgroundColor: '#F58C91',
        height: 50,
        borderRadius: 5,
        color: 'white',
        fontSize: 25,
        paddingTop: 10,
        textAlign: 'center',
    },
    exchangetext: {
        textAlign: 'center',
        width: '90%',
        marginTop: 20,
        fontSize: 16,
        color: colors.color2,
    },
    exchangeButtonbuy: {
        width: '90%',
        color: 'white',
        marginTop: 30,
        backgroundColor: '#1ECBB8',
        height: 50,
        borderRadius: 5,
        fontSize: 25,
        paddingTop: 10,
        textAlign: 'center',
    },
    exchangeInput: {
        marginTop: 30,
        flexDirection: 'row',
        width: '90%',
    },
    exchangeInputmain: {
        width: '66%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        textAlign: 'center',
        borderColor: colors.color3,
        padding: 2,
        fontSize: 17,
    },
    exchangeInputFooter: {
        backgroundColor: colors.color3,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '17%',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        height: 50,
        fontSize: 14,
    },
    exchangeInputHeader: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: colors.color3,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '17%',
        height: 50,
        fontSize: 14,
    },
    percentBox: {
        width: '60%',
        height: 55,
        position: 'absolute',
        flexDirection: 'row',
        right: '10%',
        top: 25,
        borderColor: colors.color1,
    },
    percenttext: {
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 16,
        color: colors.color2,
        paddingTop: 15,
    },
    percentCount: {
        width: '23%',
        height: '100%',
        borderWidth: 1,
        marginLeft: 5,
        borderRadius: 5,
        borderColor: colors.color1,
    },
    icon1: {
        left: 30,
        top: -40,
        color: 'white'
    },
    icon: {
        flexDirection: 'row',
        marginTop: 20,
    },
    iconText: {
        paddingLeft: 10,
        fontSize: 15,
        color: colors.color2,
    },
    Text: {
        fontSize: 17,
        color: colors.background,
    },
    Text1: {
        fontSize: 18,
        color: isdark ? colors.color1 : colors.color2,
    },
    scroll: {
        width: '100%',
        marginLeft: isdark ? null : '10%',
        height: '70%'
    },
    scroll1: {
        width: '100%',
        marginLeft: '10%',
        height: '70%',
    },
    exchangecontent: {
        marginTop: 5,
        borderColor: colors.color3,
        borderRadius: 5,
        padding: 15,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: isdark ? dimensions.width - 10 : '90%',
    },
    exchangeheader: {
        backgroundColor: colors.color4,
        width: isdark ? dimensions.width - 10 : '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginTop: 10,
        padding: 5,
    },
    exchangeheader1: {
        backgroundColor: colors.color4,
        width: '90%',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 5,
        padding: 5,
    },
    title: {
        color: colors.color2,
        fontSize: 20,
        margin: 3
    },
    exchangebtn1: {
        width: dimensions.width * 0.48,
        borderRadius: 5,
        height: 50,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 25,
        paddingTop: 8,
        color: 'white',
        backgroundColor: '#1ECBB8',

    },
    exchangebtn2: {
        width: dimensions.width * 0.48,
        borderRadius: 5,
        height: 50,
        textAlign: 'center',
        fontSize: 25,
        paddingTop: 8,
        color: 'white',
        backgroundColor: '#F58C91',

    },

    exchangebtns: {
        margin: '5%',
        flexDirection: 'row',
        width: dimensions.width - 10,
        justifyContent: 'space-between'
    },
    navbar: {
        flexDirection: 'row',
        backgroundColor: colors.color2


    },
    navbaritems: {
        borderWidth: 1,
        width: '50%',
        height: 40,
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 8
    }
})
export {
    ExchangeStyle,
}
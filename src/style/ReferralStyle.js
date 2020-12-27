import {
    StyleSheet,
} from 'react-native'
import {
    colors,
    isdark
} from '../style/Entrystyle'
const ReferralStyle = StyleSheet.create({
    linkcontainer: {
        width: '95%',
        borderRadius: 5,
        height: 100,
        backgroundColor: isdark ? null : 'white',
    },
    container: {
        width: '95%',
        height: '65%',
        backgroundColor: isdark ? null : 'white',
        marginTop: 10,
        borderRadius: 5,
    },
    containerBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 1,
        borderRadius: 5,
        backgroundColor: isdark ? null : colors.color3,
        height: 55,
        borderTopWidth: isdark ? 0.5 : null,
        borderRightWidth: isdark ? 0.5 : null,
        borderLeftWidth: isdark ? 0.5 : null,
        borderColor: colors.color3
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
    },
    copybutton: {
        backgroundColor: '#0F5CFE',
        height: 50,
        width: '40%',
        paddingTop: 14,
        borderRadius: 5,
        marginTop: 8,
    },
    containerBodybtn: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#1ECBB8',
        height: '90%',
        width: '20%',
        marginTop: 3,
        marginRight: 2,
        padding: 5,
    },
    containerBodytxt: {
        paddingTop: 15,
        alignItems: 'center',
        width: '20%',
        paddingLeft: 3,
        color: '#0F5CFE'
    },
    linkBoxtxt: {
        width: 150,
        height: 70,
        color: isdark ? 'white' : null,
        marginTop: 6
    },
    linkBox: {
        width: '95%',
        height: 70,
        borderRadius: 5,
        marginLeft: '2.5%',
        borderColor: '#1ECBB8',
        borderWidth: 2,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    icon: {
        margin: 10,
        top: 10
    },
    containerHeadertxt: {
        width: '20%',
        color: '#0F5CFE',
    },
    title: {
        paddingLeft: 15,
        paddingTop: 4,
        fontSize: 15,
        color: colors.color2,
    },
})
export {
    ReferralStyle,
}
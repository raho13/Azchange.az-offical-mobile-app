import {
    StyleSheet,
    StatusBar
} from 'react-native'
import {
    colors,
    isdark
} from '../style/Entrystyle'


const AccountStyle = StyleSheet.create({
    title: {
        color: colors.color1,
        fontSize: 20,
        alignSelf: 'flex-start',
        margin: 5,
    },
    button: {
        backgroundColor: '#4D79F6',
        marginTop: 10,
        borderWidth: 1,
        width: '80%',
        marginBottom: 10,
        height: 40,
        marginLeft: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#E5ECF4',
    },
    scroll: {
        width: '100%',
        margin: 20
    },
    logout: {
        padding: 5,
        width: '80%',
        textAlign: 'center',
        backgroundColor: '#F58C91',
        height: 40,
        alignSelf: 'center',
        borderRadius: 5,
        fontSize: 20,
        marginBottom: 40,
    },
    input: {
        paddingLeft: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        width: '80%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: colors.color2,
    },
    AccountSettingItems: {
        width: 120,
        height: 120,
        backgroundColor: isdark ? colors.dark : null,
        margin: 10,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: isdark ? colors.color1 : colors.color2
    },
    AccountSettingIcon: {
        marginTop: 25,
        textAlign: 'center',
        color: isdark ? colors.color1 : colors.color2,
        alignContent: 'center'
    },
    AccountSetting: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginBottom: 100
    },
    AccountSettingText: {
        textAlign: 'center',
        fontSize: 20,
        color: isdark ? colors.color1 : colors.color2
    },
    Content: {
        margin: 5,
        alignSelf: 'center',
        width: '95%',
        borderRadius: 10,
        backgroundColor: isdark? null: colors.color1,
    },
    main: {
        width: '100%',
    },
    HeaderText: {
        fontSize: 25,
        alignSelf: 'center',
        color: isdark ? colors.color1 : null
    },
    HeaderValue: {
        fontSize: 15,
        marginRight: 10,
        color: isdark ? colors.color1 : null

    },
    HeaderKey: {
        fontSize: 20,
        marginLeft: 10,
        color: isdark ? colors.color1 : null

    },
    HeaderContent: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Header: {
        width: '100%',
        margin: 10
    },
    container: {
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.background,
        marginTop: StatusBar.currentHeight,
    },

})
export {
    AccountStyle,
}
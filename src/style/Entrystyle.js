import {
    StyleSheet,
    StatusBar,
    Dimensions
} from 'react-native'
//-----------COLORS-------------
const colors = {
    color1: '#C2C7D4',
    color2: "#6879a7",
    color3: '#E5ECF4',
    color4: '#49C7ED',
    color5: '#2E4686',
    color6: '#F1F4F9',
    background: '#181822',
    dark: '#1a1a1a',
}
const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height

}
var isdark=false

const Bodystyle = StyleSheet.create({
    //---------------Header-------------------
    Header: {
        backgroundColor: colors.background,
        height: dimensions.height * 0.1,
        width: '100%',
        alignItems: 'center'
    },
    img: {
        width: '50%',
        height: '100%'
    },
    container: {
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        backgroundColor: isdark ? colors.dark:colors.color3,
        height:dimensions.height
    },

    //--------------Footer-----------------
    footer: {
        padding: 10,
        marginTop: '10%',
        alignItems: 'center',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: colors.color1,
    },
    footertxt: {
        color: colors.color2,
    },
    //------------body---------------
    inputcontainner: {
        backgroundColor: '#ffffff',
        width: '90%',
        marginTop: '5%',
        borderRadius: 20,
        height: dimensions.height * 0.70
    },
    inputcontainner1: {
        backgroundColor: '#ffffff',
        width: '90%',
        marginTop: '5%',
        borderRadius: 20,
        height:'70%'

    },

    Text2_0: {
        color: colors.color1,
    },
    CheckBox: {
        marginLeft: '10%',
    },
    Text4: {
        color: 'white',
        top: -27,
        width: 30,
        left: 65,
        padding: 1.5,
        textAlign: 'center',
        backgroundColor: colors.color2,
        borderRadius: 7
    },
    Text: {
        textAlign: 'center',
        marginTop: '10%',
        color: colors.color2,
        fontWeight: 'bold',
        fontSize: 22,
    },
    Text1: {
        textAlign: 'center',
        color: colors.color1,
        marginTop: '3%',
        fontSize: 15,
    },
    Text2_1: {
        color: '#4D79F6',
    },
    TextView: {
        flexDirection: 'row',
        marginLeft: '1%',
        marginTop: '10%',
        marginRight: '1%',
        justifyContent: 'space-evenly',
    },
    inputHeader: {
        marginLeft: '10%',
        marginTop: '5%',
        color: colors.color2,
        marginBottom: 3,
    },
    button: {
        paddingLeft: 10,
        backgroundColor: '#4D79F6',
        marginTop: '1%',
        borderWidth: 1,
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: '#E5ECF4',
    },
    icon: {
        color: colors.color2,
        bottom: 40,
        alignSelf: 'flex-end',
        right: '10%'

    },
    icon1: {
        color: colors.color2,
        bottom: 70,
        alignSelf: 'flex-end',
        right: '25%'

    },
    input: {
        paddingLeft: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        width: '80%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: '#E5ECF4',
    },

    Text3_0: {
        color: colors.color2,
        fontSize: 16,
    },
    Text3: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '10%',
    },
    border: {
        borderWidth: 2,
        flex: 1,
        margin: '3%',
        borderColor: '#E5ECF4',
        borderRadius: 15,
        height: '70%'
    },
    border1: {
        borderWidth: 2,
        flex: 1,
        margin: '3%',
        borderColor: '#E5ECF4',
        borderRadius: 15,
        height:'100%'
    },

})
export {
    Bodystyle,
    colors,
    dimensions,
    isdark
}
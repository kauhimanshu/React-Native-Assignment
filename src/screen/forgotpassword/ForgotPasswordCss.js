import { StyleSheet } from 'react-native'
const ForgotPasswordCss = StyleSheet.create({
    container1: {
        height: '100%',
        width: '100%',
        backgroundColor:'black'
    },
    container2: {
        width: '80%',
        height: '100%',
        marginLeft: '10%',
        marginRight: '10%',
        justifyContent: 'center',


    },
    container3: {
        justifyContent: 'space-between',
        height: '21%',//33


    },

    TextInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:10,
        height:50,
        paddingLeft:20
    },
    BackToSignIntxtView: {
        alignItems: 'center'

    },
SubmitButtontxt:{
fontSize:17
},
    buttonSubmit:{
        backgroundColor:'white',
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'

    },

    BackToSignIntxt: {
        fontWeight: 'bold',
        color: 'white',
        top:4

    },

    TextRedError: {
        color: 'red',
        height:50,
        top:4
    }



})

export default ForgotPasswordCss;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    errorText: {
        paddingLeft: 30,
    },
    Box: {
        height: '100%',
        backgroundColor: 'black',
    },
    container2: {
        width: '80%',
        height: '100%',
        marginRight: '10%',
        marginLeft: '10%',
        justifyContent: 'center',
        marginBottom: 135,
    },

    container3: {
        height: '80%',
    },
    TextInput: {
        height: 60,
        margin: 5,
        borderWidth: 0.5,
        borderRadius: 13,
        padding: 20,
        borderColor: 'grey',
        backgroundColor: 'black',
        color:'white',
        


    },
    Forgottxt: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
        bottom: 5,
        margin: 10,
        //   textAlign:'center'
    },
    accountSignUpView: {
        flexDirection: 'row',
        top: 10,
    },
    accounttxt: {
        paddingLeft: '15%',
        color: 'white',
        marginTop: 40,
        margin:10
    },
    SignUptxt: {
        paddingLeft: '-3%',
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
        marginTop: 37,
    },
    regexredError: {
        color: 'red',
        height: 55,
        top: 4,
    },
    buttonSignInView: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    SignIntxt: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
    },

    FundooNotestxt: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 40,
        color: `white`,
        marginTop: 28,
        margin: 3
    },
    welcomeText: {
        // fontWeight: 'bold',
        fontSize: 26,
        marginLeft: 40,
        color: `white`,

    },
    header: {
        marginTop: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    EyeButton:{
        // position:'absolute',
        marginLeft: 280,
        top:-50

    }
});

export default styles;
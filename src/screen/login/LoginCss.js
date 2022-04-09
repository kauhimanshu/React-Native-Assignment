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
        borderRadius:5,
        paddingLeft: 17,
        margin: 9,
        
    },
    Forgottxt: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
        bottom: 10,
        margin: 10
    },
    accountSignUpView: {
        flexDirection: 'row',
        top: 10,
    },
    accounttxt: {
        paddingLeft: '15%',
        color:'white',
        marginTop:90
    },
    SignUptxt: {
        paddingLeft: '2%',
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
        marginTop:87
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
        marginTop:30
    },
    SignIntxt: {
        fontSize: 17,
        color:'black',
        fontWeight:'bold'
    },
    
    FundooNotestxt: {
        fontWeight: 'bold',
        fontSize: 30,
       marginLeft:40,
        color: `white`,
        marginTop: 50,
        margin:3
    },
    welcomeText: {
        // fontWeight: 'bold',
        fontSize: 26,
        marginLeft:40,
        color: `white`,
        
    },
});

export default styles;
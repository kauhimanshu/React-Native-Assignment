import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    errorText: {
      paddingLeft: 30,
    },
    container1: {
      height: '100%',
      width: '100%',
      backgroundColor:'black'
    },
    container2: {
      justifyContent: 'center',
      flexDirection: 'column',
      width: '80%',
      marginRight: '10%',
      marginLeft: '10%',
      height: '80%'
    },
    container3: {
      justifyContent: 'space-between',
      height: '68%'
    },
    FirstNameInput: {
      // borderWidth:1,
      // borderColor:'gray',
      // borderRadius:10,
      // height:50,
      // paddingLeft:17,
      // color:'black'
    },
    TextRedError: {
      color: 'red',
      height: 40,
      top: 4
  
    },
    LastNameInput: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 6,
      height: 50,
      paddingLeft: 17,
      color: 'black'
    },
    EmailIdInput: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      height: 50,
      paddingLeft: 17,
      color: 'black'
  
    },
    PasswordInput: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      height: 50,
      paddingLeft: 17,
      color: 'black'
  
    },
    SignUptxt: {
      fontSize: 17,
      fontWeight:'bold',
      color:'black'
    },
    buttonSignUP: {
      backgroundColor: 'white',
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    TextView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      top: 10,
      color:'blue'
    },
    LoginText: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 17, paddingLeft: 5
    },
    ImageLabelView: {
      alignItems: 'center',
      top: 30,
  
  
    },
    ImageLogo: {
      height: 70,
      width: 70,
    },
    FundooNotestxt: {
      fontWeight: 'bold',
      fontSize: 30,
      color: `white`,
      margin: 50,
      textAlign: 'center',
    },
  
  })


  export default styles;
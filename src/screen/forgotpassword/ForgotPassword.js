import { NavigationContainer } from '@react-navigation/native';
import React,{useState} from 'react';
import {View,Text,TextInput,Image,TouchableOpacity} from 'react-native';
import ForgotPasswordCss from './ForgotPasswordCss';
import { forgotPassword } from '../../api/UserServices';
import Snackbar from 'react-native-snackbar';
import { firebase } from '@react-native-firebase/firestore';


const ForgotScreen =({navigation}) => {

    const[email, setEmail] = useState('');
    
    

    // const validate = (val) => {
    //     setEmail({email: val});
    //     let rjx =
    //       /^[0-9a-zA-Z]+([._+-][0-9A-Za-z]+)*@[0-9A-Za-z]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/;
    //     let isValid = rjx.test(val);
    //     if (!isValid) SetError({error: 'invalid Email'});
    //     else SetError({error: ''});
    //   };

      
      const onSubmit = () => {
        firebase.auth().sendPasswordResetEmail(email)
        .then(function(user) {
          alert('Please check your email...')
        }).catch(function (e) {
          console.log(e)
        })
      }

     


    return(
        <View style= {ForgotPasswordCss.container1}>
            <View style={ForgotPasswordCss.container2}>
                <View style={ForgotPasswordCss.container3}>
                    <View>
                        <TextInput
                        placeholder='Email'
                        style={ForgotPasswordCss.TextInput}
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        ></TextInput>
                    </View>   
                    <TouchableOpacity
                    style={ForgotPasswordCss.buttonSubmit}
                    onPress={onSubmit}>
                        <Text style={ForgotPasswordCss.SubmitButtontxt}>Submit</Text>
                    </TouchableOpacity>
                    <View style={ForgotPasswordCss.BackToSignIntxtView}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={ForgotPasswordCss.BackToSignIntxt}>
                  Back to login
                </Text>
              </TouchableOpacity>
            </View>

                </View>

            </View>


        </View>
    )
}

export default ForgotScreen;
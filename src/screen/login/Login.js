import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    Image,
    KeyboardAvoidingView,
    ToastAndroid
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { HEIGHT } from '../../constant/Style';
import  styles  from './LoginCss'
import { useSelector, useDispatch } from 'react-redux';
import { handleSignin } from '../../redux/action/AuthAction';



const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [enableShift, setenableShift] = useState(false);
    const userid = useSelector(state => state?.auth?.user);
    const dispatch = useDispatch();



    const validate = () => {
        let regex =
            /^[0-9a-zA-Z]+([._+-][0-9A-Za-z]+)*@[0-9A-Za-z]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/;

        let valid = true;
        const temp = {};
        if (!regex.test(email)) {
            valid = false;
            temp['mail'] = 'Enter valid email';
        }
        if (!password) {
            valid = false;
            temp['pass'] = 'Enter valid password';
        }
        setErrors(temp);

        return valid;
    };

    function onSubmit() {
        console.log('hello');
        if (validate()) {
            dispatch(handleSignin(email, password))
        } else {
            // Alert.alert('errror');
        }
    };

    


    return (
        <ScrollView style={styles.Box}>
            <View >
                <StatusBar
                    backgroundColor='black'
                    hidden={false}
                    barStyle={'dark-content'} />
                <ScrollView>
                    <View>
                        <Text style={styles.FundooNotestxt}>Let's sign you in.</Text>
                        <Text style={styles.welcomeText}>Welcome back.{'\n'}You've been missed!</Text>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.container3}>
                            <TextInput
                                style={styles.TextInput}
                                label='Email Id'
                                value={email}
                                onChangeText={setEmail}
                                errorText={errors.mail}
                                underlineColor='transparent'
                                activeUnderlineColor='black'
                            />
                            <View style={styles.errorText}>
                                <Text style={{ color: 'red' }}>{errors.mail}</Text>
                            </View>
                            <TextInput
                                style={styles.TextInput}
                                label='Password'
                                underlineColor='black'
                                activeUnderlineColor='white'
                                activeOutlineColor='white'
                                value={password}
                                onChangeText={setPassword}
                                errorText={errors.pass}
                            />
                            <View style={styles.errorText}>
                                {errors.pass && <Text style={{ color: 'red' }}>{errors.pass}</Text>}
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
                                <Text style={styles.Forgottxt}>Forgot password?</Text>
                            </TouchableOpacity>

                            <View style={styles.accountSignUpView}>
                                <Text style={styles.accounttxt}>Don't have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                    <Text style={styles.SignUptxt}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={styles.buttonSignInView}
                                onPress={onSubmit}>
                                <Text style={styles.SignIntxt}>Sign In</Text>
                            </TouchableOpacity>

                           
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
};

export default Login;
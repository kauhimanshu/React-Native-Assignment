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
// import { TextInput } from 'react-native-paper';
import { HEIGHT } from '../../constant/Style';
import styles from './LoginCss'
import { useSelector, useDispatch } from 'react-redux';
import { handleSignin } from '../../redux/action/AuthAction';
import TextDesign from '../../component/TextInput';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'



const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [enableShift, setenableShift] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false );
    const [show,setShow] = useState(true);
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

                <View style={styles.header}>
                    <AntDesign name="back" size={28} color='white' onPress={() => navigation.navigate('MainScreen')} />
                </View>

                
                    <View>
                        <Text style={styles.FundooNotestxt}>Let's sign you in.</Text>
                        <Text style={styles.welcomeText}>Welcome back.{'\n'}You've been missed!</Text>
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.container3}>
                            <TextDesign
                                style={styles.TextInput}
                              placeholder='Email'
                              placeholderTextColor='gray'
                                value={email}
                                onChangeText={setEmail}
                                errorText={errors.mail}
                                // underlineColor='transparent'
                                // activeUnderlineColor='black'
                            />
                            <View style={styles.errorText}>
                                <Text style={{ color: 'red' }}>{errors.mail}</Text>
                            </View>
                            
                            <TextDesign
                                style={styles.TextInput}
                                placeholder='Password'
                                placeholderTextColor='gray'
                                secureTextEntry={show}
                                value={password}
                                onChangeText={setPassword}
                                errorText={errors.pass}
                            />
                            <TouchableOpacity style={styles.EyeButton} onPress={() => {
                                setShow(!show) 
                                setPasswordVisible(!passwordVisible)
                                }}>
                                <Feather name={passwordVisible === false ? 'eye' : 'eye-off'} size={25} color={'gray'} />
                            </TouchableOpacity>
                            
                            <View style={styles.errorText}>
                                {errors.pass && <Text style={{ color: 'red' }}>{errors.pass}</Text>}
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
                                <Text style={styles.Forgottxt}>Forgot password?</Text>
                            </TouchableOpacity>

                            <View style={styles.accountSignUpView}>
                                <Text style={styles.accounttxt}>Don't have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                    <Text style={styles.SignUptxt}>Register</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={styles.buttonSignInView}
                                onPress={() => onSubmit()}>
                                <Text style={styles.SignIntxt}>Sign In</Text>
                            </TouchableOpacity>


                        </View>
                    </View>
   
            </View>
        </ScrollView>
    );
};

export default Login;

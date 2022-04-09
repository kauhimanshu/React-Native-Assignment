import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-paper';
import { registration } from '../../api/UserServices';
import styles from './SignUpCss';


const Signup = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setisLoading] = useState(false)
    const validate = () => {
        let emailRegex =
            // eslint-disable-next-line no-control-regex
            /(?!.*\.{2})^([a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        let fnRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        let valid = true;
        const temp = {};
        if (!fnRegex.test(fullName)) {
            valid = false;
            temp['fname'] = 'Enter a Valid Fullname';
        }
        if (!emailRegex.test(email)) {
            valid = false;
            temp.mail = 'Enter a Valid Email';
        }
        if (!password || password < 8) {
            valid = false;
            temp.pass = 'Enter a Valid password';
        }
        setErrors(temp);
        return valid;
    };

    const navigationToDashboardPage = () => {
        navigation.navigate('Login');
    };

    const onSubmit = () => {
        if (validate()) {
            registration(email, password, fullName, navigationToDashboardPage);
            console.log('Hello');
        }
    };

    return (
        <View style={styles.container1}>
            <View>
                <Text style={styles.FundooNotestxt}> Registration</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <View>
                        <TextInput
                            label="First Name"
                            value={fullName}
                            onChangeText={text => {
                                setFullName(text);
                            }}
                            errorText={errors.fname}
                            style={styles.LastNameInput}
                            // selectionColor={Color.HEADING}
                            // outlineColor={Color.SECONDARY}
                            activeUnderlineColor='black'
                            underlineColor='transparent'
                        />
                        <View style={styles.errorText}>
                            <Text style={{ color: 'red' }}>{errors.fname}</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput
                            label="Email"
                            value={email}
                            onChangeText={text => {
                                setEmail(text);
                            }}
                            activeUnderlineColor='black'
                            underlineColor='transparent'
                            errorText={errors.mail}
                            style={styles.LastNameInput}
                        />
                        <View style={styles.errorText}>
                            <Text style={{ color: 'red' }}>{errors.mail}</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={text => {
                                setPassword(text);
                            }}
                            activeUnderlineColor='black'
                            underlineColor='transparent'
                            errorText={errors.pass}
                            style={styles.LastNameInput}
                        />
                        <View style={styles.errorText}>
                            {errors.pass && <Text style={{ color: 'red' }}>{errors.pass}</Text>}
                        </View>
                    </View>
                    {isLoading ?
                        (
                            <TouchableOpacity style={styles.buttonSignUP}>
                                <View
                                    style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <ActivityIndicator size={30} color='white' />
                                    <Text style={styles.SignUptxt}>Loading...</Text>
                                </View>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.buttonSignUP}
                                onPress={() => {
                                    onSubmit();
                                }}>
                                <Text style={styles.SignUptxt}>SignUp</Text>
                            </TouchableOpacity>
                        )}
                    <View style={styles.TextView}>
                        <Text style={{ color: 'white' }}>Have an account with us?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.LoginText}>Login</Text>

                        </TouchableOpacity>


                    </View>






                </View>
            </View>

        </View>
    );
};

export default Signup;
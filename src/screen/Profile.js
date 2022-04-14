import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { handleSignOut } from "../redux/action/AuthAction";
import * as ImagePicker from 'react-native-image-picker'
import storage from '@react-native-firebase/storage'
import { firebase } from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Button from "../component/Button";




const Profile = ({ navigation }) => {

    const accessToken = useSelector(state => state?.auth?.accessToken);
    const dispatch = useDispatch();
    console.log('getdataacesssss', accessToken)
    const [image, setImage] = useState(null);
    const [imageuri, setImageUri] = useState('');
    console.log('hhdhhdhhdhdhd', image);
    const theme = useSelector(state => state.theme);
    const [mode, setMode] = useState(theme.mode);
    const userObject = useSelector(state => state.auth.user)
    const [userData, setUserData] = useState(null);

    console.log('sbdkjbkjbkckc', userData);
    function onSubmit() {
        dispatch(handleSignOut())
    }


    function openGallery() {
        const options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.assets[0].uri };
                console.log(source);
                setImage(source);
            }
        });
    };

    const uploadImage = async () => {
        const db = firebase
            .firestore()
            .collection('users')
            .doc(accessToken)
            .update({
                Image: image
            })
            firebase.firestore()
            .collection('users')
            .doc(accessToken)
            .get()
            .then((documentSnapshot) => {
                if (documentSnapshot.exists) {
                    // console.log('User Data', documentSnapshot.data().Image);
                    setUserData(documentSnapshot.data().Image.uri)
                
                  
                }
                
            })
           

    };
    const getDetail = async () => {
        await firebase.firestore()
            .collection('users')
            .doc(accessToken)
            .get()
            .then((documentSnapshot) => {
                if (documentSnapshot.exists) {
                    // console.log('User Data', documentSnapshot.data().Image);
                    setUserData(documentSnapshot.data().Image.uri)
                
                  
                }
                
            })
            .catch((err) =>{
                alert(err)
            })
            
           
           
    }




    useEffect(() => {
        setMode(theme.mode)
        getDetail()
    },)


    return (
        <View style={mode == 'light' ? styles.theme_light : styles.theme_dark}>

            <View style={styles.header}>
                <AntDesign name="setting" size={28} color="gray" onPress={() => navigation.navigate('Setting')} />

            </View>
            <View style={styles.ImageContainer}>
                <Image style={styles.ProfileImage}
                    source={{ uri: userData }} />
                <Text style={mode == 'light' ? styles.email_light : styles.email_dark}>{userObject?.email}</Text>

            </View>
            <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>
                <Button title="Select Image" onPress={openGallery} />
                <View style={{ margin: 5 }}>
                    <Button color='grey' title="Upload Image" onPress={uploadImage}></Button>
                </View>

            </View>
            <View style={mode == 'light' ? styles.text_light_detail : styles.text_dark_detail}>
                <View style={styles.LogoutContainer}>
                    <TouchableOpacity style={mode == 'light' ? styles.text_light_logout : styles.text_dark_logout}
                        onPress={onSubmit}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Profile;

const styles = StyleSheet.create({
    LogoutButton: {
        backgroundColor: 'gray',
        height: 35,
        width: 200,
        marginTop: 250,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },

    LogoutContainer: {
        alignItems: 'center'
    },

    ProfileImage: {
        height: 130,
        width: 130,
        borderRadius: 90,

    },

    ImageContainer: {
        alignItems: 'center',
        // marginTop: 20
    },
    header: {
        // marginTop: -170,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 320,
        marginBottom: 30

    },
    // DetailContainer: {
    //     backgroundColor: 'white',
    //     //    marginBottom:40,
    //     height: 305,
    //     width: '90%',
    //     borderRadius: 30,
    //     marginRight: 10,
    //     marginLeft: 10,
    // },
    ProfileTextHeader: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'

    },
    theme_light: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }

    ,
    theme_dark: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_light: {
        marginBottom: -35,
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',

    }

    ,
    text_dark: {
        marginBottom: 20,
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold'
    },
    // text_light_detail: {
    //     backgroundColor: 'grey',
    //     //    marginBottom:40,
    //     height: 290,
    //     width: '90%',
    //     borderRadius: 30,
    //     marginRight: 10,
    //     marginLeft: 10,

    // },
    // text_dark_detail: {
    //     backgroundColor: 'white',
    //     //    marginBottom:40,
    //     height: 305,
    //     width: '90%',
    //     borderRadius: 30,
    //     marginRight: 10,
    //     marginLeft: 10,

    // },
    text_light_logout: {
        backgroundColor: 'orange',
        height: 35,
        width: 200,
        marginTop: 250,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'


    },
    text_dark_logout: {
        backgroundColor: 'darkgray',
        height: 35,
        width: 200,
        marginTop: 250,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'


    },
    email_light: {
        color: 'black',
        margin: 10




    },
    email_dark: {
        color: 'white',
        margin: 10
    }

})
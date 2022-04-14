import React from "react";
import {View, Text,StyleSheet,Image,StatusBar} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import SwitchSelector from "react-native-switch-selector";


const MainScreen =({navigation}) =>{

    const MainImage = require('../../asset/dark.jpeg')
    const screenOptions = [
        {label: 'Register', value: 'Register'},
        {label: 'Sign In', value: 'Sign In'}
    ];
    return(
        <View style={styles.Screen}>
            <StatusBar hidden={true}/>
            <View>
                <Image style={styles.Image}
                source={MainImage}/>

            </View>
            <View style={styles.TextContainer}>
            <Text style={styles.Text}>Enterprise team {'\n'} collaboration.</Text>
            <Text style={styles.smallText}>Bring together your files, your tools{'\n'} 
            projects and people. Including a new {'\n'} mobile and desktop application.</Text>
            </View>
            <View style={{flexDirection:'row',}}>
            <TouchableOpacity style={styles.Registerbtn} onPress={() => navigation.navigate('Signup')}>
                <Text style={{color:'black'}}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.SignInBtn} onPress={() => navigation.navigate('Login')}>
                <Text style={{color:'white'}}>Sign In</Text>
            </TouchableOpacity>
            </View>
        </View>

    )
}

export default MainScreen;

const styles = StyleSheet.create({
    Screen:{
        backgroundColor:'#18171e',
        height:'100%',
        width:'100%'
    },

    Image:{
        height:'65%',
        width:'100%',
        
    },
    Text:{
        color:'white',
        textAlign:'center',
        fontSize:30,
        margin:10,
        fontWeight:'bold',
        alignContent:'stretch'
    },
    smallText:{
        color:'gainsboro',
        textAlign:'center',
        fontSize:17

    },
    TextContainer:{
        marginTop:-120
    
    },
    Registerbtn:{
        flexDirection:'row',
        backgroundColor: 'white',
        height: 55,
        width: 170,
        marginTop: 140,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:30

    },
    SignInBtn:{
       
        backgroundColor: 'black',
        height: 55,
        width: 170,
        marginTop: 140,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

        
        

    }

})
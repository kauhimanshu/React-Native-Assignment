import React, { useEffect, useState } from "react";
import {View, Switch, StyleSheet,Text,Button} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { switchMode } from "../redux/action/ThemeAction";
import Ionicons from 'react-native-vector-icons/Ionicons'


const Setting =() =>{
   
    const theme = useSelector(state => state.theme);
    // initialize action dispatcher
    const dispatch = useDispatch();
    // define a component mode state
    const [mode, setMode] = useState(theme.mode);

    const handleThemeChange = () => { 
        dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
    }
    
    // Update the app Incase the theme mode changes
    useEffect(() => { 
        setMode(theme.mode);
    }, [theme]);

    return(
        <View style={mode == 'light' ? styles.container_light : styles.container_dark}>
        <Text style={mode == 'light' ? styles.text_light : styles.text_dark}>We are on {theme.mode} mode!</Text>
        <Button title="Switch Mode" onPress={handleThemeChange} />
        {/* <StatusBar style="auto" /> */}
    </View>
    )
};

export default Setting;

const styles = StyleSheet.create({
    container_light: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }

    ,
    container_dark: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }

    ,
    text_light: {
        marginBottom: 20,
        color: '#000'
    }

    ,
    text_dark: {
        marginBottom: 20,
        color: "#fff"
    },
    header: {
        marginTop: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    
}

);

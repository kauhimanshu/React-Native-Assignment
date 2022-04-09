import React from "react";
import {View, Text,TouchableOpacity} from 'react-native'
import {useSelector, useDispatch } from 'react-redux'
import { handleSignOut } from "../redux/action/AuthAction";

const Profile =() =>{

    const accessToken = useSelector(state => state?.auth?.accessToken);
    const dispatch = useDispatch();

    function onSubmit() {
        dispatch(handleSignOut())

    }

    return(
        <View>
        <TouchableOpacity style={{ backgroundColor: '#ffa500',
    height: 35,
    width: 230,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',}} 
    onPress={onSubmit}>
        <Text>Logout</Text>
            

        </TouchableOpacity>
        </View>
    )
}
export default Profile;
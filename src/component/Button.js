import React from "react";
import { TouchableOpacity,View,Text,StyleSheet } from "react-native";

const Button =({
    title,
    onPress,
    color,


})=>{
    return(
        <TouchableOpacity style={styles.ButtonStyle}
        onPress={onPress}>

         <Text>{title}</Text>

        </TouchableOpacity>
    )

}
export default Button;

const styles = StyleSheet.create({
    ButtonStyle:{
        flexDirection:'row',
        backgroundColor:'gray',
        height:30,
        width:150,
        alignItems:'center',
        textAlign:'center',
        justifyContent:'space-evenly',
      borderRadius:10,
      elevation:4
        
        // width:'50%'
        
        
        

    }
})
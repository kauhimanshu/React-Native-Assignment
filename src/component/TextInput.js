import React from "react";
import {TextInput} from 'react-native'


const TextDesign = ({
    value,
    label,
    placeholder,
    secureTextEntry,
    error,
    keyboardType,
    multiline,
    underlineColor,
    activeUnderlineColor,
    activeOutlineColor,
    onChangeText,
    errorText,
    style,
    placeholderTextColor,
    

}) => {
    return (
        <TextInput
            value={value}
            label={label}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            error={error}
            keyboardType={keyboardType}
            multiline={multiline}
            underlineColor={underlineColor}
            activeUnderlineColor={activeUnderlineColor}
            activeOutlineColor={activeOutlineColor}
            onChangeText={onChangeText}
            errorText={errorText}
            style={style}
            placeholderTextColor={placeholderTextColor}
            
        />
    )
}

export default TextDesign;
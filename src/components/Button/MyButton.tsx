import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { buttonStyles } from "./styles";

import Entypo from 'react-native-vector-icons/Entypo'
import Colors from "../../assets/colors";

type ButtonTypes = {
    onPress(): void,
    buttonText: string,
    bgColor: string,
    textColor?: string,
    borderColor?: string,
    icon?: string,
    width?: string,
    paddingVertical?: number
}

const MyButton = ({onPress, buttonText, bgColor, textColor, borderColor, icon, width, paddingVertical}: ButtonTypes) => {
    return(
        <TouchableOpacity 
            style={{
                ...buttonStyles.button,
                width: width || '100%',
                justifyContent: icon ? 'flex-start' : 'center',
                paddingLeft: icon ? 15 : 0,
                paddingVertical: paddingVertical || 15,
                backgroundColor: bgColor,
                borderColor: borderColor || Colors.WHITE
            }}
            onPress={() => onPress()} >
            {icon &&  <Entypo 
                            name={icon} 
                            size={20} 
                            color={Colors.WHITE} />}
            <Text 
                style={{
                    ...buttonStyles.buttonText,
                    paddingLeft: icon && 15,
                    color: textColor || Colors.WHITE
                }}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default MyButton
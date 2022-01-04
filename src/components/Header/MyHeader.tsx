import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { headerStyles } from "./styles";

import AntDesign from 'react-native-vector-icons/Ionicons'
import Colors from "../../assets/colors";

type HeaderTypes = {
    title: string,
    backButton?: boolean,
    navigation?: void
}

const MyHeader = ({title, backButton, navigation}: HeaderTypes) => {
    return(
        <View style={headerStyles.container}>
            {backButton && 
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={headerStyles.closeButton}>
                <AntDesign name={'arrow-back'} size={25} color={Colors.WHITE} />
            </TouchableOpacity>
            }
            <Text style={headerStyles.title}>{title}</Text>
        </View>
    )
}

export default MyHeader
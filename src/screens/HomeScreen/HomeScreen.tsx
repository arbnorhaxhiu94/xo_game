import React from "react";
import { View, Text, Alert } from 'react-native'

import MyButton from "../../components/Button";
import { homeStyles } from "./styles";
import Colors from "../../assets/colors";

const HomeScreen = (props) => {
    return (
        <View style={homeStyles.screen}>
            <View style={homeStyles.chooseGameContainer}>
                {/* <Text>Select the type</Text> */}
                <MyButton 
                    onPress={() => props.navigation.navigate('SinglePlayer')}
                    buttonText={'Single player'}
                    bgColor={Colors.LIGHTRED}
                    borderColor={Colors.BLACK_3}
                    icon={'user'} />
                <View style={{height: 10}} />
                <MyButton 
                    onPress={() => props.navigation.navigate('MultiPlayer')}
                    buttonText={'Multi player'}
                    borderColor={Colors.BLACK_3}
                    bgColor={Colors.BLUE}
                    icon={'users'} />
            </View>
        </View>
    )
}

export default HomeScreen
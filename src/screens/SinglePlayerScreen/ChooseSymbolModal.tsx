import React from "react";
import { Modal, View, Text } from 'react-native'
import Colors from "../../assets/colors";
import { chooseSymbolStyles } from "./modalStyles";

import MyButton from '../../components/Button'

type ChooseSymbolTypes = {
    choose(): void
}

const ChooseSymbolModal = ({choose}: ChooseSymbolTypes) => {
    return (
        <Modal 
            style={{flex: 1}}
            visible={true}
            animationType={'fade'}
            transparent={true}
            onRequestClose={() => {return}} >
            <View style={chooseSymbolStyles.screen}>
                <View style={chooseSymbolStyles.msgContainer}>
                    <Text style={chooseSymbolStyles.title}>Choose your sign:</Text>
                    <View style={{height: 20}} />
                    <View style={chooseSymbolStyles.buttonsContainer}>
                        <MyButton 
                            onPress={() => choose('x')}
                            bgColor={Colors.LIGHTRED}
                            borderColor={Colors.LIGHTRED}
                            buttonText={'X'}
                            width={'30%'}
                            paddingVertical={20} />
                        <View style={{width: 20}} />
                        <MyButton 
                            onPress={() => choose('o')}
                            bgColor={Colors.BLUE}
                            borderColor={Colors.BLUE}
                            buttonText={'O'}
                            width={'30%'}
                            paddingVertical={20} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ChooseSymbolModal;
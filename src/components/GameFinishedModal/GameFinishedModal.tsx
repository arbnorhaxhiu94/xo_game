import React from "react";
import { Modal, View, Text } from 'react-native'
import Colors from "../../assets/colors";
import { gameFinishedModalStyles } from "./styles";

import MyButton from '../Button'

type GameFinishedModalTypes = {
    title: string,
    winner?: string,
    action(): void
}

const GameFinishedModal = ({title, winner, action}: GameFinishedModalTypes) => {
    return (
        <Modal 
            style={{flex: 1}}
            visible={true}
            animationType={'fade'}
            transparent={true}
            onRequestClose={() => {return}} >
            <View style={gameFinishedModalStyles.screen}>
                <View style={gameFinishedModalStyles.msgContainer}>
                    {winner == 'x' || winner == 'o' ? null :
                    <Text style={gameFinishedModalStyles.title}>{title}</Text>}
                    {winner == 'Tie' ? 
                    <Text style={gameFinishedModalStyles.subtitle}>There is no winner</Text>
                    : winner == 'o' || winner == 'x' ?
                    <Text style={{
                        ...gameFinishedModalStyles.title,
                        backgroundColor: winner == 'o' ? Colors.BLUE : Colors.LIGHTRED
                        }}>Winner: {winner == 'o' ? 'O' : 'X'}</Text> :null}
                    <View style={{height: 20}} />
                    <View style={gameFinishedModalStyles.buttonsContainer}>
                        <MyButton 
                            onPress={() => action('Leave')}
                            bgColor={Colors.LIGHTRED}
                            borderColor={Colors.LIGHTRED}
                            buttonText={'LEAVE'}
                            width={'45%'} />
                        <MyButton 
                            onPress={() => action('Play')}
                            bgColor={Colors.BLUE}
                            borderColor={Colors.BLUE}
                            buttonText={'KEEP PLAYING'}
                            width={'45%'} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GameFinishedModal;
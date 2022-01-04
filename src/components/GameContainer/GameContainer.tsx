import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from 'react-native'
import BoxContainer from "./BoxContainer";
import { gameContainerStyles } from "./styles";

type GameTypes = {
    selected(): void,
    fields: Array,
    disabled?: boolean
}

const GameContainer = ({selected, fields, disabled}: GameTypes) => {

    return (
        <View style={gameContainerStyles.gameContainer}>
            <View style={gameContainerStyles.xo_row}>
                <BoxContainer 
                    disabled={disabled}
                    onPress={selected}
                    selected={fields[0][0]}
                    box_num={[0,0]}
                    borderRight borderBottom />
                <BoxContainer 
                    disabled={disabled}
                    onPress={selected}
                    selected={fields[0][1]}
                    box_num={[0,1]}
                    borderRight
                    borderLeft borderBottom />
                <BoxContainer 
                    disabled={disabled}
                    onPress={selected}
                    selected={fields[0][2]}
                    box_num={[0,2]}
                    borderLeft borderBottom />
            </View>
            <View style={gameContainerStyles.xo_row}>
                <BoxContainer 
                    disabled={disabled}
                    onPress={selected}
                    selected={fields[1][0]}
                    box_num={[1,0]}
                    borderTop borderRight borderBottom />
                <BoxContainer 
                    disabled={disabled}
                    onPress={selected}
                    selected={fields[1][1]}
                    box_num={[1,1]}
                    borderTop borderRight borderBottom borderLeft />
                <BoxContainer 
                    disabled={disabled}
                    onPress={selected}
                    selected={fields[1][2]}
                    box_num={[1,2]} 
                    borderTop borderBottom borderLeft />
            </View>
            <View style={gameContainerStyles.xo_row}>
                <BoxContainer 
                    disabled={disabled}
                    onPress={selected}
                    selected={fields[2][0]}
                    box_num={[2,0]} 
                    borderTop borderRight />
                <BoxContainer 
                    disabled={disabled}
                    onPress={selected}
                    selected={fields[2][1]}
                    box_num={[2,1]} 
                    borderTop borderRight borderLeft />
                <BoxContainer 
                    disabled={disabled}
                    onPress={selected}
                    selected={fields[2][2]}
                    box_num={[2,2]} 
                    borderTop borderLeft />
            </View>
        </View>
    )
}

export default GameContainer
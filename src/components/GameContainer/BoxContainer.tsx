import React from "react";
import { View, TouchableOpacity } from 'react-native'
import { gameContainerStyles } from "./styles";

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Colors from "../../assets/colors";

type BoxTypes = {
    onPress(): void,
    selected: string,
    box_num?: Array,
    disabled: boolean,
    borderTop: boolean,
    borderRight: boolean,
    borderBottom: boolean,
    borderLeft: boolean
}

const BoxContainer = ({onPress, selected, box_num, disabled, borderTop, borderRight, borderBottom, borderLeft}: BoxTypes) => {
    return (
        <TouchableOpacity 
            activeOpacity={1}
            disabled={disabled}
            onPress={() => onPress(box_num)}
            style={{
                ...gameContainerStyles.xo_box,
                borderTopWidth: borderTop ? 1 : 0,
                borderRightWidth: borderRight ? 1 : 0,
                borderBottomWidth: borderBottom ? 1 : 0,
                borderLeftWidth: borderLeft ? 1 : 0
                }}>
            {selected == 'x' ? 
            <FontAwesome name={'remove'} size={60} color={Colors.LIGHTRED} />
            : selected == 'o' ? 
            <FontAwesome name={'circle-thin'} size={60} color={Colors.BLUE} />
            : null}
        </TouchableOpacity>
    )
}

export default BoxContainer
import { StyleSheet } from "react-native";

import Colors from '../../assets/colors'

export const homeStyles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BLACK_3
    },
    chooseGameContainer: {
        width: '80%',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: Colors.BLACK_3,
        borderRadius: 20,
        // elevation: 10
    }
})
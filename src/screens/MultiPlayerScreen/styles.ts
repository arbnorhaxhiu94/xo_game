import { StyleSheet } from "react-native";
import Colors from "../../assets/colors";

export const multiplayerStyles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: Colors.BLACK_3
    },
    playerTurnText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
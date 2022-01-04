import { StyleSheet } from "react-native";
import Colors from "../../assets/colors";

export const singlePlayerStyles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: Colors.BLACK_3
    },
    playerTurnText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    refreshButton: {
        zIndex: 2,
        position: 'absolute',
        right: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.BLUE
    }
})

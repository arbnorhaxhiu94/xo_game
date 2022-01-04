import { StyleSheet } from "react-native";
import Colors from "../../assets/colors";

export const headerStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BLACK_3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.WHITE
    },
    closeButton: {
        position: 'absolute',
        left: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
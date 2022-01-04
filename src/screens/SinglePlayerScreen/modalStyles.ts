import { StyleSheet } from "react-native";
import Colors from "../../assets/colors";

export const chooseSymbolStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.25)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    msgContainer: {
        width: '80%',
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BLACK_5,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 10
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: Colors.BLUE,
        color: Colors.WHITE
    }
})
import { StyleSheet } from "react-native";
import Colors from "../../assets/colors";

export const gameFinishedModalStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.25)',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    msgContainer: {
        position: 'absolute',
        width: '90%',
        alignSelf: 'center',
        bottom: 50,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BLACK_5,
        borderRadius: 20,
        overflow: 'hidden'
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        width: '100%',
        backgroundColor: Colors.BLUE,
        paddingVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.WHITE,
        marginBottom: 10
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.WHITE
    }
})
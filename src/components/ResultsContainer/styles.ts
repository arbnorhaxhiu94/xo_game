import { StyleSheet } from "react-native";
import Colors from "../../assets/colors";

export const resultContainerStyles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: Colors.BLACK_3,
        overflow: 'hidden'
    },
    subContainer: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: Colors.BLACK_5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.WHITE
    },
    points: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.WHITE
    }
})
import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../assets/colors";

export const gameContainerStyles = StyleSheet.create({
    gameContainer: {
        alignSelf: 'center',
        width: Dimensions.get('screen').width*9/10,
        height: Dimensions.get('screen').width*9/10,
        backgroundColor: Colors.WHITE,
        // borderRadius: 20,
        overflow: 'hidden',
        // elevation: 10
    },
    xo_row: {
        flex: 1,
        flexDirection: 'row'
    },
    xo_box: {
        flex: 1,
        backgroundColor: Colors.BLACK_3,
        borderWidth: 1,
        borderColor: Colors.BLACK_5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
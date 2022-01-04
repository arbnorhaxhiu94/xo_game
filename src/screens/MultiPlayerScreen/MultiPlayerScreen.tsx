import React, { useEffect, useState } from "react";
import { View, Alert, Text, ScrollView, BackHandler } from 'react-native'

import { multiplayerStyles } from "./styles";
import Colors from "../../assets/colors";
import GameContainer from "../../components/GameContainer";
import GameFinishedModal from "../../components/GameFinishedModal";
import ResultsContainer from "../../components/ResultsContainer";

const MultiPlayerScreen = (props) => {

    let fields_1: any = [[null,null,null],
                    [null,null,null],
                    [null,null,null]]

    const [player, setPlayer]: string = useState('x')
    const [fields, setFields]: Array = useState(fields_1)
    const [finished, setFinished]: boolean = useState(false)
    const [winner, setWinner]: string = useState('Tie')
    const [x_wins, setXWins]: number = useState(0)
    const [o_wins, setOWins]: number = useState(0)
    const [ties, setTies]: number = useState(0)
    const [requestToQuit, setRequestToQuit] = useState(false)

    const is_finished: boolean = (fields: Array) => {
        // horizontal
        if (fields[0][0] == fields[0][1] && fields[0][0] == fields[0][2] && fields[0][0] !== null) {
            return true
        } else if (fields[1][0] == fields[1][1] && fields[1][0] == fields[1][2] && fields[1][0] !== null) {
            return true
        } else if (fields[2][0] == fields[2][1] && fields[2][0] == fields[2][2] && fields[2][0] !== null) {
            return true
        } 
        // vertical
        else if (fields[0][0] == fields[1][0] && fields[0][0] == fields[2][0] && fields[0][0] !== null) {
            return true
        } else if (fields[0][1] == fields[1][1] && fields[0][1] == fields[2][1] && fields[0][1] !== null) {
            return true
        } else if (fields[0][2] == fields[1][2] && fields[0][2] == fields[2][2] && fields[0][2] !== null) {
            return true
        } 
        // diagonal
        else if (fields[0][0] == fields[1][1] && fields[0][0] == fields[2][2] && fields[0][0] !== null) {
            return true
        } else if (fields[0][2] == fields[1][1] && fields[0][2] == fields[2][0] && fields[0][2] !== null) {
            return true
        } else if (!fields[0].includes(null) && !fields[1].includes(null) && !fields[2].includes(null)) {
            setFinished(true)
            setTies(ties + 1)
            return false
        }
    }

    const changePlayer: void = () => {
        if (player == 'x') {
            setPlayer('o')
        } else {
            setPlayer('x')
        }
    }

    const selected: void = (num) => {
        let tmp_fields = fields
        if (tmp_fields[num[0]][num[1]] !== null) {
            console.log('Already selected!')
            return
        }
        tmp_fields[num[0]][num[1]] = player

        setFields(tmp_fields)
        changePlayer()

        if (is_finished(tmp_fields)) {
            setWinner(`${tmp_fields[num[0]][num[1]]}`)
            setFinished(true)

            if (tmp_fields[num[0]][num[1]] == 'x') {
                setXWins(x_wins + 1)
            } else if(tmp_fields[num[0]][num[1]] == 'o') {
                setOWins(o_wins + 1)
            }

            return
        }
    }

    const action = (action) => {
        if (action == 'Leave') {
            props.navigation.goBack()
        } else {
            setFields(fields_1)
            setFinished(false)
            setWinner('Tie')
        }
    }

    const action1 = (action) => {
        if (action == 'Leave') {
            props.navigation.goBack()
        } else {
            setRequestToQuit(false)
        }
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', function() {
            setRequestToQuit(true)
            return true
        })

        return () => backHandler.remove()
    }, [])

    return (
        <ScrollView style={multiplayerStyles.screen}>
             <Text 
                style={{
                    ...multiplayerStyles.playerTurnText,
                    color: player == 'x' ? Colors.LIGHTRED : Colors.BLUE}}>
                Player turn: {player == 'x' ? 'X' : 'O'}
            </Text>
            <View style={{height: 20}} />
            <GameContainer 
                selected={selected}
                fields={fields} />
            <View style={{height: 20}} />
            <ResultsContainer 
                x_wins={x_wins}
                o_wins={o_wins}
                ties={ties} />
            {finished &&
            <GameFinishedModal 
                winner={winner}
                action={action} />}
            {requestToQuit && 
            <GameFinishedModal 
                title={'Do you want to leave?'}
                action={action1} />}
        </ScrollView>
    )
}

export default MultiPlayerScreen
import React, { useEffect, useState } from "react";
import { View, Alert, Text, ScrollView, TouchableOpacity, BackHandler } from 'react-native'

import { singlePlayerStyles } from "./styles";
import GameContainer from "../../components/GameContainer";
import GameFinishedModal from "../../components/GameFinishedModal";
import ResultsContainer from "../../components/ResultsContainer";
import { calculateChancesToWin } from "./calculateChancesToWin";
import ChooseSymbolModal from "./ChooseSymbolModal";
import Colors from "../../assets/colors";

const SinglePlayerScreen = (props) => {

    let fields_1: string = [[null,null,null],
                    [null,null,null],
                    [null,null,null]]

    const [chooseSymbol, setChooseSymbol] = useState<boolean>(false)
    const [player, setPlayer] = useState<string>(null)
    const [computer, setComputer] = useState<string>(null)
    const [turn, setTurn] = useState<string>(null)
    const [fields, setFields] = useState<Array>(fields_1)
    const [finished, setFinished] = useState<boolean>(false)
    const [winner, setWinner] = useState<string>('Tie')
    const [x_wins, setXWins] = useState<number>(0)
    const [o_wins, setOWins] = useState<number>(0)
    const [ties, setTies] = useState<number>(0)
    const [disabled, setDisabled] = useState<boolean>(true)
    const [startNewGame, setStartNewGame] = useState<boolean>(false)
    const [requestToQuit, setRequestToQuit] = useState<boolean>(false)

    const is_finished_with_a_winner: boolean = (fields: Array) => {
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
        } else {
            return false
        }
    }

    const is_finished_with_a_tie: boolean = (fields: Array) => {
        if (!fields[0].includes(null) && !fields[1].includes(null) && !fields[2].includes(null)) {
            console.log('GAME FINISHED WITH A TIE')
            return true
        } else {
            return false
        }
    }

    const computerPlay = () => {
        console.log('Computer playing')
        computerDecide(calculateChancesToWin(fields, computer, player))
    }

    const computerDecide = (num: Array) => {
        console.log('Computer decided: '+ num)
        let tmp_fields = fields
        if (tmp_fields[num[0]][num[1]] !== null) {
            console.log('Already selected!')
            return
        }
        tmp_fields[num[0]][num[1]] = computer

        setFields(tmp_fields)
        setTurn(player)
        setTimeout(() => {
            setDisabled(false)
        }, 500);

        if (is_finished_with_a_winner(tmp_fields)) {
            console.log('GAME FINISHED')
            setWinner(`${tmp_fields[num[0]][num[1]]}`)
            setFinished(true)

            if (tmp_fields[num[0]][num[1]] == 'x') {
                setXWins(x_wins + 1)
            } else if(tmp_fields[num[0]][num[1]] == 'o') {
                setOWins(o_wins + 1)
            }
            return
        } else if(is_finished_with_a_tie(tmp_fields)) {
            setFinished(true)
            setTies(ties + 1)
        }
    }

    const selected: void = (num: Array) => {
        let tmp_fields = fields
        if (tmp_fields[num[0]][num[1]] !== null) {
            console.log('Already selected!')
            return
        }
        tmp_fields[num[0]][num[1]] = player

        setFields(tmp_fields)
        setTurn(computer)

        if (is_finished_with_a_winner(tmp_fields)) {
            setWinner(`${tmp_fields[num[0]][num[1]]}`)
            setFinished(true)

            if (tmp_fields[num[0]][num[1]] == 'x') {
                setXWins(x_wins + 1)
            } else if(tmp_fields[num[0]][num[1]] == 'o') {
                setOWins(o_wins + 1)
            }

            return
        } else if(is_finished_with_a_tie(tmp_fields)) {
            setFinished(true)
            setTies(ties + 1)
        } else  {
            console.log('WHY IN THE FUCK ?')
            setDisabled(true)
            setTimeout(() => {
                computerPlay()
            }, 1000);
        }
    }

    const action = (action) => {
        if (action == 'Leave') {
            props.navigation.goBack()
        } else {
            // Alert.alert(turn)
            setFields(fields_1)
            setFinished(false)
            setWinner('Tie')
            setStartNewGame(true)
            setDisabled(true)
        }
    }

    const refreshGame = () => {
        console.log('TURN: '+ turn)
        if (turn == computer) {
            setDisabled(true)
            setStartNewGame(false)
            setTimeout(() => {
                computerPlay()
            }, 1000);
        } else {
            setDisabled(false)
            setStartNewGame(false)
        }
    }

    const choose: void = (symbol) => {
        setPlayer(symbol)
        setTurn(symbol)
        setDisabled(false)
        if (symbol == 'x') {
            setComputer('o')
        } else {
            setComputer('x')
        }
        setChooseSymbol(false)
    }

    const action1 = (action) => {
        if (action == 'Leave') {
            props.navigation.goBack()
        } else {
            setRequestToQuit(false)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setChooseSymbol(true)
        }, 100);

        const backHandler = BackHandler.addEventListener('hardwareBackPress', function() {
            setRequestToQuit(true)
            return true
        })

        return () => backHandler.remove()
    }, [])

    return (
        <ScrollView style={singlePlayerStyles.screen}>
            <Text 
                style={{
                    ...singlePlayerStyles.playerTurnText,
                    color: turn == 'x' ? Colors.LIGHTRED : Colors.BLUE}}>
                Player turn: {turn == 'x' ? 'X' : 'O'}
            </Text>
            <View style={{height: 20}} />
            {startNewGame && 
            <TouchableOpacity 
                onPress={refreshGame}
                style={singlePlayerStyles.refreshButton} >
                <Text style={{color: '#fff'}}>Start</Text>
            </TouchableOpacity>}
            <GameContainer 
                disabled={disabled}
                selected={selected}
                fields={fields} />
            <View style={{height: 30}} />
            <ResultsContainer 
                x_wins={x_wins}
                o_wins={o_wins}
                ties={ties} />
            {finished &&
            <GameFinishedModal 
                title={'Game is finished'}
                winner={winner}
                action={action} />}
            {chooseSymbol && 
            <ChooseSymbolModal 
                choose={choose} />}
            {requestToQuit && 
            <GameFinishedModal 
                title={'Do you want to leave?'}
                action={action1} />}
        </ScrollView>
    )
}

export default SinglePlayerScreen
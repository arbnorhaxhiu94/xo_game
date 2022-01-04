import React, { FC } from "react";
import { View, Text } from 'react-native'
import { resultContainerStyles } from "./styles";

type ResultsContainerTypes = {
    x_wins: number,
    o_wins: number,
    ties: number
}

const ResultsContainer: FC = ({x_wins, o_wins, ties}: ResultsContainerTypes) => {
    return (
        <View style={resultContainerStyles.container}>
            <View style={resultContainerStyles.subContainer}>
                <Text style={resultContainerStyles.label}>Player X</Text>
                <Text style={resultContainerStyles.points}>{x_wins}</Text>
            </View>
            <View style={resultContainerStyles.subContainer}>
                <Text style={resultContainerStyles.label}>Ties</Text>
                <Text style={resultContainerStyles.points}>{ties}</Text>
            </View>
            <View style={resultContainerStyles.subContainer}>
                <Text style={resultContainerStyles.label}>Player O</Text>
                <Text style={resultContainerStyles.points}>{o_wins}</Text>
            </View>            
        </View>
    )
}

export default ResultsContainer;
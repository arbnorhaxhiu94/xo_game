export const calculateChancesToWin: Array = (fields: Array, computer: string, player: string) => {
    let first_row: Array = fields[0]
    let second_row: Array = fields[1]
    let third_row: Array = fields[2]

    console.log(fields)
    if (winTheGame(first_row, second_row, third_row, computer)) {
        return winTheGame(first_row, second_row, third_row, computer) // win the game
    } else if (winTheGame(first_row, second_row, third_row, player)) {
        return winTheGame(first_row, second_row, third_row, player) // deny user to win the game
    } 
    // else if (tryToWinTheGame(first_row, second_row, third_row, computer, player)) {
    //     return tryToWinTheGame(first_row, second_row, third_row, computer, player) // try to win by making 2 in a row
    // } else if(firstMove(first_row, second_row, third_row)) {
    //     console.log('FIRST MOVE = '+firstMove(first_row, second_row, third_row))
    //     return firstMove(first_row, second_row, third_row)
    // } else {
    //     return fillAnEmptyBox(first_row, second_row, third_row)
    // }
    else {
        return tryToWinTheGame(first_row, second_row, third_row, computer, player)
    }
}

const winTheGame: Array = (first_row: Array, second_row: Array, third_row: Array, computer: string) => {
    //first row
    if (first_row[0] == computer && first_row[0] == first_row[1] && first_row[2] == null) {
        return [0,2]
    } else if (first_row[0] == computer && first_row[0] == first_row[2] && first_row[1] == null) {
        return [0,1]
    } else if (first_row[1] == computer && first_row[1] == first_row[2] && first_row[0] == null) {
        return [0,0]
    } 
    //second row
    else if (second_row[0] == computer && second_row[0] == second_row[1] && second_row[2] == null) {
        return [1,2]
    } else if (second_row[0] == computer && second_row[0] == second_row[2] && second_row[1] == null) {
        return [1,1]
    } else if (second_row[1] == computer && second_row[1] == second_row[2] && second_row[0] == null) {
        return [1,0]
    }
    //third row
    else if (third_row[0] == computer && third_row[0] == third_row[1] && third_row[2] == null) {
        return [2,2]
    } else if (third_row[0] == computer && third_row[0] == third_row[2] && third_row[1] == null) {
        return [2,1]
    } else if (third_row[1] == computer && third_row[1] == third_row[2] && third_row[0] == null) {
        return [2,0]
    } 
    //column 1
    else if (first_row[0] == computer && first_row[0] == second_row[0] && third_row[0] == null) {
        return [2,0]
    } else if (first_row[0] == computer && first_row[0] == third_row[0] && second_row[0] == null) {
        return [1,0]
    } else if (third_row[0] == computer && third_row[0] == second_row[0] && first_row[0] == null) {
        return [0,0]
    }
    //column 2
    else if (first_row[1] == computer && first_row[1] == second_row[1] && third_row[1] == null) {
        return [2,1]
    } else if (first_row[1] == computer && first_row[1] == third_row[1] && second_row[1] == null) {
        return [1,1]
    } else if (third_row[1] == computer && third_row[1] == second_row[1] && first_row[1] == null) {
        return [0,1]
    }
    //column 3
    else if (first_row[2] == computer && first_row[2] == second_row[2] && third_row[2] == null) {
        return [2,2]
    } else if (first_row[2] == computer && first_row[2] == third_row[2] && second_row[2] == null) {
        return [1,2]
    } else if (third_row[2] == computer && third_row[2] == second_row[2] && first_row[2] == null) {
        return [0,2]
    }
    // diagonal 1
    else if (first_row[0] == computer && first_row[0] == second_row[1] && third_row[2] == null ) {
        return [2,2]
    } else if (first_row[0] == computer && first_row[0] == third_row[2] && second_row[1] == null ) {
        return [1,1]
    } else if (second_row[1] == computer && second_row[1] == third_row[2] && first_row[0] == null ) {
        return [0,0]
    } 
    //diagonal 2
    else if (first_row[2] == computer && first_row[2] == second_row[1] && third_row[0] == null ) {
        return [2,0]
    } else if (first_row[2] == computer && first_row[2] == third_row[0] && second_row[1] == null ) {
        return [1,1]
    } else if (third_row[0] == computer && third_row[0] == second_row[1] && first_row[2] == null ) {
        return [0,2]
    } 
}

const tryToWinTheGame: Array = (first_row: Array, second_row: Array, third_row: Array, computer: string, player: string) => {

    // deny user win on first moves
    if (first_row.filter(x => x == player).length == 1 && third_row.filter(x => x == player).length == 1) {
        if (second_row[0] == null) {
            return [1,0]
        } else if (second_row[2] == null) {
            return [2,0]
        } 
    }
    // diagonal
    if (second_row[1] == computer) {
        if (first_row[0] == null) {
            return [0,0]
        } else if (first_row[2] == null) {
            return [0,2]
        } else if (third_row[0] == null) {
            return [2,0]
        } else if (third_row[2] == null) {
            return [2,2]
        }
    }
    // horizontal
    if (first_row.includes(computer) && !first_row.includes(player)) {
        if (first_row[0] == null) {
            return [0, 0]
        } else {
            return [0,2]
        }
    } else if (second_row.includes(computer) && !second_row.includes(player)) {
        if (second_row[0] == null) {
            return [1, 0]
        } else {
            return [1,2]
        }
    } else if (third_row.includes(computer) && !third_row.includes(player)) {
        if (third_row[0] == null) {
            return [2, 0]
        } else {
            return [2,2]
        }
    }
    // vertical col 1
    else if (first_row[0] == computer && second_row[0] == null && third_row[0] == null) {
        return [2,0]
    } else if (second_row[0] == computer && first_row[0] == null && third_row[0] == null) {
        return [0,0]
    } else if (third_row[0] == computer && second_row[0] == null && first_row[0] == null) {
        return [0,0]
    }
    // vertical col 2
    else if (first_row[1] == computer && second_row[1] == null && third_row[1] == null) {
        return [1,1]
    } else if (second_row[1] == computer && first_row[1] == null && third_row[1] == null) {
        return [0,1]
    } else if (third_row[1] == computer && second_row[1] == null && first_row[1] == null) {
        return [1,1]
    }
    // vertical col 3
    else if (first_row[2] == computer && second_row[2] == null && third_row[2] == null) {
        return [2,2]
    } else if (second_row[2] == computer && first_row[2] == null && third_row[2] == null) {
        return [0,2]
    } else if (third_row[2] == computer && second_row[2] == null && first_row[2] == null) {
        return [0,2]
    } else {
        return firstMove(first_row, second_row, third_row)
    }
}

const firstMove: Array = (first_row: Array, second_row: Array, third_row: Array) => {
    
    let random_nr: number = Math.floor(Math.random()*7)
    console.log('Random number = '+ random_nr)
    if (second_row[1] == null && random_nr > 3) {
        console.log('First move [1,1]')
        return [1,1]
    } else if (first_row[0] == null && (random_nr == 0 || random_nr == 1)) {
        console.log('First move [0,0]')
        return [0,0]
    } else if (first_row[2] == null && (random_nr == 0 || random_nr == 1)) {
        console.log('First move [0,2]')
        return [0,2]
    } else if (third_row[0] == null && (random_nr == 2 || random_nr == 3)) {
        console.log('First move [2,0]')
        return [2,0]
    } else if (third_row[2] == null && (random_nr == 2 || random_nr == 3)) {
        console.log('First move [2,2]')
        return [2,2]
    } else {
        return fillAnEmptyBox(first_row, second_row, third_row)
    }
}

const fillAnEmptyBox: Array = (first_row: Array, second_row: Array, third_row: Array) => {
    console.log('Fill an empty box')
    if (first_row.includes(null)) {
        return [0, first_row.indexOf(null)]
    } else if (second_row.includes(null)) {
        return [1, second_row.indexOf(null)]
    } else if(third_row.includes(null)){
        return [2, third_row.indexOf(null)]
    } else {
        return [0,0]
    }
}

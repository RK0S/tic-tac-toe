import { useState } from 'react';

import cl from './Center.module.css';
import Board from './../Board/Board';
import StageOfGame from '../StageOfGame/StageOfGame';
import Tie from './../Tie/Tie';

const Center = ({symbols, winner, board, setBoard, scores, orderWinRef}) => {
    const [firstPlayerTurn, setFirstPlayerTurn] = useState(true)

    const handleClick = (index) => {
        const boardCopy = [...board]

        if (winner || boardCopy[index]) return 

        boardCopy[index] = firstPlayerTurn ? symbols.first : symbols.second

        setBoard(boardCopy)
        setFirstPlayerTurn(!firstPlayerTurn)
    }

    return (
        <div className={cl.center}>
            <StageOfGame winner={winner} orderWinRef={orderWinRef} setBoard={setBoard} firstPlayerTurn={firstPlayerTurn} symbols={symbols}/>
            <Board squares={board} click={handleClick} orderWinRef={orderWinRef} />
            <Tie score={scores.tie} />
        </div>
    );
};

export default Center;
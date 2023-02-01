import { useState } from 'react';
import Board from '../Board/Board';

import cl from './Game.module.css';
import { calculateWinner } from './../../functions/calculateWinner';
import WinModal from '../WinModal/WinModal';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [firstPlayerTurn, setFirstPlayerTurn] = useState(true)
    const [symbols, setSymbols] = useState({
        first: 'cross',
        second: 'circle'
    });
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]

        if (winner || boardCopy[index]) return 

        boardCopy[index] = firstPlayerTurn ? symbols.first : symbols.second

        setBoard(boardCopy)
        setFirstPlayerTurn(!firstPlayerTurn)
    }


    return (
        <div className={cl.wrapper}>
            <p className={cl.whosturn}>
                {firstPlayerTurn
                    ? `Ходит первый игрок`
                    : `Ходит второй игрок`
                }
            </p>
            <Board squares={board} click={handleClick} />
            <WinModal winner={winner} reset={setBoard}/>
        </div>
    );
};

export default Game;
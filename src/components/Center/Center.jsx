import { useState } from 'react';

import cl from './Center.module.css';
import Board from './../Board/Board';
import StageOfGame from '../StageOfGame/StageOfGame';
import Tie from './../Tie/Tie';
import { Link } from 'react-router-dom';

const Center = ({symbols, winner, board, setBoard, scores, orderWinRef, setSymbol, setIcon}) => {
    const [firstPlayerTurn, setFirstPlayerTurn] = useState(true)

    const handleClick = (index) => {
        const boardCopy = [...board]

        if (winner || boardCopy[index]) return 

        boardCopy[index] = firstPlayerTurn ? symbols.first : symbols.second

        setBoard(boardCopy)
        setFirstPlayerTurn(!firstPlayerTurn)
    }

    function reset() {
        setIcon({
            first: 'bear',
            second: 'cat'
        })
        setSymbol({
            first: 'cross',
            second: 'circle',
        })
    }

    return (
        <div className={cl.center}>
            <StageOfGame winner={winner} orderWinRef={orderWinRef} setBoard={setBoard} firstPlayerTurn={firstPlayerTurn} symbols={symbols}/>
            <Board squares={board} click={handleClick} orderWinRef={orderWinRef} />
            <Tie score={scores.tie} />
            <Link className={cl.btn} to="/" onClick={reset}>Новая игра</Link>
        </div>
    );
};

export default Center;
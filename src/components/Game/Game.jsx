import { useMemo, useRef, useState } from 'react';

import cl from './Game.module.css';
import Center from './../Center/Center';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import { calculateWinner } from './../../functions/calculateWinner';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const orderWinRef = useRef([])
    const [symbols, setSymbols] = useState({
        first: 'cross',
        second: 'circle',
    });

    const [scores, setScores] = useState({
        first: 0,
        second: 0,
        tie: 0,
    });

    const winner = calculateWinner(board, orderWinRef);

    useMemo(() => {
        if (winner === symbols.first) {
            setScores({ ...scores, first: scores.first + 1 });
        } else if (winner === symbols.second) {
            setScores({ ...scores, second: scores.second + 1 });
        } else if (winner === 'tie') {
            setScores({ ...scores, tie: scores.tie + 1 });
        }
    }, [winner]);

    return (
        <div className={cl.wrapper}>
            <PlayerInfo
                symbol={symbols.first}
                player="Первый"
                score={scores.first}
            />
            <Center
                symbols={symbols}
                winner={winner}
                board={board}
                setBoard={setBoard}
                scores={scores}
                orderWinRef={orderWinRef}
            />
            <PlayerInfo
                symbol={symbols.second}
                player="Второй"
                score={scores.second}
            />
        </div>
    );
};

export default Game;

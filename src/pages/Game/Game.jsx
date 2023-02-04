import { useMemo, useRef, useState } from 'react';

import cl from './Game.module.css';
import Center from '../../components/Center/Center';
import PlayerInfo from '../../components/PlayerInfo/PlayerInfo';
import { calculateWinner } from '../../functions/calculateWinner';

const Game = ({symbol, icon, setIcon, setSymbol}) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const orderWinRef = useRef([])

    const [scores, setScores] = useState({
        first: 0,
        second: 0,
        tie: 0,
    });

    const winner = calculateWinner(board, orderWinRef);

    useMemo(() => {
        if (winner === symbol.first) {
            setScores({ ...scores, first: scores.first + 1 });
        } else if (winner === symbol.second) {
            setScores({ ...scores, second: scores.second + 1 });
        } else if (winner === 'tie') {
            setScores({ ...scores, tie: scores.tie + 1 });
        }
    }, [winner]);

    return (
        <div className={cl.wrapper}>
            <PlayerInfo
                symbol={symbol.first}
                player="Первый"
                score={scores.first}
                icon={icon.first}
            />
            <Center
                symbols={symbol}
                winner={winner}
                board={board}
                setBoard={setBoard}
                scores={scores}
                orderWinRef={orderWinRef}
                setIcon={setIcon}
                setSymbol={setSymbol}
            />
            <PlayerInfo
                symbol={symbol.second}
                player="Второй"
                score={scores.second}
                icon={icon.second}
            />
        </div>
    );
};

export default Game;

import React from 'react';

import cl from './StageOfGame.module.css';
import TurnText from './TurnText/TurnText';
import Winner from './WinnerText/Winner';

const StageOfGame = ({firstPlayerTurn, winner, setBoard, symbols, orderWinRef}) => {
    return (
        <div className={cl.stageOfGame}>
            {winner
                ? <Winner winner={winner} symbols={symbols} setBoard={setBoard} orderWinRef={orderWinRef} />
                : <TurnText firstPlayerTurn={firstPlayerTurn} />
            }
        </div>
    );
};

export default StageOfGame;
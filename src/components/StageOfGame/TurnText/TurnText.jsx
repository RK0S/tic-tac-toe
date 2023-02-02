import React from 'react';

import cl from './TurnText.module.css';
const TurnText = ({firstPlayerTurn}) => {
    return (
        <div className={cl.turn}>
            {firstPlayerTurn
                ? <p>Ходит первый игрок</p>
                : <p>Ходит второй игрок</p>
            }
        </div>
    );
};

export default TurnText;
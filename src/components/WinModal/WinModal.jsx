import React from 'react';

import cl from './WinModal.module.css';

const WinModal = ({ winner, reset }) => {
    const resetGame = () => {
        reset(Array(9).fill(null))
    }

    return (
        <div
            className={
                winner
                    ? [cl.winModal__wrapper, cl.active].join(' ')
                    : cl.winModal__wrapper
            }
        >
            <div className={cl.winModal__content}>
                <p className={cl.winModal__text}>
                    Победил {winner === 'cross' ? 'первый игрок' : 'второй игрок'}
                </p>
                <img 
                    className={cl.winModal__reset}
                    src={require('../../img/restart.png')} 
                    alt="restart"
                    onClick={resetGame}
                />
            </div>
        </div>
    );
};

export default WinModal;

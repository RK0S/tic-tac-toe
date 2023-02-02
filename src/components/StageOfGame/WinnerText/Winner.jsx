import React from 'react';

import cl from './Winner.module.css';

const Winner = ({winner, symbols, setBoard}) => {

    let text = ''
    
    if (winner === symbols.first) {
        text += 'Победил первый игрок!';
    } else if (winner === symbols.second) {
        text += 'Победил второй игрок!';
    } else if (winner === 'tie') {
        text+= 'Ничья!'
    }
    
 
    setTimeout(() => {
        setBoard(Array(9).fill(null))
    }, 2500)
    return (
        <div className={cl.winner}>{text}</div>
    );
};

export default Winner;
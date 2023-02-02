import React from 'react';
import Square from '../Square/Square';

import cl from './Board.module.css';

const Board = ({squares, click, orderWinRef}) => {
    return (
        <div className={cl.board}>
            {squares.map((square, i) => (
                <Square
                    style={orderWinRef.current.some(el => el === i) ? {background: '#C8FFC9'} : {}}
                    index={i}
                    key={i} 
                    value={square}
                    onClick={() => click(i)}  
                />
            ))}
        </div>
    );
};

export default Board;
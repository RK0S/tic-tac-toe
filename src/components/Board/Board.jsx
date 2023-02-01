import React from 'react';
import Square from '../Square/Square';

import cl from './Board.module.css';

const Board = ({squares, click}) => {
    return (
        <div className={cl.board}>
            {squares.map((square, i) => (
                <Square 
                    key={i} 
                    value={square}
                    onClick={() => click(i)}  
                />
            ))}
        </div>
    );
};

export default Board;
import React from 'react';

import cl from './Square.module.css';

const Square = ({value, onClick, style}) => {
    return (
        <button className={cl.square} onClick={onClick} style={style}>
            {value &&
                <img src={require(`../../img/symbols/${value}.png`)} alt={value} />
            }
        </button>
    );
};

export default Square;
import React from 'react';

import cl from './Square.module.css';

const Square = ({value, onClick}) => {
    return (
        <button className={cl.square} onClick={onClick}>
            {value &&
                <img src={require(`../../img/symbols/${value}.png`)} alt={value} />
            }
        </button>
    );
};

export default Square;
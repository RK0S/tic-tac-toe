import React from 'react';

import cl from './PlayerInfo.module.css';

const PlayerInfo = ({symbol, player, score}) => {
    return (
        <div className={cl.playerInfo}>
            <div className={cl.player__logo}>
                <img src={require("../../img/icons/bear.png")} alt="bear" />
                <h3 className={cl.h3}>{player} игрок</h3>
            </div>
            <div className={cl.symbol}>
                <img src={require(`../../img/symbols/${symbol}.png`)} alt={symbol} />
            </div>
            <div className={cl.score__wrapper}>
                <h3 className={cl.h3}>Очки</h3>
                <h2 className={cl.h2}>{score}</h2>
            </div>
        </div>
    );
};

export default PlayerInfo;
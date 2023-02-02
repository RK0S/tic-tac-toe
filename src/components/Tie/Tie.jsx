import cl from './Tie.module.css';

const Tie = ({score}) => {
    return (
        <div className={cl.tie}>
            <h3>Ничьи: {score}</h3>
        </div>
    );
};

export default Tie;
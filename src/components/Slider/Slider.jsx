import {useEffect, useState} from 'react';

import cl from './Slider.module.css';

const Slider = ({array, setCurrentThing, thing, player, num, src }) => {
    const [index, setIndex] = useState(+num)

    useEffect(() => {
        setCurrentThing({...thing, [player]: array.current[index]})
    }, [index])



    const next = () => {
        if (index < (array.current.length - 1)) {
            setIndex(prevState => prevState + 1)
        } else if (index === (array.current.length - 1)) {
            setIndex(0)
        }
    }
    
    const prev = () => {
        if (index > 0) {
            setIndex(prevState => prevState - 1)
        } else if (index === 0) {
            setIndex(array.current.length - 1)
        }
    }

    return (
        <div className={cl.slider}>
            <img
                src={require('../../img/helpSymbols/leftArrow.png')}
                alt="left"
                className={cl.arrow}
                onClick={prev}
            /> 
            {array && 
                <img
                    src={require(`../../img/${src}/${array.current[index]}.png`)}
                    alt={array.current[index]}
                    className={cl.thing}
                />
            }
            <img
                src={require('../../img/helpSymbols/rightArrow.png')}
                alt="right"
                className={cl.arrow}
                onClick={next}
            /> 
        </div>
    );
};

export default Slider;
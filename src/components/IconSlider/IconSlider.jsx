import {useEffect, useState} from 'react';

import cl from './IconSlider.module.css';


const IconSlider = ({icons, setIcon, icon, player, num }) => {
    const [index, setIndex] = useState(+num)

    useEffect(() => {
        
        setIcon({...icon, [player]: icons.current[index]})
    }, [index])



    const next = () => {
        if (index < (icons.current.length - 1)) {
            setIndex(prevState => prevState + 1)
        } else if (index === (icons.current.length - 1)) {
            setIndex(0)
        }
    }
    
    const prev = () => {
        if (index > 0) {
            setIndex(prevState => prevState - 1)
        } else if (index === 0) {
            setIndex(icons.current.length - 1)
        }
    }

    return (
        <div className={cl.iconSlider}>
            <img
                src={require('../../img/helpSymbols/leftArrow.png')}
                alt="left"
                className={cl.arrow}
                onClick={prev}
            /> 
            {icons && 
                <img
                    src={require(`../../img/icons/${icons.current[index]}.png`)}
                    alt={icons.current[index]}
                    className={cl.icon}
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

export default IconSlider;

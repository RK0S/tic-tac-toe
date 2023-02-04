import { Link } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import cl from './Start.module.css';

const Start = ({ icon, setIcon, symbol, setSymbol, icons, symbols }) => {
    return (
        <div className={cl.start__wrapper}>
            <div className={cl.settings__wrapper}>
                <div className={cl.player__settings}>
                    <Slider
                        array={icons}
                        setCurrentThing={setIcon}
                        thing={icon}
                        player="first"
                        num="0"
                        src="icons"
                    />
                    <h3>Первый игрок</h3>
                    <Slider
                        array={symbols}
                        setCurrentThing={setSymbol}
                        thing={symbol}
                        player="first"
                        num="0"
                        src="symbols"
                    />
                </div>
                <div className={cl.link}>
                    <Link className={cl.btn} to='/game'>Играть</Link>
                </div>
                <div className={cl.player__settings}>
                    <Slider
                        array={icons}
                        setCurrentThing={setIcon}
                        thing={icon}
                        player="second"
                        num="1"
                        src="icons"
                    />
                    <h3>Второй игрок</h3>
                    <Slider
                        array={symbols}
                        setCurrentThing={setSymbol}
                        thing={symbol}
                        player="second"
                        num="1"
                        src="symbols"
                    />
                </div>
            </div>
        </div>
    );
};

export default Start;

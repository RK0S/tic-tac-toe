import { useState, useRef } from 'react';
import './styles/App.css';
import Game from './pages/Game/Game';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Start from './pages/Start/Start';

function App() {
    const [icon, setIcon] = useState({
        first: 'bear',
        second: 'cat'
    });
    
    const iconsRef = useRef([
        'bear',
        'cat',
        'chicken',
        'cobra',
        'dog',
        'panda',
        'pork',
        'puffer',
        'sea-lion',
        'sloth',
        'weasel',
        'polar-bear',
    ]);

    const [symbol, setSymbol] = useState({
        first: 'cross',
        second: 'circle',
    });

    const symbolsRef = useRef([
        'cross',
        'circle',
        'bone',
        'crown',
        'dislike',
        'eye',
        'heart',
        'home',
        'pawprint',
        'scissors',
        'sun',
        'wifi',
        'snowflake',
    ])

    return (
        <BrowserRouter className="App">
            <Routes>
                <Route path="/game" element={<Game symbol={symbol} icon={icon} setIcon={setIcon} setSymbol={setSymbol} />} />
                <Route path="/" element={<Start symbol={symbol} icon={icon} setIcon={setIcon} setSymbol={setSymbol} icons={iconsRef} symbols={symbolsRef} />} />
                <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

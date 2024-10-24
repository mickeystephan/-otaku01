import React, { useState, useEffect } from 'react';
import Micro from './componente/moedas';
import Dias from './componente/conversor moedas';

const App = () => {
    const [conversionRate, setConversionRate] = useState();
    const [history, setHistory] = useState([null]);
    const [favorites, setFavorites] = useState(['USD', 'EUR', 'BRL','CVE','']);

    
    const fetchConversion = async (from, to) => {
        try {
            const response = await fetch (`https://api.exchangerate-api.com/v4/latest/${from}`);
            const data = await response.json();
            const rate = data.rates[to];

            setConversionRate(rate);
            setHistory((prevHistory) => [...prevHistory, `${from} para ${to}: ${rate}`]);
        } catch (error) {
            console.error('Erro ao buscar a conversão:', error);
        }
    };

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || favorites;
        setFavorites(savedFavorites);
    }, []);

    return (
        <div>
            <h1>Conversor de Moedas</h1>
            <Micro onFetchConversion={fetchConversion} favorites={favorites} />
            <Dias conversionRate={conversionRate} history={history} />
        </div>
    );
};

export default App;

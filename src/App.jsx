import React, { useState, useEffect } from 'react';
import Micro from './componente/moedas';
import Dias from './componente/conversor moedas';

const App = () => {
    const [conversionRate, setConversionRate] = useState();
    const [history, setHistory] = useState([null]);
    const [favorites, setFavorites] = useState(['USD', 'EUR', 'BRL','CVE','']);

    const fetchCodes = async () => {
        try {
            const response = await fetch("https://v6.exchangerate-api.com/v6/3c2ebb09b90011889049cd0d/codes")
            const data = await response.json();
            if(data.supported_codes){
                return data.supported_codes;
            }
        } catch (error) {
            console.error('Erro ao buscar a conversão:', error);
        }
    }
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
        const codes  = fetchCodes().then(
            (data) => {
                const cds = data.map(element => element[0] + " - " + element[1])
                setFavorites(cds)
                
            }
        );
    }, []);
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

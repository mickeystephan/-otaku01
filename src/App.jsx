import React, { useState, useEffect } from 'react';
import Micro from './componente/moedas';
import Dias from './componente/conversor Moedas';


const App = () => {
    const [conversionRate, setConversionRate] = useState(null);
    const [history, setHistory] = useState([]);
    const [favorites, setFavorites] = useState(['USD', 'EUR', 'BRL', 'CVE']);

    const fetchCodes = async () => {
        try {
            const response = await fetch("https://v6.exchangerate-api.com/v6/3c2ebb09b90011889049cd0d/codes");
            const data = await response.json();
            if (data.supported_codes) {
                return data.supported_codes;
            }
        } catch (error) {
            console.error('Erro ao buscar os códigos:', error);
        }
    };

    const fetchConversion = async (from, to,amount) => {
        try {
            const response = await fetch(` https://v6.exchangerate-api.com/v6/3c2ebb09b90011889049cd0d/pair/${from}/${to}/${amount}`);
            const data = await response.json();
            const rate = data.conversion_result;

            setConversionRate(rate);
            setHistory((prevHistory) => [...prevHistory, `${from} para ${to}: ${rate}`]);
        } catch (error) {
            console.error('Erro ao buscar a conversão:', error);
        }
    };

    useEffect(() => {
        fetchCodes().then((data) => {
            const cds = data.map((element) => element[0]);
            setFavorites(cds);
        });
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

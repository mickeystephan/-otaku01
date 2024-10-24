// Micro.jsx
import React from 'react';
import './style.css';

const Micro = ({ onFetchConversion, favorites }) => {
    const [fromCurrency, setFromCurrency] = React.useState('');
    const [toCurrency, setToCurrency] = React.useState('');

    const handleFetch = () => {
        if (fromCurrency && toCurrency) {
            onFetchConversion(fromCurrency, toCurrency);
        }
    };

    return (
        <div className="micro-container">
            <select className="currency-select" onChange={(e) => setFromCurrency(e.target.value)} defaultValue="">
                <option value="" disabled>Selecione a moeda de origem</option>
                {favorites.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <select className="currency-select" onChange={(e) => setToCurrency(e.target.value)} defaultValue="">
                <option value="" disabled>Selecione a moeda de destino</option>
                {favorites.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <button className="convert-button" onClick={handleFetch}>Converter</button>
        </div>
    );
};

export default Micro;

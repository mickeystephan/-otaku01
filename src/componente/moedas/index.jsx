// Micro.jsx
import React from 'react';
import './style.css';

const Micro = ({ onFetchConversion, favorites }) => {
    const [fromCurrency, setFromCurrency] = React.useState('');
    const [toCurrency, setToCurrency] = React.useState('');
    const [amount, setAmount] = React.useState(0);

    const handleFetch = () => {
        if (fromCurrency && toCurrency) {
            onFetchConversion(fromCurrency, toCurrency,amount);
        }
    };

    return (
        <div className="micro-container">
            <input
                type='number'
                value={amount}
                defaultValue={0}
                onChange={(e) => setAmount(e.target.value)}
            />
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

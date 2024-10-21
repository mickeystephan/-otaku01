import React from 'react';

function SelecionarMoeda(props) {
    return (
        <div>
            <h3>Moedas Origem</h3>
            {props.moedas.map((moeda, index) => (
                <button key={index} onClick={() => props. SelecionarMoeda(moeda)}>
                    {moeda}
                </button>
            ))}

            <h3>Moeda Destino</h3>
            {props.moedas.map((moeda, index) => (
                <button key={index} onClick={() => props.TrocarMoedaDestino(moeda)}>
                    {moeda}
                </button>
            ))}
        </div>
    );
}

export default SelecionarMoeda;

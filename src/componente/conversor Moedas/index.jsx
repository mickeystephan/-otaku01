// Dias.jsx
import  "./style.css";

const Dias = ({ conversionRate, history }) => {
    return (
        <div className="dias-container">
            <h2 className="conversion-rate">Taxa de Conversão: {conversionRate ? conversionRate : "N/A"}</h2>
            <h3 className="history-title">Histórico de Conversões:</h3>
            <ul className="history-list">
                {history.length === 0 ? (
                    <li className="no-conversion">Nenhuma conversão realizada.</li>
                ) : (
                    history.map((entry, index) => (
                        <li className="history-item" key={index}>{entry}</li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Dias;

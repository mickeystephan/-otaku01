import { useEffect, useState } from 'react';
import './App.css';
import SelecionarMoeda from './componente/conversao';

function App() {
  const [MoedaOrigem, setMoedaOrigem] = useState('');
  const [MoedaDestino, setMoedaDestino] = useState('');

  const moedas = ['EUR', 'USD', 'CVE'];

  function handleTrocarMoedaOrigem(moeda) {
    setMoedaOrigem(moeda);
  }

  function handleTrocarMoedaDestino(moeda) {
    setMoedaDestino(moeda);
  }

  return (
    <div>
      <h1>Conversor Moedas</h1>
      <SelecionarMoeda
        moedas={moedas}
        SelecionarMoedaOrigem={handleTrocarMoedaOrigem}
        SelecionarMoedaDestino={handleTrocarMoedaDestino}
      />
    </div>
  );
}

function Historico(){
  const [historia , setHistoria] = useState([]);

  useEffect(() => {
    if (rate){
      const newConversao = { from : fromCurrency, to :toCurreency , rate};
      setHistoria((prevHistoria) => [...prevHistoria, newConversao]);
      
    }
  }, [rate];
)

  <Historico/>
}

export default App;

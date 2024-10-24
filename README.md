 Conversor de Moedas

Esta é uma aplicação simples de conversão de moedas desenvolvida com React, que permite converter valores entre diferentes moedas usando uma API de taxas de câmbio em tempo real. A aplicação também permite salvar moedas favoritas no localStorage e exibir um histórico das conversões realizadas.

 Funcionalidades

- Conversão de moedas Selecione as moedas de origem e destino para obter a taxa de conversão mais recente.
- Histórico de conversões Exibe uma lista com o histórico das conversões realizadas.
- Moedas favoritas Salve suas moedas preferidas no localStorage para facilitar futuras conversões.
- Atualização em tempo real A taxa de câmbio é obtida dinamicamente de uma API externa.
  
 Tecnologias Utilizadas

- React: Framework JavaScript para construção da interface.
- Vite: Ferramenta de build para desenvolvimento rápido.
- CSS: Estilização dos componentes.
- API Externa: API usada para obter taxas de câmbio em tempo real.
- LocalStorage: Armazenamento local para salvar as moedas favoritas.

 Estrutura dos Componentes

1. `Micro.jsx`

Componente responsável por:
- Renderizar os campos de seleção de moeda (origem e destino).
- Enviar a solicitação para realizar a conversão.
- Usar as moedas favoritas salvas no localStorage para facilitar a seleção.

Principais Props:
- `onFetchConversion(fromCurrency, toCurrency)`: Função chamada ao clicar no botão "Converter".
- `favorites`: Array de moedas favoritas para popular os campos de seleção.

### Exemplo de Uso:

```jsx
<Micro onFetchConversion={handleFetchConversion} favorites={['USD', 'EUR', 'BRL']} />

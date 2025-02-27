import React, { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    const alturaMetros = altura / 100; // Convertendo altura para metros
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);
    classificarIMC(imcCalculado);
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
      setClassificacao("Sobrepeso");
    } else if (imc >= 30 && imc < 34.9) {
      setClassificacao("Obesidade Grau I");
    } else if (imc >= 35 && imc < 39.9) {
      setClassificacao("Obesidade Grau II");
    } else {
      setClassificacao("Obesidade Grau III ou Mórbida");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calcularIMC();
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>

      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./index.css";

function App() {
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<string | null>(null);

  // Lógica dos botões irá aqui
  const handleNumberClick = (value: string) => {
    // Lógica para não começar com múltiplos zeros
    if (input === "0" && value !== ".") {
      setInput(value);
      return;
    }
    // Lógica para o ponto decimal
    if (value === "." && input.includes(".")) {
      return; // Impede multiplos pontos
    }
    // Adiciona o valor ao input
    setInput(input + value);
  };

  // Lógica para os operadores
  const handleOperatorClick = (value: string) => {
    setOperator(value); // Define o operador
    setPreviousValue(input); // Move o input atual para o valor anterior
    setInput("0"); // Limpa o input para o proximo numero
  };

  const handleEqualClick = () => {
    if (!operator || !previousValue) {
      return; // Não faz nada se nao houver um operador ou valor anterior
    }

    // Converte as strings para números para o cálculo
    const prev = parseFloat(previousValue);
    const current = parseFloat(input);
    let result = 0;

    // Realiza a operação com base no operador
    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        if (current === 0) {
          // Lida com a divisao por zero
          setInput("Erro");
          setOperator(null);
          setPreviousValue(null);
          return;
        }
        result = prev / current;
        break;
      default:
        return;
    }
    // Atualiza os estados para exibir o resultado
    setInput(result.toString());
    setOperator(null);
    setPreviousValue(null);
  };

  //  Limpa a calculadora
  const handleClear = () => {
    setInput("0");
    setOperator(null);
    setPreviousValue(null);
  };

  // Muda o sinal do número atual
  const handleToggleSign = () => {
    setInput((prevInput) => (parseFloat(prevInput) * -1).toString());
  };

  //  Calcula a porcentagem
  const handlePercentage = () => {
    setInput((prevInput) => (parseFloat(prevInput) / 100).toString());
  };

  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
        {/* Tela da calculadora */}
        <div className="bg-gray-700 p-4 rounded-lg mb-4 text-right">
          <div className="text-gray-400 text-sm">
            {previousValue} {operator}
          </div>
          <div className="text-white text-3xl font-bold">{input}</div>
        </div>
        {/* Botões da calculadora */}
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={handleClear}
            className="bg-gray-600 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            C
          </button>
          <button
            onClick={handleToggleSign}
            className="bg-gray-600 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            +/-
          </button>
          <button
            onClick={handlePercentage}
            className="bg-gray-600 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            %
          </button>
          <button
            onClick={() => handleOperatorClick("/")}
            className="bg-orange-500 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            /
          </button>
          <button
            onClick={() => handleNumberClick("7")}
            className="bg-gray-700 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            7
          </button>
          <button
            onClick={() => handleNumberClick("8")}
            className="bg-gray-700 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            8
          </button>
          <button
            onClick={() => handleNumberClick("9")}
            className="bg-gray-700 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            9
          </button>
          <button
            onClick={() => handleOperatorClick("*")}
            className="bg-orange-500 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            *
          </button>
          <button
            onClick={() => handleNumberClick("4")}
            className="bg-gray-700 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            4
          </button>
          <button
            onClick={() => handleNumberClick("5")}
            className="bg-gray-700 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            5
          </button>
          <button
            onClick={() => handleNumberClick("6")}
            className="bg-gray-700 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            6
          </button>
          <button
            onClick={() => handleOperatorClick("-")}
            className="bg-orange-500 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            -
          </button>
          <button
            onClick={() => handleNumberClick("1")}
            className="bg-gray-700 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            1
          </button>
          <button
            onClick={() => handleNumberClick("2")}
            className="bg-gray-700 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            2
          </button>
          <button
            onClick={() => handleNumberClick("3")}
            className="bg-gray-700 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            3
          </button>
          <button
            onClick={() => handleOperatorClick("+")}
            className="bg-orange-500 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            +
          </button>
          <button
            onClick={() => handleNumberClick("0")}
            className="col-span-2 bg-gray-700 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            0
          </button>
          <button
            onClick={() => handleNumberClick(".")}
            className="bg-gray-700 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            .
          </button>
          <button
            onClick={handleEqualClick}
            className="bg-orange-500 text-white p-4 rounded-lg text-2xl font-semibold"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

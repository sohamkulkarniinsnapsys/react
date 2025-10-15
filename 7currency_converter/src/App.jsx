import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setCurrencyOptions(Object.keys(data.rates));
      });
  }, []);

  useEffect(() => {
    if (rates && rates[from] && rates[to]) {
      const result = (amount * rates[to]) / rates[from];
      setConvertedAmount(result.toFixed(2));
    }
  }, [amount, from, to, rates]);

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 w-[90%] sm:w-[400px]">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          💱 Currency Converter
        </h1>

        <InputBox
          label="From"
          amount={amount}
          currencyOptions={currencyOptions}
          selectCurrency={from}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
        />

        {/* Swap button */}
        <div className="flex justify-center my-4">
          <button
            onClick={handleSwap}
            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition-all"
          >
            🔄 Swap
          </button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={currencyOptions.filter((currency) => currency !== from)}
          selectCurrency={to}
          onCurrencyChange={setTo}
          amountDisable
        />

        <p className="text-center text-gray-700 mt-6 font-medium">
          {amount} {from.toUpperCase()} ={" "}
          <span className="text-blue-600 font-bold">
            {convertedAmount} {to.toUpperCase()}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;

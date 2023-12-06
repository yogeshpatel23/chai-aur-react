import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(10);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converedAmount, setConvertedAmount] = useState("");
  const currencyOptions = useCurrencyInfo(from);
  const options = Object.keys(currencyOptions);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(converedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyOptions[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amonut={amount}
                onAmountChange={setAmount}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={setFrom}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amonut={converedAmount}
                selectCurrency={to}
                onCurrencyChange={setTo}
                currencyOptions={options}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg"
            >
              Convert <span className="uppercase">{from}</span>
              {" TO "}
              <span className="uppercase">{to}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

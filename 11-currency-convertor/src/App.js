import { useEffect, useState } from "react";

const currencyTypesArr = ["INR", "USD", "EUR"];

function App() {
  const [amount, setAmount] = useState(null);
  const [convertedAmt, setConvertedAmt] = useState(null);
  const [fromCurr, setFromCurr] = useState("INR");
  const [toCurr, setToCurr] = useState("USD");

  useEffect(fetchConvertedAmt, [amount, fromCurr, toCurr]);
  useEffect(titleChange, [fromCurr, toCurr]);
  useEffect(resetOnEsc, []);

  function resetOnEsc() {
    document.addEventListener("keyup", function (ev) {
      if (ev.key === "Escape") {
        setAmount(0);
        setConvertedAmt(null);
        setFromCurr("INR");
        setToCurr("USD");
      }
    });
  }
  function titleChange() {
    if (fromCurr === toCurr) return;
    document.title = `Currency Convertor | ${fromCurr} to ${toCurr}`;

    return function () {
      document.title = `Currency Convertor | React App`;
    };
  }
  function fetchConvertedAmt() {
    const controller = new AbortController();

    async function _FetchConvertedAmt() {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        if (toCurr === "USD") setConvertedAmt(data?.rates?.USD.toFixed(2));
        else if (toCurr === "EUR") setConvertedAmt(data?.rates?.EUR.toFixed(2));
        else if (toCurr === "INR") setConvertedAmt(data?.rates?.INR.toFixed(2));
      } catch (err) {
        console.error(err.message);
      }
    }
    if (!amount) {
      return;
    }
    if (amount === 0) {
      alert("Enter a valid amount!");
      return;
    }
    if (fromCurr === toCurr) {
      return;
    }

    _FetchConvertedAmt();

    return function () {
      controller.abort();
    };
  }
  return (
    <div className="app">
      <InputSec amount={amount} setAmount={setAmount}>
        <Input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          setterFunc={setAmount}
          min={0}
        />
        <DropDown
          val={fromCurr}
          setterFunc={setFromCurr}
          optionArr={currencyTypesArr}
          label="From"
        />
        <DropDown
          val={toCurr}
          setterFunc={setToCurr}
          optionArr={currencyTypesArr}
          label="To"
        />
      </InputSec>
      <Display
        amount={amount}
        convertedAmt={convertedAmt}
        fromCurr={fromCurr}
        toCurr={toCurr}
      />
    </div>
  );
}

function Display({ amount, convertedAmt, fromCurr, toCurr }) {
  if (fromCurr === toCurr) return <div>Both selected currencies are same!</div>;
  return (
    <div>
      {!amount
        ? "Start Entering the amount"
        : `${amount} ${fromCurr} = ${convertedAmt} ${toCurr}`}
    </div>
  );
}
function InputSec({ children }) {
  return <form>{children}</form>;
}
function Input({ type, placeholder, min = null, value, setterFunc }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(ev) => setterFunc(ev.target.value)}
      min={min}
    />
  );
}
function DropDown({ val, setterFunc, optionArr, label }) {
  return (
    <div className="dropDown">
      <label>{label}</label>
      <select value={val} onChange={(ev) => setterFunc(ev.target.value)}>
        {optionArr.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;

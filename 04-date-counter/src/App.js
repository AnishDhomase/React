import { useState } from "react";
import "./App.css";

function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function decStep() {
    if (step > 1) setStep(step - 1);
  }
  function incStep() {
    setStep(step + 1);
  }
  function decCount() {
    setCount(count - step);
  }
  function incCount() {
    setCount(count + step);
  }

  return (
    <div className="outer">
      <div className="change">
        <button onClick={decStep}>➖</button>
        <span>Step: {step}</span>
        <button onClick={incStep}>➕</button>
      </div>
      <div className="change">
        <button onClick={decCount}>➖</button>
        <span>Count: {count}</span>
        <button onClick={incCount}>➕</button>
      </div>
      <h1 className="date">
        {count === 0 && `Today 👉🏻 `}
        {count > 0 && `After ${count} ${count === 1 ? "Day" : "Days"} 👉🏻 `}
        {count < 0 && `${-count} ${count === -1 ? "Day" : "Days"} ago 👉🏻 `}
        {date.toDateString()}
      </h1>
    </div>
  );
}

export default App;

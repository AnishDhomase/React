import { useState } from "react";

const messages = ["Easy", "Medium", "Hard"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    if (step === 1) return;
    setStep(step - 1);
  }
  function handleNext() {
    if (step === 3) return;
    // setStep(step + 1);
    // setStep(step + 1);
    setStep((s) => s + 1);
    // setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "❌" : "✔️"}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <Step step={step} number={1}>
              1
            </Step>
            <Step step={step} number={2}>
              2
            </Step>
            <Step step={step} number={3}>
              3
            </Step>
            {/* <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div> */}
          </div>

          <Message>
            Step {step}: {messages[step - 1]}
          </Message>
          {/* <p className="message">
            Step {step}: {messages[step - 1]}
          </p> */}

          <div className="buttons">
            <Button
              onClick={handlePrev}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              👈🏻 Previous
            </Button>
            <Button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next 👉🏻
            </Button>
            {/* <button
                onClick={handlePrev}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Previous
              </button> */}
            {/* <button
                onClick={handleNext}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Next
              </button> */}
          </div>
        </div>
      )}
    </>
  );
}

function Message({ children }) {
  return <p className="message">{children}</p>;
}

function Button({ onClick, children, style }) {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}

function Step({ step, number, children }) {
  return <div className={step >= number ? "active" : ""}>{children}</div>;
}

import { useState } from "react"

import "../Button/Button.css"
import "./Main.css"

function Main() {
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [operator, setOperator] = useState("+")
    const [result, setResult] = useState(0)

    console.log(firstNumber, operator, secondNumber);

    return (
        <main >
            {/* <input className="input" type="number" onChange={(evt) => setInputNumber(evt.target.value)} />
            <div className="buttons">
                <button value={value} onClick={(evt) => setValue(evt.target.value)} className="button secondary" value="+">+</button>
                <button className="button secondary">-</button>
                <button className="button secondary">*</button>
                <button className="button secondary">/</button>
                <button className="button secondary">=</button>
            </div> */}
            <input type="number" onChange={(evt) => setFirstNumber(Number(evt.target.value))} />
            <input type="number" onChange={(evt) => setSecondNumber(Number(evt.target.value))} />

            <select onChange={(evt) => {
                const operatorValue = evt.target.value

                setOperator(operatorValue)

                if (operatorValue === "+") {
                    setResult(firstNumber + secondNumber)
                }

                if (operatorValue === "-") {
                    setResult(firstNumber - secondNumber)
                }

                if (operatorValue === "*") {
                    setResult(firstNumber * secondNumber)
                }

                if (operatorValue === "/") {
                    setResult(firstNumber / secondNumber)
                }
            }}>
                <option value="+" >+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>

            {/* <button className="button">=</button> */}

            <div >
                {`${firstNumber} ${operator} ${secondNumber} =`} {result}
            </div>

        </main >
    )
}

export default Main
import React from "react"

import "../Button/Button.css"
import "./Main.css"

function Main() {
    const [result, setResult] = React.useState(0)

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const { firstNumber, secondNumber, operator } = evt.target.elements

        const firstNum = Number(firstNumber.value)
        const SecondNum = Number(secondNumber.value)
        const operatorType = operator.value

        if (operatorType === "+") {
            setResult(firstNum + SecondNum)
        }

        if (operatorType === "-") {
            setResult(firstNum - SecondNum)
        }

        if (operatorType === "*") {
            setResult(firstNum * SecondNum)
        }

        if (operatorType === "/") {
            setResult(firstNum / SecondNum)
        }

        firstNumber.value = null
        secondNumber.value = null
    }

    return (
        <main >
            <form onSubmit={handleSubmit}>
                <input type="number" name="firstNumber" />

                <select name="operator">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>

                <input type="number" name="secondNumber" />

                <button className="button secondary" type="submit">=</button>

                <div>{result}</div>
            </form>
        </main >
    )
}

export default Main
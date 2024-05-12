import React, { useState } from 'react';
import './Calculator.css';
import '../template_components/style.css';
import Button from '../template_components/Button';

function Calculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [display, setDisplay] = useState("0");

    function clearClick() {
        console.log("Clear clicked");

        setFirstNumber("");
        setSecondNumber("");
        setOperator("");
        setDisplay("0");
    }
    function numberClick(x) {
        console.log(`Number clicked: ${x}`);

        if (operator === "") {
            setFirstNumber(firstNumber + x);
            setDisplay(firstNumber + x);
        } else {
            setSecondNumber(secondNumber + x);
            setDisplay(secondNumber + x);
        }
    }

    function operatorClick(x) {
        console.log(`Operator clicked: ${x}`);

        setOperator(x);
    }

    function equalClick() {
        console.log("Equal clicked");

        let result = 0;
        switch (operator) {
            case "+":
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case "-":
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case "*":
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case "/":
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
            default:
                break;
        }

        setDisplay(result);
        setFirstNumber(result);
        setSecondNumber("");
        setOperator("");
    }


    return (
        <div className="stack-container">
            <div className="display">{display}</div>
            <div className="grid-container">
                <Button className="operator extrawide" type="primary" text="C" onClick={() => clearClick()}/>
                <Button className="operator" type="primary" text="/" onClick={() => operatorClick("/")}/>
                <Button className="number" type="secondary" text="7" onClick={() => numberClick(7)}/>
                <Button className="number" type="secondary" text="8" onClick={() => numberClick(8)}/>
                <Button className="number" type="secondary" text="9" onClick={() => numberClick(9)}/>
                <Button className="operator" type="primary" text="*" onClick={() => operatorClick("*")}/>
                <Button className="number" type="secondary" text="4" onClick={() => numberClick(4)}/>
                <Button className="number" type="secondary" text="5" onClick={() => numberClick(5)}/>
                <Button className="number" type="secondary" text="6" onClick={() => numberClick(6)}/>
                <Button className="operator" type="primary" text="-" onClick={() => operatorClick("-")}/>
                <Button className="number" type="secondary" text="1" onClick={() => numberClick(1)}/>
                <Button className="number" type="secondary" text="2" onClick={() => numberClick(2)}/>
                <Button className="number" type="secondary" text="3" onClick={() => numberClick(3)}/>
                <Button className="operator" type="primary" text="+" onClick={() => operatorClick("+")}/>
                <Button className="number wide" type="secondary" text="0" onClick={() => numberClick(0)}/>
                <Button className="number" type="secondary" text="." onClick={() => numberClick(".")}/>
                <Button className="operator" type="special" text="=" onClick={() => equalClick()}/>
            </div>
        </div>
        
    );
}

export default Calculator;
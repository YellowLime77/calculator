import React from 'react';
import './Calculator.css';
import '../template_components/style.css';
import Button from '../template_components/Button';

function Calculator() {
    function handleClick() {
        console.log("Button clicked");
    }


    return (
        <div className="stack-container">
            <div className="display">0</div>
            <div className="grid-container">
                <Button className="operator" type="primary" text="C" onClick={handleClick}/>
                <Button className="operator" type="secondary" text="+/-"/>
                <Button className="operator" type="secondary" text="%"/>
                <Button className="operator" type="primary" text="/"/>
                <Button className="number" type="secondary" text="7"/>
                <Button className="number" type="secondary" text="8"/>
                <Button className="number" type="secondary" text="9"/>
                <Button className="operator" type="primary" text="*"/>
                <Button className="number" type="secondary" text="4"/>
                <Button className="number" type="secondary" text="5"/>
                <Button className="number" type="secondary" text="6"/>
                <Button className="operator" type="primary" text="-"/>
                <Button className="number" type="secondary" text="1"/>
                <Button className="number" type="secondary" text="2"/>
                <Button className="number" type="secondary" text="3"/>
                <Button className="operator" type="primary" text="+"/>
                <Button className="number wide" type="secondary" text="0"/>
                <Button className="number" type="secondary" text="."/>
                <Button className="operator" type="special" text="="/>
            </div>
        </div>
        
    );
}

export default Calculator;
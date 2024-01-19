import { useState } from 'react';
import Buttons from '../components/Buttons';
import Display from '../components/Display';
import styles from './Calculator.module.css';

const Calculator = () => {
    const [calVal, setCalVal] = useState('');

    const onButtonClick = (buttonText) => {
        console.log('buttonText', buttonText);
        if (buttonText === "C") {
            setCalVal("");
        } else if (buttonText === "=") {
            const result = eval(calVal);
            setCalVal(result);
        } else {
            const newDisplayValue = calVal + buttonText;
            setCalVal(newDisplayValue);
        }
    };

    return (
        <div className={styles.calculator}>

            <h1><center>Calculator</center></h1>
            <Display displayValue={calVal} />
            <Buttons onButtonClick={onButtonClick} />
        </div>
    )
}

export default Calculator;

import React, { useState } from 'react';
import Keys from './keys';

function Calculater() {
    const keys = [
        "AC", "C", "%", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "=", "0", "EQUALS"
    ];

    const [showResult, setshowResult] = useState(false);
    const [display, setdisplay] = useState("");
    const maxlimit = 15;

    function calculateresult() {
        if (display.length !== 0) {
            try {
                let calcResult = eval(display);
                calcResult = parseFloat(calcResult.toFixed(3));
                setdisplay(String(calcResult));
                setshowResult(true);
            } catch (error) {
                setdisplay("error");
            }
        } else {
            setdisplay("");
        }
    }

    function handleButton(value) {
        setshowResult(false);
        if (value === 'AC') setdisplay("");
        else if (value === 'C') setdisplay(display.slice(0, -1));
        else if (isOperator(value)) {
            // Only add operator if the last character is not an operator
            if (display && !isOperator(display[display.length - 1])) {
                setdisplay(display + value);
            }
        } else if (value === 'EQUALS') calculateresult();
        else if (display.length >= maxlimit)
            alert(`Maximum characters allowed: ${maxlimit}`);
        else setdisplay(display + value);
    }

    function isOperator(char) {
        return ['*', '/', '%', '+', '-'].includes(char);
    }

    const operationclass = "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end";
    const resultclass = "text-[1.7rem]";

    return (
        <div className='min-w-[320px] bg-black flex flex-col gap-4 p-4 rounded-2xl'>
            <div className='overflow-x-auto bg-[#141414] min-h-[100px] flex items-end justify-end flex-col p-4 rounded-[10px]'>
                <div className={showResult ? resultclass : operationclass}>
                    {display || 'RESULT'}
                </div>
            </div>
            <div className='grid grid-cols-[repeat(4,1fr)] gap-[0.3rem]'>
                {keys.map((item, index) => (
                    <Keys
                        Label={item}
                        key={index}
                        keyclass={item === 'EQUALS' ? 'equals' : ''}
                        onButtonclick={handleButton}
                    />
                ))}
            </div>
        </div>
    );
}

export default Calculater;


import React, { useRef } from "react";


function RefsFn(){

    const num1 = useRef(); // กรณีวิธีเขียน ref ที่่มีการกำหนดไว้ที่ contructor
    const num2 = useRef();
    const operator = React.useRef(); // กรณีวิธีเขียน ref ที่่ไม่มีการกำหนด contructor
    const result = React.useRef();

    const calculate = (ev) => {
        let op = ev.target.innerText; //เข้าถึงชื่อปุ่มที่เป็นสัญญาลักษณ์
        let n1 = parseInt(num1.current.innerText);
        let n2 = parseInt(num2.current.innerText);
        let r = eval(`${n1} ${op} ${n2}`);
        result.current.innerText = r;
        operator.current.innerText = op
    }

    return(
        
        <div style={{ textAlign:'center', marginTop:20, fontSize: 18}}>
        <h3>Refs by function Components</h3>
        <span ref={num1}>15</span>&nbsp;
        <span ref={operator}>?</span>&nbsp;
        <span ref={num2}>5</span>&nbsp;
        <span>=</span>&nbsp;
        <span ref={result}>?</span>
        <div>
            <button onClick={calculate}>+</button>
            <button onClick={calculate}>-</button>
            <button onClick={calculate}>*</button>
            <button onClick={calculate}>/</button>
        </div>
    </div>
    )
}

export default RefsFn;
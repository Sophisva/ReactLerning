// วิธีการส่งค่าอากิวเมนต์ => ไปยัง Fn จัดการ Event
import React from "react";

// แบบที่ 1: เขียนแบบ class
// export class Calculator extends React.Component {
//     n1 = 15
//     n2 = 5

//     calculate = (opj) => {
//         let c = `${this.n1} ${opj} ${this.n2}`
//         let r = eval(c)

//         alert(`${c} = ${r}`)
//     }

//     render() {
//         return (
//             <div style={{textAlign: 'center', margin: '20'}}>
//                 <span>{this.n1}</span>&nbsp;
//                 <button onClick={() => this.calculate('+')}>+</button>
//                 <button onClick={() => this.calculate('-')}>-</button>
//                 <button onClick={this.calculate.bind(this, '*')}>*</button>
//                 <button onClick={this.calculate.bind(this, '/')}>/</button>
//                 <span>{this.n2}</span>
//             </div>
//         )
//     }
//}



// แบบที่ 2: เขียนแบบ components
export function Calculator() {
    const n1 = 15
    const n2 = 5

    const calculate = (opj) => {
        
        let c = `${n1} ${opj} ${n2}`
        let r = eval(c)

        alert(`${c} = ${r}`)
    }

        return (
            <div style={{textAlign: 'center', margin: '20'}}>
                <span>{n1}</span>&nbsp;
                <button onClick={() => calculate('+')}>+</button>
                <button onClick={() => calculate('-')}>-</button>
                <button onClick={() => calculate('*')}>*</button>
                <button onClick={() => calculate('/')}>/</button>
                <span>{n2}</span>
            </div>
        )
    
}


import React from "react";

function RefsArray() {

    const table = React.useRef();
    const tr = React.useRef([]);

    const data = [
                    ['JavaScript', 100],
                    ['React', 200],
                    ['React Native', 300],
                    ['Laravel', 400]
                ]

    const onClickButton = (i) => {
        const index = tr.current[i].rowIndex
        table.current.deleteRow(index)
    }

    const onMouseOverRow = (i) => {
        tr.current[i].style.backgroundColor = 'yellow'
    }

    const onMouseOutRow = (i) => {
        tr.current[i].style.backgroundColor = 'white'
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, i) => {
                        return(

                            <tr ref={ el => tr.current[i] = el }
                                onMouseOver={() => onMouseOverRow(i)}
                                onMouseOut={() => onMouseOutRow(i)}
                            >
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                                <td><button onClick={() => onClickButton(i)}>Delete</button></td>
                            </tr> 
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}

export default RefsArray;
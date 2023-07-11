import React from "react";

export default function Table() {
    const data = [
                    [`JavaScript`, 100],
                    [`React`, 150],
                    [`React Native`, 180],
                    [`So test`, 20000],
                    [`ER`, 15400]
    ]


    const onMoveOverRow = (ev) => {
        ev.target.parentNode.style.backgroundColor = 'yellow';
      };
      
      const onMoveOutRow = (ev) => {
        ev.target.parentNode.style.backgroundColor = 'white';
      };
      


    return(
        <center>
        <hr/>
        <table>
            <tr>
                <th>Product</th>
                <th>Price</th>
            </tr>
            {
                data.map(item =>{
                    return(
                        <tr onMouseOver={onMoveOverRow} 
                            onMouseOut={onMoveOutRow}   >
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                        </tr>
                    )
                })
                
            }
        </table>
        </center>
    )
}
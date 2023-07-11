import React, { useState } from "react";

function MessageBox(){

    let [text, setText] = useState('Hello world');
    let [size, setSize] = React.useState(16)


    const onClickSetText = () => {
        let t = prompt('กำหนดข้อความ');
        if(t){
            setText(t)
        }
    }

    const onClickZoomIn = () => {
        let newsize = size + 2
        setSize(newsize)
    }

    let msgboxSyle = {
        display: 'inline-block',
        width: 350,
        fontSize: size,
        backgrounhdColor: '#ccc',
        padding: 5,
        textAlign: 'left'
    }


    return(
        <div style={{textAlign:'center', marginTop: 20}}>
            <div style={msgboxSyle}>{text}</div><br/>
            <button onClick={onClickSetText}>ข้อความ</button>&nbsp;
            <button onClick={onClickZoomIn}>เพิ่มขนาด</button>&nbsp;
            <button onClick={() => setSize(size - 2)}>ลดขนาด</button>&nbsp;
        </div>
    )
}

export default MessageBox
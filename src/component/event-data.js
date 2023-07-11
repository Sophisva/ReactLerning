import React from "react";

export class EventObject1 extends React.Component{
    onClickStartStop = (ev) => {
        let t = ev.target.innerText
        let s = (t === 'Start') ? 'Stop' : 'Start'
        ev.target.innerText = s
    }

    onClickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)

        alert(`${t} = ${r}`)
    }


    onClickBySo = (ev) => {
        let t = ev.button;
    
        if (t === 0) {
            alert(`คลิกซ้ายมาใช่ม๊าา...${t}`);
        } else if (t === 1) {
            alert(`คลิกตรงกลางหย๋อออ...${t}`);
        } else if (t === 2) {
            alert(`คลิกขวาใช่ประโยชน์...${t}`);
        }
    };


    render(){

        return(
            <div style={{textAlign: 'center', marginTop: 20}}>
                <button onClick={(ev) => this.onClickStartStop(ev)}>
                    Start
                </button>
                <br/>
                <br/>


                <button onClick={(ev) => this.onClickAdd(ev)}>
                    10+20
                </button>
                <br/>
                <br/>


                <button onClick={this.onClickAdd.bind(this)}>
                    30*40
                </button>
                <br/>
                <br/>

                <button onClick={(ev) => this.onClickBySo(ev)}>
                    By So
                </button>
                
            </div>
        )

    }
        
    
}
import { useState } from "react";


function Serector(props) {
    const Text = [
        {id:0, serector:props.Serec0},
        {id:1, serector:props.Serec1},
        {id:2, serector:props.Serec2},
        {id:3, serector:props.Serec3},
        {id:4, serector:props.Serec4},
        {id:5, serector:props.Serec5},
    ]
    const [Textnum, setTextnum] = useState(0)
    const [Resultnum, setResultnum] = useState(0)
    function selec1() {
        props.Numchanges(prevState => prevState + 1)
        setResultnum(prevState => prevState + 1)
    }
    function selec2() {
        setTextnum(prevState => prevState + 1)
        setResultnum(prevState => prevState + 10)
    }

    const SerectorOut = Text.slice(0, props.buttonIndex)
        
    return(
        <>
            <p>{props.Quest}</p>
            {SerectorOut.map((button) => 
            <button key={button.id} onClick={selec1}>{button.serector}</button>
            )}
        </>
    )
}

export default Serector;
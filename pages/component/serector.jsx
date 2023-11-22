import { useState } from "react";

const Quest = [
    "何を調べますか", "目的は何ですか", "誰を検査しますか","検体に損傷はありますか","調べたい続柄はなんですか", ""
]
const Text = [
    {serector1:"選択肢1-1", serector2:"選択肢1-2", serector3:"選択肢1-3", serector4:"選択肢1-4", serector5:"選択肢1-5"},
    {serector1:"選択肢2-1", serector2:"選択肢2-2", serector3:"選択肢2-3"},
    {serector1:"選択肢3-1", serector2:"選択肢3-2", serector3:""},
    {serector1:"選択肢3-1", serector2:"選択肢3-2", serector3:""},
    {serector1:"選択肢3-1", serector2:"選択肢3-2", serector3:""},
    {serector1:"確認", serector2:"申し込む", serector3:""},
]

function Serector(props) {
    const [Textnum, setTextnum] = useState(0)
    const [Resultnum, setResultnum] = useState(0)
    function selec1() {
        setTextnum(prevState => prevState + 1)
        setResultnum(prevState => prevState + 1)
    }
    function selec2() {
        setTextnum(prevState => prevState + 1)
        setResultnum(prevState => prevState + 10)
    }
    console.log(Textnum)
    console.log(Resultnum)
    return(
        <div>
            <div>{Quest[Textnum]}</div>
            <button onClick={selec1}>{Text[Textnum].serector1}</button>
            <button onClick={selec2}>{Text[Textnum].serector2}</button>
            <button>{Text[Textnum].serector3}</button>
            <button>{Text[Textnum].serector4}</button>
            <button>{Text[Textnum].serector5}</button>
        </div>
    )
}

export default Serector;
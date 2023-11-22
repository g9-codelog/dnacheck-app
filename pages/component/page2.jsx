import Serector from "./serector";

function Page2(props) {
    function Next() {
        props.Numchanges(2)
    }
    return (
        <>
            <button onClick={Next}>ボタン２</button>
        </>
    )
}

export default Page2;
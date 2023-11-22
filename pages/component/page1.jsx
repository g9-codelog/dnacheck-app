import Serector from "./serector";

function Page1(props) {
    function Next(e) {
        props.NumChange(1)
    }
    return (
        <>
            <button onClick={Next}>ボタン１</button>
        </>
    )
}

export default Page1;
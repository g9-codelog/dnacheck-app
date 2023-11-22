import Serector from "./serector";

function Page1(props) {
    function Next(x) {
        props.NumChanges(x)
    }
    return (
        <>
            <Serector
                Quest = {"質問"}
                buttonIndex = {3}
                Serec0 = {"あああ"}
                Serec1 = {"いいい"}
                Serec2 = {"ううう"}
                Numchanges = {Next}
            />
            <button onClick={Next}>ボタン１</button>
        </>
    )
}

export default Page1;
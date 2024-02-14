import {useState} from 'react' 

/*
인증번호 6자리 "000000"과 "인증번호전송"이라는 버튼을 만들고, 버튼 클릭시 인증번호를 만들어서
인증번호 6자리가 변경되도록 적용해 주세요.
1-1) let과 document.getElementById()를 사용해 주세요.
1-2) state를 사용해 주세요.
*/
export default function ClassQuizPage05_03() {
    const [number, setNumber] = useState("000000")
    const [btntext, setBtnText] = useState("인증번호전송")
    const change = () => {
        let random = (Math.floor(Math.random()*1000000)).toString().padStart(6, "0")
        setNumber(random)
        setBtnText("인증번호 재전송")
    }
    return(
        <div>
            <div>{number}</div>
            <button id="btn" onClick={change}>{btntext}</button>
        </div>
    )
}
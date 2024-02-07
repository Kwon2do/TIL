import {useState} from 'react' 

export default function ClassQuizPage05_01() {
    // 1-1 document.getElementById() 사용
    /*
    const change = () => {
         if(document.getElementById("btn").innerText == "안녕하세요")
             document.getElementById("btn").innerText = "반갑습니다"
         else    
             document.getElementById("btn").innerText = "안녕하세요"
    }
    */
    
    // 1-2 state 사용
    const [btntext, setBtnText] = useState("안녕하세요")
    const change = () => {
        if(btntext == "안녕하세요") {
            setBtnText("반갑습니다")
        }
        else {
            setBtnText("안녕하세요")
        }
    }
    return(
        <button id="btn" onClick={change}>{btntext}</button>
    )
}

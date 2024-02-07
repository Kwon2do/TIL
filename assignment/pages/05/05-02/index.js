import {useState} from 'react' 

export default function ClassQuizPage05_02() {
    const [count, setCount] = useState(0)
    const [btntext, setBtnText] = useState("카운트올리기")
    const change = () => {
        setCount(count+1)
    }
    return(
        <div>
            <div>{count}</div>
            <button id="btn" onClick={change}>{btntext}</button>
        </div>
    )
}
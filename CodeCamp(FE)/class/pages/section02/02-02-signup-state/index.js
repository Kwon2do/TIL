import { useState } from "react"

export default function SignupStatePage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    function onChangeEmail(event) {

        console.log(event) //나의 행동
        console.log(event.target) //작동된 태그
        console.log(event.target.value) //작동된 태그에 입력된 값
        
       setEmail(event.target.value);
    }
    
    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onClickSignup (event) {
        console.log(email) // 진짜 포장이 잘 되었는지 확인하기
        console.log(password)
        //1. 검증하기
        if(!email.includes("@")) {
            setEmailError("이메일이 올바르지 않습니다. @가 없음")
        }
        else{
        //2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수. 즉, API)

        //3. 성공알림 보여주기
        alert("회원가입을 축하합니다!!")
        }
    }
    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail}></input>
            비밀번호: <input type="password" onChange={onChangePassword}></input>
            <button onClick={onClickSignup}>회원가입</button>
            {/* <div id="myerror"></div> ==> 옛날방식 */} 
            <div>{emailError}</div>
        </div>
    )

}
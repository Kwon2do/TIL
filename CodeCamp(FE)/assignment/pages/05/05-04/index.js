/*
회원가입 화면을 다음의 조건에 맞게 만들어 주세요.
(이메일과 비밀번호 입력창, 비밀번호확인 입력창, 가입하기 버튼 총 4개를 각각 만들어 주세요.)
 각각의 입력값을 state 변수(state 이름은 스스로 결정해 주세요)에 저장해 주세요.
4-1) state를 사용해 주세요.
4-2) 가입하기 버튼을 누르면 조건문을 활용하여 에러를 검증해 주세요.
          ⇒ 조건1) 이메일에 @가 없으면 에러입니다.
          ⇒ 조건2) 비밀번호와 비밀번호확인이 다르면 에러입니다.
          ⇒ 조건3) 에러가 없는 입력에 해당하는 state는 에러를 제거(빈값으로 변경) 합니다.
4-3) 발생한 에러를 빨간색으로 입력창 하단에 표기해 주세요.
*/

import { useState } from "react";
import { Wrapper, Error, Group } from "../../../styles/section05";

export default function ClassQuizPage05_04() {
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();
  const [passwordError, setPasswordError] = useState();
  const [button, setButton] = useState("가입하기");

  const check = () => {
    console.log(email)
    console.log(password)
    console.log(repassword)
    if (email && !email.includes('@')) {
      setEmailError("@가 포함되어있지 않습니다!");
    }
    else {
      setEmailError("");
    }
    if (password != repassword) {
      setPasswordError("비밀번호가 서로 일치하지 않습니다!");
    }
    else {
      setPasswordError("");
    }
  };
  return (
    <Wrapper>
      <Group>
        <input type="text" onChange={(event)=>{
            setEmail(event.target.value)
        }}></input>
        <Error>{emailError}</Error>
      </Group>
      <Group>
        <input type="password" onChange={(event)=>{
            setPassword(event.target.value)
        }}></input>
        <Error>{passwordError}</Error>
      </Group>
      <Group>
        <input type="password" onChange={(event)=>{
            setRePassword(event.target.value)
        }}></input>
        <Error>{passwordError}</Error>
      </Group>
      <input type="button" value={button} onClick={check}></input>
    </Wrapper>
  );
}

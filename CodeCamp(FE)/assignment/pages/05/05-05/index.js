/*
1) 아이콘 등 모든 그림은 피그마과 동일하게 만들어 주세요.
2) state, setState, useState를 사용하여 이메일과 비밀번호가 빈칸인지 검증하고, 빈칸이라면 그림과 같은 메시지를 나타나게 만들어 주세요.
3) 이메일은 @가 포함되어있는지, 비밀번호는 8자리가 넘는지 확인해 주세요
4) 맨 윗줄의 와이파이, 배터리 등은 만들지 않습니다.
*/
import { useState } from "react";
import {
  Wrapper,
  Wrapper__title,
  Logo,
  Title,
  Input,
  InputWrapper,
  EmailError,
  PasswordError,
  Group,
  ErrorWrapper,Delete,Login,ItemWrapper,
  Item,KakaoLogin,KakaoWrapper,KakaoLogo
} from "../../../styles/section05-05";

export default function ClassQuizPage05_05() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const join = () => {
    if(!email) {
      setEmailError("이메일을 입력해주세요!")
    }
    else if(!email.includes("@")){
      setEmailError("이메일 주소를 다시 확인해주세요!")
    }
    else {
      setEmailError("")
    }
    if(!password) {
      setPasswordError("비밀번호를 입력해주세요!")
    }
    else if(password.length < 8) {
      setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
    }
    else {
      setPasswordError("")
    }
    if(!emailError && !passwordError) {
      console.log(email)
      console.log(password)
      alert("로그인 완료!")
    }
  }

  return (
    <Wrapper>
      <Wrapper__title>
        <Logo src="/img/TitleLogo.png"></Logo>
        <Title>잇츠로드</Title>
      </Wrapper__title>
      <InputWrapper>
        <Group>
          <Input type="text" onChange={(event)=>{
            setEmail(event.target.value)
          }}></Input>
          <Delete src="/img/delete.png"></Delete>
        </Group>
        <ErrorWrapper>
          <EmailError>{emailError}</EmailError>
        </ErrorWrapper>
      </InputWrapper>
      <InputWrapper>
        <Group>
          <Input type="password" onChange={(event)=>{
            setPassword(event.target.value)
          }}></Input>
          <Delete src="/img/delete.png"></Delete>
        </Group>
        <ErrorWrapper>
          <PasswordError>{passwordError}</PasswordError>
        </ErrorWrapper>
      </InputWrapper>
      <Login onClick={join}>로그인</Login>
      <ItemWrapper>
        <Item>이메일 찾기</Item>
        <Item>|</Item>
        <Item>비밀번호 찾기</Item>
        <Item>|</Item>
        <Item>회원가입</Item>
      </ItemWrapper>
      <KakaoWrapper>
        <KakaoLogin onClick={join}><KakaoLogo src="/img/KakaoLogo.png"></KakaoLogo>카카오톡으로 로그인</KakaoLogin>
      </KakaoWrapper>
    </Wrapper>
  );
}

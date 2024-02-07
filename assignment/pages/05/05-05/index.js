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
  Error,
  Group,
} from "../../../styles/section05-05";

export default function ClassQuizPage05_05() {
  return (
    <Wrapper>
      <Wrapper__title>
        <Logo src="/img/TitleLogo.png"></Logo>
        <Title>잇츠로드</Title>
      </Wrapper__title>

      <InputWrapper>
        <Group>
          <Input type="text"></Input>
          <img src="/img/delete.png" width="20px" height="20px"></img>
        </Group>
      </InputWrapper>
      <Error>이메일 주소를 다시 확인해주세요!</Error>
      <InputWrapper>
        <Input type="text"></Input>
      </InputWrapper>
    </Wrapper>
  );
}

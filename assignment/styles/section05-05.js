import "@emotion/react";
import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 640px;
  height: 1138px;
  display: flex;
  flex-direction: column;
  background-image: url("/img/background.png");
  padding:0px 30px 0px 30px;
`;
export const Wrapper__title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px;
`;

export const Logo = styled.img``;

export const Title = styled.label`
  width: 221px;
  height: 87px;
  font-size: 60px;
  font-weight: 700;
  font-family: Noto Sans KR;
  color: #ffffff;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 80%;
  font-size: 24px;
  color: #fff;
  border: none;
  background: none;
  outline: none;
`;

export const InputWrapper = styled.div`
    width: 540px;
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
  margin-bottom: 10px;
`;

export const Group = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`
export const Error = styled.label`
  color: red;
`;

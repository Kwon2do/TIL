import "@emotion/react";
import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 640px;
  height: 1138px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/img/background.png");
  padding: 0px 50px 0px 50px;
  background-color: rgba(0, 0, 0, 0.55);
  background-blend-mode: multiply;
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
  width: 100%;
  font-size: 24px;
  color: #fff;
  border: none;
  background: none;
  outline: none;
  border-bottom: 1px solid #7d7d7d;
  margin-bottom: 10px;
`;
export const Delete = styled.img`
  position: relative;
  right: 20px;
  width: 20px;
  height: 20px;
`;
export const InputWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 10px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const EmailError = styled.label`
  color: #ff1b6d;
`;

export const PasswordError = styled.label`
  color: #ff1b6d;
`;

export const Login = styled.button`
  width: 540px;
  height: 76px;
  border-radius: 38px;
  background-color: rgba(255, 27, 109, 0.6);
  font-family: Noto Sans KR;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  border: none;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;
export const Item = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  color: #ffffff;
  padding: 0px 20px 0px 20px;
`;

export const KakaoWrapper = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-top : 50px;
`

export const KakaoLogin = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: #ffe100;
  width: 540px;
  height: 76px;
  border-radius: 38px;
  border: 2px solid rgba(250, 225, 0, 0.6);
  font-family: Noto Sans KR;
  font-size: 26px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
`;

export const KakaoLogo = styled.img`
    width:32.45px;
    position:relative;
    right:15px;
    top:6px;
`
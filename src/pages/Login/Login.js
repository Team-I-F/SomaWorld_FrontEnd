import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import arrowDown from "../../assets/arrow-down.png";
import { useLoginMutation } from "../../services/auth/mutation";

const Login = () => {
  const [loginUserData, setLoginUserData] = useState({
    id: "",
    pw: "",
  });

  const loginMutate = useLoginMutation(loginUserData);

  const handleLoginUserData = (e) => {
    const { name, value } = e.target;
    setLoginUserData({ ...loginUserData, [name]: value });
    console.log(loginUserData);
  };

  return (
    <S.Container>
      <S.LoginForm>
        <Link to={`/`}>
          <S.LoginIcon
            style={{ transform: "rotate(90)" }}
            src={arrowDown}
            alt="아으"
          />
        </Link>

        <S.Frame>
          <S.Title>로그인</S.Title>
          <S.LoginContainer>
            <S.FormField>
              <S.Label>아이디</S.Label>
              <S.Input
                type="text"
                name="id"
                placeholder="아이디"
                onChange={handleLoginUserData}
              />
            </S.FormField>
            <S.FormField>
              <S.Label>비밀번호</S.Label>
              <S.Input
                type="password"
                name="pw"
                placeholder="비밀번호"
                onChange={handleLoginUserData}
              />
            </S.FormField>
            <div>
              <Link to="/" style={{ color: "#0047FF" }}>
                <p style={{ fontSize: "18px", marginTop: "30px" }}>
                  아이디/ 비밀번호를 잊으셨나요?
                </p>
              </Link>
            </div>

            <S.ButtonContainer>
              <S.Button type="submit" onClick={() => loginMutate.mutate()}>
                로그인
              </S.Button>
            </S.ButtonContainer>
          </S.LoginContainer>
        </S.Frame>
      </S.LoginForm>
    </S.Container>
  );
};

export default Login;

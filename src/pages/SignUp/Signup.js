import React, { useState } from "react";
import customAxios from "../../utils/axios/axios";
import * as S from "./style";
import arrowDown from "../../assets/arrow-down.png";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      const response = await customAxios.post("/register", {
        id: userId,
        pw: password,
        name: name,
        nickname: nickname,
      });
      if (response.status === 200) {
        console.log("회원가입이 완료되었습니다.");
      }
    } catch (error) {
      console.log(error);
      setError("회원가입에 실패하였습니다.");
    }
  };

  return (
    <S.Container>
      <S.SignupForm>
        <Link to={"/"} onClick={(e) => e.stopPropagation()}>
          <S.BackIcon
            style={{ transform: "rotate(90)" }}
            src={arrowDown}
            alt="아으"
          />
        </Link>

        <S.Frame>
          <S.Title>회원가입</S.Title>

          <div style={{ display: "flex" }}>
            <p style={{ fontSize: "18px" }}>이미 계정이 있으신가요?</p>
            <Link
              to={`/login`}
              style={{ color: "#0047FF", marginLeft: "10px" }}
            >
              <p style={{ fontSize: "18px" }}>로그인</p>
            </Link>
          </div>

          <S.SignUpContainer>
            <S.FormField>
              <S.Label>이름</S.Label>
              <S.Input
                id="name"
                placeholder="이름"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </S.FormField>
            <S.FormField>
              <S.Label>닉네임</S.Label>
              <S.Input
                id="ninkname"
                placeholder="닉네임"
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </S.FormField>
            <S.FormField>
              <S.Label>아이디</S.Label>
              <S.InputWrapper>
                <S.Input
                  id="id"
                  placeholder="아이디"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <S.InputButton>중복확인</S.InputButton>
              </S.InputWrapper>
            </S.FormField>

            <S.FormField>
              <S.Label>비밀번호</S.Label>
              <S.Input
                id="password"
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.FormField>

            <S.ButtonContainer>
              <S.Button type="button" onClick={handleSignup}>
                회원가입
              </S.Button>
            </S.ButtonContainer>
          </S.SignUpContainer>
        </S.Frame>
      </S.SignupForm>
      {error && <p>{error}</p>}
    </S.Container>
  );
};

export default SignupPage;

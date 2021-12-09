import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Wrapper>
        <LogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THREE</SignUp>
        <Description>
          {" "}
          bfdbfddfgbhgdhgfgfdhhfgbtbtrbhrfbrrbhrfbgtrhbtgbfr
        </Description>
        <LogoTwo src="/images/cta-logo-two.svg" />
      </Wrapper>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
  align-itens: top;
  display: flex;
  justify-content: center;
  &:before {
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
const Wrapper = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
const LogoOne = styled.img``;
const LogoTwo = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 10px;
  margin: 10px 0;
  &:hover {
    background: #483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

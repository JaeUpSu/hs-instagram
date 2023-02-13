import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;
export const SignUpBox = styled.div`
  background-color: ${(props) => props.theme.boxColor};
  border: 1px solid rgb(219, 219, 219);
  height: 100%;
  max-height: 520px;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  text-align: center;
  margin-top: 20px;
  font-weight: 900px;
  font-size: 30px;
`;
export const SubTitle = styled.p`
  color: ${(props) => props.theme.fontColor};
  opacity: 0.8;
  text-align: center;
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: $;
`;
export const Hr = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(169, 169, 169);
  margin-bottom: 20px;
  div {
    width: 100%;
    height: 1px;
    background-color: lightgray;
    margin: 20px;
  }
  span {
    font-weight: 600;
    font-size: 12px;
    width: 100%;
    margin: 10px 0;
    max-width: 50px;
    display: flex;
    justify-content: center;
  }
`;
export const Input = styled.input`
  border: ${(props) => props.theme.fontColor} solid 1px;
  width: 100%;
  max-width: 250px;
  height: 35px;
  margin: 2px;
  border: 1px solid rgb(219, 219, 219);
  background-color: ${(props) => props.theme.inputColor};
  padding-left: 10px;
`;

export const Button = styled.input`
  border: ${(props) => props.theme.fontColor} solid 1px;
  width: 100%;
  max-width: 260px;
  height: 35px;
  margin: 15px 0;
  border-radius: 5px;
  text-align: center;
  background-color: #27c4f5;
  color: #ffffff;
  border-color: transparent;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #2774a5;
  }
`;

export const FaceBookJoinBtn = styled.div`
  border: ${(props) => props.theme.fontColor} solid 1px;
  width: 100%;
  max-width: 260px;
  height: 35px;
  margin: 15px 0;
  border-radius: 5px;
  text-align: center;
  background-color: #27c4f5;
  color: #ffffff;
  border-color: transparent;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #2774a5;
  }
  span {
    margin-left: 10px;
  }
`;

export const OtherServiceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #3981f1;
  font-weight: bold;
  height: 100%;
  max-height: 140px;
`;
export const FacebookLoginLink = styled.div`
  margin-top: 20px;
  font-size: 15px;
  cursor: pointer;
`;
export const PasswordForgetLink = styled.div`
  margin-top: 20px;
  font-size: 12px;
  cursor: pointer;
`;
export const LoginBox = styled.div`
  background-color: ${(props) => props.theme.boxColor};
  border: 1px solid rgb(219, 219, 219);
  margin: 20px 0;
  height: 100%;
  max-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
`;
export const LoginLink = styled.a`
  color: #27c4f5;
  margin-left: 5px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #2784a5;
  }
`;

export const ModeBox = styled.div`
  display: flex;
  justify-content: center;

  button {
    color: ${(props) => props.theme.fontColor};
    background-color: transparent;
    border: 0px;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.5;
  }
`;

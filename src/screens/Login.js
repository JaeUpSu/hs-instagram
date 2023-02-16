import { darkModeVar, isLoggedInVar } from "apollo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faInstagram,
  faInstagramSquare,
  faInstalod,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import routes from "routes";
import * as LoginComponents from "components/LoginComponets";

function Login() {
  const onSubmit = (event) => {
    event.preventDefault();
    isLoggedInVar(true);
    console.log("login click");
  };

  return (
    <LoginComponents.Container>
      <LoginComponents.Wrapper>
        <LoginComponents.LoginBox>
          <LoginComponents.Title>
            Instagram{"   "}
            <FontAwesomeIcon icon={faInstagram} />
          </LoginComponents.Title>
          <LoginComponents.Form onSubmit={onSubmit}>
            <LoginComponents.Input
              type="email"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <LoginComponents.Input type="password" placeholder="비밀번호" />
            <LoginComponents.Button type="submit" value="로그인" />
          </LoginComponents.Form>
          <LoginComponents.Hr>
            <div></div>
            <span>또는</span>
            <div></div>
          </LoginComponents.Hr>
          <LoginComponents.OtherServiceBox>
            <LoginComponents.FacebookLoginLink>
              <FontAwesomeIcon icon={faFacebookSquare} /> Facebook으로 로그인
            </LoginComponents.FacebookLoginLink>
            <LoginComponents.PasswordForgetLink>
              비밀번호를 잊으셨나요?
            </LoginComponents.PasswordForgetLink>
          </LoginComponents.OtherServiceBox>
        </LoginComponents.LoginBox>
        <LoginComponents.JoinBox>
          계정이 없으신가요?
          <LoginComponents.JoinLink>
            <Link to={routes.signUp}>가입하기</Link>
          </LoginComponents.JoinLink>
        </LoginComponents.JoinBox>
        <LoginComponents.ModeBox>
          <button onClick={() => darkModeVar(true)}> Dark Mode</button>
          <button onClick={() => darkModeVar(false)}> Light Mode</button>
        </LoginComponents.ModeBox>
      </LoginComponents.Wrapper>
    </LoginComponents.Container>
  );
}

export default Login;

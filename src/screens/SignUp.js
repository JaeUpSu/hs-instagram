import { darkModeVar } from "apollo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form"; // npm i react-hook-form --save
// import { useMutation } from "@tanstack/react-query";
// import { signup } from "../api";

import routes from "routes";
import * as SignUpComponents from "components/SignUpComponets";

function SignUp() {
  return (
    <SignUpComponents.Container>
      <SignUpComponents.Wrapper>
        <SignUpComponents.SignUpBox>
          <SignUpComponents.Title>
            Instagram{"   "}
            <FontAwesomeIcon icon={faInstagram} />
          </SignUpComponents.Title>
          <SignUpComponents.OtherServiceBox>
            <SignUpComponents.SubTitle>
              친구들의 사진과 동영상을 보려면 가입하세요.
            </SignUpComponents.SubTitle>
            <SignUpComponents.FaceBookJoinBtn>
              <FontAwesomeIcon icon={faFacebookSquare} />{" "}
              <span>Facebook으로 회원가입</span>
            </SignUpComponents.FaceBookJoinBtn>
          </SignUpComponents.OtherServiceBox>
          <SignUpComponents.Hr>
            <div></div>
            <span>또는</span>
            <div></div>
          </SignUpComponents.Hr>
          <SignUpComponents.Form>
            <SignUpComponents.Input
              type="email"
              placeholder="전화번호 또는 이메일"
            />
            <SignUpComponents.Input type="text" placeholder="성명" />
            <SignUpComponents.Input type="text" placeholder="사용자 이름" />
            <SignUpComponents.Input type="password" placeholder="비밀번호" />
            <SignUpComponents.info>
              저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 instagram 에
              업로드했을 수도 있습니다.
              <SignUpComponents.more>더 알아보기</SignUpComponents.more>
            </SignUpComponents.info>
            <SignUpComponents.Button type="submit" value="가입" />
          </SignUpComponents.Form>
        </SignUpComponents.SignUpBox>
        <SignUpComponents.LoginBox>
          계정이 있으신가요?
          <SignUpComponents.LoginLink>
            <Link to={routes.home}>로그인</Link>
          </SignUpComponents.LoginLink>
        </SignUpComponents.LoginBox>
        <SignUpComponents.ModeBox>
          <button onClick={() => darkModeVar(true)}> Dark Mode</button>
          <button onClick={() => darkModeVar(false)}> Light Mode</button>
        </SignUpComponents.ModeBox>
      </SignUpComponents.Wrapper>
    </SignUpComponents.Container>
  );
}

export default SignUp;

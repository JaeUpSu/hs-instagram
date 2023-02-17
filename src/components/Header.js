import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { faPaperPlane, faUser } from "@fortawesome/free-regular-svg-icons";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 0;

  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Column = styled.div``;

const Icon = styled.span`
  margin: 0px 10px;
  margin-left: 15px;
  cursor: pointer;
  &:nth-child(1) {
    margin-left: 10px;
  }
`;

const Button = styled.span``;

function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Icon>
          <Column>
            <FontAwesomeIcon size={"2x"} icon={faInstagram} />
          </Column>
        </Icon>
        <Column>
          <Icon>
            <FontAwesomeIcon size={"lg"} icon={faHome} />
          </Icon>
          <Icon>
            <FontAwesomeIcon size={"lg"} icon={faPaperPlane} />
          </Icon>
          <Icon>
            <FontAwesomeIcon size={"lg"} icon={faUser} />
          </Icon>
        </Column>
      </Wrapper>
    </HeaderContainer>
  );
}
export default Header;

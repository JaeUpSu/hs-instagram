import styled from "styled-components";
const Avater = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};

  background-size: cover;
  background-position: center;
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  padding: 3px 0px;
`;
const Author = styled.b`
  padding-right: 5px;
  width: 90px;
  font-weight: 800;
`;
const Contents = styled.span``;

function Comment({ caption, user }) {
  return (
    <Container>
      <Avater style={{ backgroundImage: `url(${user?.img})` }} />
      <Author>{user?.username}</Author>
      <Contents>{caption}</Contents>
    </Container>
  );
}

export default Comment;

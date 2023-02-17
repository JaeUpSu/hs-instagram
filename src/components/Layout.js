import styled from "styled-components";
import Header from "./Header";

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 1000px;
  margin-top: 45px;
`;
function Layout({ children }) {
  // children 에 Home 들어와있음
  console.log(children);
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}

export default Layout;

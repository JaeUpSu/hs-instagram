import styled from "styled-components";

const CommentsContainer = styled.div``;
const Comments = styled.p`
  width: 100%;
  padding: 5px 20px;
  font-size: 12px;
`;
const CommentsAuthor = styled.b`
  font-weight: 800;
  padding-right: 5px;
`;
const Replys = styled.div`
  font-size: 13px;
  color: #666666;
  width: 100%;
  padding: 5px 20px;
  font-size: 12px;
  padding-bottom: 15px;
`;
const ReplyCounts = styled.p``;
const ReplysItem = styled.div`
  padding-top: 5px;
`;
const ReplysAuthor = styled.b`
  padding-right: 5px;
  font-weight: 800;
`;
const ReplysContents = styled.span``;
const ReplysLine = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  div {
    width: 100%;
    height: 1px;
    background-color: lightgray;
    margin: 10px 0;
  }
`;

const ReplysInputBox = styled.div`
  display: flex;
  align-items: center;
`;

const ReplysInputProfile = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};

  background-image: url(https://cdn.eyesmag.com/content/uploads/sliderImages/2021/07/19/005-d020cb23-f09f-4f55-bfca-b2540f194ea2.jpg);
  background-size: cover;
  background-position: center;
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;
const ReplysEnterBtn = styled.button`
  background: transparent;
  border: 0px;
  width: 50px;
  color: #2493ff;
  cursor: pointer;
`;

function CommentsLayout() {
  return (
    <CommentsContainer>
      <Comments>
        <CommentsAuthor>HyeonSu </CommentsAuthor>
        이재용 삼성전자 회장이 수사받을 당시 변호인들이 한겨레신문을 상대로
        제기한 정정보도 청구 소송에서 다시 한번 패소했다. 서울중앙지법
        민사8-2부(김봉원 강성훈 권순민 부장판사)는 16일 이 회장의 전 변호인인
        최재경, 이동열 변호사가 한겨레신문을 상대로 낸 정정보도 청구 소송에서
        1심과 같이 원고 패소로 판결했다. 한겨레신문은 2020년 9월 16일 검찰
        관계자를 인용해 "이 변호사가 이 부회장의 구속영장이 청구되기 전 수사
        검사에게 연락해 '삼성생명 관련 부분은 예민하니 빼 달라. 최 변호사
        요청이다'라고 말했다"고 보도했다.
      </Comments>
      <Replys>
        <ReplyCounts>댓글 95개 모두 보기</ReplyCounts>
        <ReplysItem>
          <ReplysAuthor>작성자</ReplysAuthor>
          <ReplysContents>내용</ReplysContents>
        </ReplysItem>
        <ReplysItem>
          <ReplysAuthor>작성자</ReplysAuthor>
          <ReplysContents>내용</ReplysContents>
        </ReplysItem>
        <ReplysItem>
          <ReplysAuthor>작성자</ReplysAuthor>
          <ReplysContents>내용</ReplysContents>
        </ReplysItem>
        <ReplysItem>
          <ReplysAuthor>작성자</ReplysAuthor>
          <ReplysContents>내용</ReplysContents>
        </ReplysItem>
        <ReplysLine>
          <div />
        </ReplysLine>
        <ReplysInputBox>
          <ReplysInputProfile />
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder="Write a comment ..."
          />
          <ReplysEnterBtn>게시</ReplysEnterBtn>
        </ReplysInputBox>
      </Replys>
    </CommentsContainer>
  );
}

export default CommentsLayout;

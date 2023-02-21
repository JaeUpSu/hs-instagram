import styled from "styled-components";

const CommentsContainer = styled.div``;
const Comments = styled.div`
  font-size: 13px;
  color: #666666;
  width: 100%;
  padding: 5px 20px;
  font-size: 12px;
  padding-bottom: 15px;
`;
const CommentCounts = styled.p`
  margin-bottom: 10px;
`;
const CommentsItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  padding: 3px 0px;
`;
const CommentsAuthor = styled.b`
  padding-right: 5px;
  width: 90px;
  font-weight: 800;
`;
const CommentsContents = styled.span``;
const CommentsLine = styled.div`
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

const CommentsInputBox = styled.div`
  display: flex;
  align-items: center;
`;

const CommentsProfile = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};

  background-size: cover;
  background-position: center;
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;
const CommentsInputProfile = styled(CommentsProfile)``;
const CommentsEnterBtn = styled.button`
  background: transparent;
  border: 0px;
  width: 50px;
  color: #2493ff;
  cursor: pointer;
`;

function CommentsLayout({ comments, commentNumber, profileImg }) {
  return (
    <CommentsContainer>
      <Comments>
        <CommentCounts>댓글 {commentNumber}개 모두 보기</CommentCounts>
        {comments?.map((reply) => {
          console.log(reply.user.profileImg);
          return (
            <CommentsItem key={reply.id}>
              <CommentsProfile
                style={{ backgroundImage: `url(${reply.user.profileImg})` }}
              />
              <CommentsAuthor>{reply.user.username}</CommentsAuthor>
              <CommentsContents>{reply.payload}</CommentsContents>
            </CommentsItem>
          );
        })}
        <CommentsLine>
          <div />
        </CommentsLine>
        <CommentsInputBox>
          <CommentsInputProfile
            style={{ backgroundImage: `url(${profileImg})` }}
          />
          <input
            style={{ width: "85%" }}
            type="text"
            placeholder="Write a comment ..."
          />
          <CommentsEnterBtn>게시</CommentsEnterBtn>
        </CommentsInputBox>
      </Comments>
    </CommentsContainer>
  );
}

export default CommentsLayout;

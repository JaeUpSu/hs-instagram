import styled from "styled-components";
import { useState } from "react";
import Comment from "./Comment";

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
  cursor: pointer;
`;
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

const Avater = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};

  background-size: cover;
  background-position: center;
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

const CommentsInputProfile = styled(Avater)``;
const CommentsEnterBtn = styled.button`
  background: transparent;
  border: 0px;
  width: 50px;
  color: #2493ff;
  cursor: pointer;
`;

function CommentsLayout({ comments, commentNumber, img }) {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(!show);
  };

  return (
    <CommentsContainer>
      <Comments>
        <CommentCounts onClick={onShow}>
          {!show
            ? commentNumber > 0
              ? `댓글 ${commentNumber}개 모두 보기`
              : ``
            : `댓글 숨기기`}
        </CommentCounts>
        {show ? (
          comments?.map((reply, idx) => {
            return <Comment key={idx} {...reply} />;
          })
        ) : (
          <></>
        )}
        <CommentsLine>
          <div />
        </CommentsLine>
        <CommentsInputBox>
          <CommentsInputProfile style={{ backgroundImage: `url(${img})` }} />
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

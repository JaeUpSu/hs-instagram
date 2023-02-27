import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { comment } from "../api";

import styled from "styled-components";
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

const CommentsInputForm = styled.form`
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

function CommentsLayout({ comments, commentNumber, img, feed }) {
  const [show, setShow] = useState(false);
  const { register, watch, handleSubmit } = useForm();

  const onShow = () => {
    console.log(feed);
    setShow(!show);
  };

  const mutation = useMutation(comment, {
    onSuccess: () => {
      console.log("success post comment");
    },
    onError: () => {
      console.log("error post comment");
    },
  });

  const onSubmit = ({ caption }) => {
    const _user = feed.user.pk;
    const _feed = feed.pk;
    console.log(caption + " " + _user + " " + _feed);
    mutation.mutate({ caption, _user, _feed });
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
        <CommentsInputForm onSubmit={handleSubmit(onSubmit)}>
          <CommentsInputProfile style={{ backgroundImage: `url(${img})` }} />
          <input
            style={{ width: "85%" }}
            type="text"
            placeholder="Write a comment ..."
            {...register("caption")}
          />
          <CommentsEnterBtn type="submit">게시</CommentsEnterBtn>
        </CommentsInputForm>
      </Comments>
    </CommentsContainer>
  );
}

export default CommentsLayout;

import styled from "styled-components";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jibri from "../images/jibri.jpg";
import CommentsLayout from "components/Comments";
import { Link, useNavigate } from "react-router-dom";
import routes from "routes";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10px;
`;
const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;

  margin: 0 auto;
  box-shadow: 0 0 5px 1px rgb(0, 0, 0, 0.4);
`;
const FeedHeader = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  max-height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  padding-right: 20px;
  & > svg {
    cursor: pointer;
  }
`;
const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FeedHeaderLeftBox = styled(LeftBox)`
  & > div {
    cursor: pointer;
  }
  & > p {
    cursor: pointer;
  }
`;
const FeedActionsLeftBox = styled(LeftBox)`
  & > svg {
    margin-left: 20px;
    cursor: pointer;
  }
`;
const ProfileImg = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 35px;
  height: 35px;
  background-image: url(https://cdn.eyesmag.com/content/uploads/sliderImages/2021/07/19/005-d020cb23-f09f-4f55-bfca-b2540f194ea2.jpg);
  background-size: cover;
  background-position: center;
`;
const ProfileNick = styled.p`
  margin-left: 14px;
  transform: translateY(-15%);
  font-weight: bold;
  text-decoration-style: none;
`;
const Time = styled.span`
  font-size: 10px;
  margin-left: 15px;
  transform: translateY(-10%);
`;
const FeedPhoto = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${jibri});
  background-position: center;
  background-size: cover;
`;

const FeedActions = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  & > svg {
    cursor: pointer;
  }
`;

const Likes = styled.div`
  width: 100%;
  padding: 0 20px;
  font-weight: bold;
  font-size: 12px;
`;

const FeedBody = styled.p`
  width: 100%;
  padding: 5px 20px;
  font-size: 12px;
`;
const FeedAuthor = styled.b`
  font-weight: 800;
  padding-right: 5px;
`;

function Feed({ id, img, caption, user, likes_count, reviews }) {
  const [like, setLike] = useState(false);
  const [marking, setMarking] = useState(false);
  const navigate = useNavigate();

  const onLike = () => {
    setLike(!like);
  };
  const onMarking = () => {
    setMarking(!marking);
  };

  const onProfile = () => {
    navigate(`${routes.profile}`);
  };

  return (
    <Container>
      <FeedContainer>
        <FeedHeader>
          <FeedHeaderLeftBox>
            <Link to={`${routes.profile}`}>
              <ProfileImg
                // onClick={onProfile}
                style={{
                  backgroundImage: `url(${user.img})`,
                }}
              />
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#444" }}
              to={`${routes.profile}`}
            >
              <ProfileNick>{user.username}</ProfileNick>
            </Link>
            <Time>5 분전</Time>
          </FeedHeaderLeftBox>
          <FontAwesomeIcon size="2x" icon={Solid.faEllipsis} />
        </FeedHeader>
        <FeedPhoto
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
        <FeedActions>
          <FeedActionsLeftBox>
            <FontAwesomeIcon
              style={{
                color: true ? "tomato" : "inherit",
              }}
              size="2x"
              icon={like ? Solid.faHeart : faHeart}
              onClick={onLike}
            />
            <FontAwesomeIcon size="2x" icon={faComment} />
            <FontAwesomeIcon size="2x" icon={faPaperPlane} />
          </FeedActionsLeftBox>
          <FontAwesomeIcon
            size="2x"
            icon={marking ? Solid.faBookmark : faBookmark}
            onClick={onMarking}
          />
        </FeedActions>
        <Likes>좋아요 {likes_count}개</Likes>
        <div>
          <FeedBody>
            <FeedAuthor>{user.username}</FeedAuthor>
            {caption}
          </FeedBody>
          <CommentsLayout
            {...user}
            comments={reviews}
            commentNumber={reviews.length}
          />
        </div>
      </FeedContainer>
    </Container>
  );
}

export default Feed;

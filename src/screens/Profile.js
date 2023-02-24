import * as Solid from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faUserCircle,
  faHeart,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import routes from "routes";
import { thumbItems } from "images/thumbs";
// import { useParams } from "react-router-dom";

const Container = styled.div`
  padding-top: 25px;
  background-color: white;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;
  hegiht: 100%;

  margin: 0 auto;
  padding: 0px 20px;
  margin-bottom: 40px;
`;
const Footer = styled.div`
  width: 100%;
  height: 100px;
`;
const Header = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  max-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  padding-bottom: 15px;
  & > svg {
    cursor: pointer;
  }
`;

const HeaderNick = styled.p`
  margin-left: 40px;
  font-size: 23px;
  font-weight: 600;
  transform: translateY(-2px);
`;
const HeaderLeftBox = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRightBox = styled.div`
  & > svg {
    margin-left: 35px;
  }
`;
const Box = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
`;
const UserBox = styled(Box)`
  align-items: center;
  padding-bottom: 25px;
`;
const UserImg = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 105px;
  height: 105px;
  background-image: url(https://cdn.eyesmag.com/content/uploads/sliderImages/2021/07/19/005-d020cb23-f09f-4f55-bfca-b2540f194ea2.jpg);
  background-size: cover;
  background-position: center;
  margin-right: 25px;
`;

const UserDataBox = styled.div`
  margin-left: 65px;
  text-align: center;
`;
const UserDataColumn = styled.b`
  font-weight: 600;
  font-size: 24px;
`;
const UserDataValue = styled.p`
  font-size: 17px;
`;

const InfoBox = styled(Box)`
  flex-direction: column;
  padding: 5px 20px;
`;
const BtnBox = styled(Box)`
  align-items: center;
  padding-top: 15px;
  padding-bottom: 0px;
  &: button {
    margin-left: 30px;
  }
`;
const Btn = styled.button`
  border-radius: 5px;
  border-color: transparent;
  width: 200px;
  height: 35px;
  text-align: center;
  margin-right: 30px;
  font-weight: 600;
  cursor: pointer;
`;
const FollowBtn = styled(Btn)`
  background-color: #2493ff;
  color: white;
`;
const UserBtn = styled(Btn)`
  width: 40px;
`;

const Tab = styled.div`
  display: grid;
  padding: 3px 10px;
  padding-top: 10px;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px 2px;
  & > div {
    width: 175px;
    padding: 10px;

    display: flex;
    margin-right: 5px;
    justify-content: center;
    cursor: pointer;
    &.active {
      border-bottom: 2px solid #333333;
    }
    &:hover {
      background: #f9f9f9;
      opacity: 0.9;
    }
  }
`;

const FeedThumbBox = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 3px;
`;

const FeedThumbItem = styled.a`
  display: block; /* 영역적용위해 사용 */
  width: 100%;
  height: 100%;

  position: relative;
  cursor: pointer;

  &:hover div,
  &:focus div {
    opacity: 1;
  }
`;

const FeedThumb = styled.div`
  width: 180px;
  height: 200px;
  cursor: pointer;
`;
const FeedHiddenAction = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  position: absolute; /* 이미지와 겹치게 처리 */
  top: 0;
  left: 0;

  color: #fff;

  opacity: 0; /* 처음엔 안보이고 */

  transition: 0.3s;
  display: flex;

  justify-content: center;
  align-items: center;

  & > svg:nth-child(1) {
    margin-right: 10px;
  }
  & > svg:nth-child(2) {
    margin: 0 10px;
  }
`;
function Profile() {
  const navigate = useNavigate();
  const [follow, setFollow] = useState(false);
  const [alarm, setAlarm] = useState(false);
  const [tabItems, setTabItems] = useState([
    {
      logo: Solid.faTableCells,
      active: true,
    },
    {
      logo: Solid.faPlay,
      active: false,
    },
    {
      logo: faUserCircle,
      active: false,
    },
  ]);
  const [activeIdx, setActiveIdx] = useState(0);

  const [isLike, setIsLike] = useState([
    new Array(thumbItems[0].length).fill(false),
  ]);
  const [likes, setLikes] = useState(new Array(thumbItems[0].length).fill(12));
  const [comments, setComments] = useState(
    new Array(thumbItems[0].length).fill(4)
  );
  const onAlarm = () => {
    setAlarm(!alarm);
  };

  const onFollow = () => {
    setFollow(!follow);
  };

  const onLike = (e) => {
    const idx = e.currentTarget.getAttribute("values");
    // console.log(idx);
    isLike[idx] = !isLike[idx];
    setIsLike([...isLike]);
    if (isLike[idx]) {
      likes[idx] = likes[idx] + 1;
    } else {
      likes[idx] = likes[idx] - 1;
    }
    setLikes([...likes]);
  };

  const onActive = (e) => {
    const className = e.target.className;
    let items = [
      {
        logo: Solid.faTableCells,
        active: false,
      },
      {
        logo: Solid.faPlay,
        active: false,
      },
      {
        logo: faUserCircle,
        active: false,
      },
    ];
    let idx = 0;
    if (className.includes("0")) {
      idx = 0;
    } else if (className.includes("1")) {
      idx = 1;
    } else {
      idx = 2;
    }
    items[idx].active = true;
    setActiveIdx(idx);
    setTabItems((tItems) => (tItems = items));
  };

  const onSendProps = (e) => {
    const idx = e.currentTarget.getAttribute("values");

    let items = [
      {
        logo: Solid.faTableCells,
        active: false,
      },
      {
        logo: Solid.faPlay,
        active: false,
      },
      {
        logo: faUserCircle,
        active: false,
      },
    ];
    items[idx].active = true;
    setActiveIdx(idx);
    setTabItems((tItems) => (tItems = items));
    e.stopPropagation();
  };

  const onHome = () => {
    navigate(`${routes.home}`);
  };

  // const { username } = useParams();
  // console.log("username => " + username);

  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderLeftBox>
            <FontAwesomeIcon
              style={{
                cursor: "pointer",
              }}
              size="2x"
              icon={Solid.faArrowLeft}
              onClick={onHome}
            />
            <HeaderNick>HyunSu</HeaderNick>
          </HeaderLeftBox>
          <HeaderRightBox>
            <FontAwesomeIcon
              style={{
                cursor: "pointer",
              }}
              size="2x"
              icon={alarm ? Solid.faBell : faBell}
              onClick={onAlarm}
            />
            <FontAwesomeIcon size="2x" icon={Solid.faEllipsisV} />
          </HeaderRightBox>
        </Header>
        <UserBox>
          <UserImg />
          <UserDataBox>
            <UserDataColumn>1,003</UserDataColumn>
            <UserDataValue>게시물</UserDataValue>
          </UserDataBox>
          <UserDataBox>
            <UserDataColumn>5.5만</UserDataColumn>
            <UserDataValue>팔로워</UserDataValue>
          </UserDataBox>
          <UserDataBox>
            <UserDataColumn>10</UserDataColumn>
            <UserDataValue>팔로잉</UserDataValue>
          </UserDataBox>
        </UserBox>
        <InfoBox>
          <b>바이든 “격추한 미확인물체 정찰용 아닌 듯…중국에 사과 안 해”</b>
        </InfoBox>
        <BtnBox>
          {!follow ? (
            <FollowBtn onClick={onFollow}>팔로우</FollowBtn>
          ) : (
            <Btn onClick={onFollow}>팔로잉</Btn>
          )}
          <Btn>메시지</Btn>
          <UserBtn>
            <FontAwesomeIcon size="lg" icon={Solid.faUserPlus} />
          </UserBtn>
        </BtnBox>
        <Tab>
          {tabItems.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  zIndex: 2,
                }}
                defaultValue={index}
                className={item.active ? `btn${index} active` : `btn${index}`}
                onClick={onActive}
              >
                <FontAwesomeIcon
                  values={index}
                  onClick={onSendProps}
                  size="2x"
                  icon={item.logo}
                >
                  check
                </FontAwesomeIcon>
              </div>
            );
          })}{" "}
        </Tab>
        <FeedThumbBox>
          {thumbItems[activeIdx].map((item, idx) => {
            return (
              <FeedThumbItem key={idx}>
                <FeedThumb
                  style={{
                    backgroundImage: `url(${item})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                <FeedHiddenAction>
                  <FontAwesomeIcon
                    values={idx}
                    size="lg"
                    icon={isLike[idx] ? Solid.faHeart : faHeart}
                    onClick={onLike}
                  />
                  {likes[idx]}
                  <FontAwesomeIcon size="lg" icon={faComment} />
                  {comments[idx]}
                </FeedHiddenAction>
              </FeedThumbItem>
            );
          })}
        </FeedThumbBox>
        <Footer />
      </Wrapper>
    </Container>
  );
}

export default Profile;

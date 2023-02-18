import * as Solid from "@fortawesome/free-solid-svg-icons";
import { faBell, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import routes from "routes";
import { thumbItems } from "images/thumbs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;

  margin: 0 auto;
  padding: 20px;
  padding-bottom: 120px 
  background-color: white;

  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 3px;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  max-height: 60px;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  justify-content: space-between;
  padding-right: 10px;
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
const FeedThumb = styled.div`
  width: 180px;
  height: 200px;
  cursor: pointer;
  border: 1px solid black;
  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
    transition: all 0.5s;
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

  const onAlarm = () => {
    setAlarm(!alarm);
  };

  const onFollow = () => {
    setFollow(!follow);
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
    if (className.includes("0")) {
      items[0].active = true;
    } else if (className.includes("1")) {
      items[1].active = true;
    } else {
      items[2].active = true;
    }
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
    setTabItems((tItems) => (tItems = items));
    e.stopPropagation();
  };

  const onHome = () => {
    navigate(`${routes.home}`);
  };

  return (
    <Container>
      <Header>
        <HeaderLeftBox>
          <FontAwesomeIcon
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
        {thumbItems.map((item, idx) => {
          return (
            <FeedThumb
              key={idx}
              style={{
                background: `url(${item})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          );
        })}
      </FeedThumbBox>
    </Container>
  );
}

export default Profile;

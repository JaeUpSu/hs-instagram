import styled from "styled-components";
import { faBell, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import routes from "routes";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;
  height: 100%;
  max-height: 830px;

  margin: 0 auto;
  padding: 0 20px;
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
  padding: 15px 0;
  justify-content: space-between;
  padding-right: 10px;
  & > svg {
    cursor: pointer;
  }
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
  const thumbItems = [
    "data:image/jpeg;base64,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",
    "https://jtoppick.com/wp-content/uploads/2020/03/%E1%84%8C%E1%85%B5%E1%84%87%E1%85%B3%E1%84%85%E1%85%B5-%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
    "https://cdn.eyesmag.com/content/uploads/posts/2021/07/12/2-08251a9f-6094-4fb4-a599-daba27adf827.jpg",
    "https://i1.wp.com/rubyweb.kr/wp-content/uploads/2019/04/iutjiptotolo.png?fit=735%2C456",
    "https://post-phinf.pstatic.net/MjAyMDA5MjBfMTM1/MDAxNjAwNTk5OTkwNzIx.TaHBHZvdK5ntRL5U_96m00A3m8Sc9frWr1KvQEXDQCsg.VbUm9wNhImeYnWlYWcTXyj911P87sEtMDycL6jwNLC0g.JPEG/Studio-Ghibli-releases-400-images-02.jpg?type=w1200",
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202001/29/a61d0ff9-df15-4d47-a4a6-79b377c3655a.jpg",
  ];
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
        <FontAwesomeIcon size="2x" icon={Solid.faArrowLeft} onClick={onHome} />
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

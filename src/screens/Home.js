import Feed from "components/Feed";
import jibri from "../images/jibri.jpg";

function Home() {
  const data = [
    {
      id: 1,
      file: `${jibri}`,
      caption:
        "이재용 삼성전자 회장이 수사받을 당시 변호인들이 한겨레신문을 상대로 제기한 정정보도 청구 소송에서 다시 한번 패소했다. 서울중앙지법 민사8-2부(김봉원 강성훈 권순민 부장판사)는 16일 이 회장의 전 변호인인 최재경, 이동열 변호사가 한겨레신문을 상대로 낸 정정보도 청구 소송에서 1심과 같이 원고 패소로 판결했다. 한겨레신문은 2020년 9월 16일 검찰 관계자를 인용해 '이 변호사가 이 부회장의 구속영장이 청구되기 전 수사 검사에게 연락해 '삼성생명 관련 부분은 예민하니 빼 달라. 최 변호사 요청이다'라고 말했다'고 보도했다.",
      user: {
        username: "HyeonSu",
        profileImg:
          "https://cdn.eyesmag.com/content/uploads/sliderImages/2021/07/19/005-d020cb23-f09f-4f55-bfca-b2540f194ea2.jpg",
      },
      likes: 1250,
      commentNumber: 95,
      isLiked: true,
      comments: [
        {
          id: 1,
          payload: "첫 번째 댓글",
          user: {
            username: "manOne",
            profileImg:
              "https://img.seoul.co.kr/img/upload/2021/07/02/SSI_20210702145200_O2.jpg",
          },
        },
        {
          id: 2,
          payload: "두 번째 댓글",
          user: {
            username: "womanOne",
            profileImg:
              "https://cdn.spotvnews.co.kr/news/photo/202211/562508_786105_5314.jpg",
          },
        },
        {
          id: 3,
          payload: "세 번째 댓글",
          user: {
            username: "manTwo",
            profileImg:
              "https://img.hankyung.com/photo/201811/01.18271154.1.jpg",
          },
        },
      ],
    },
    {
      id: 2,
      file: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202001/29/a61d0ff9-df15-4d47-a4a6-79b377c3655a.jpg",
      caption:
        "이재용 삼성전자 회장이 수사받을 당시 변호인들이 한겨레신문을 상대로 제기한 정정보도 청구 소송에서 다시 한번 패소했다. 서울중앙지법 민사8-2부(김봉원 강성훈 권순민 부장판사)는 16일 이 회장의 전 변호인인 최재경, 이동열 변호사가 한겨레신문을 상대로 낸 정정보도 청구 소송에서 1심과 같이 원고 패소로 판결했다. 한겨레신문은 2020년 9월 16일 검찰 관계자를 인용해 '이 변호사가 이 부회장의 구속영장이 청구되기 전 수사 검사에게 연락해 '삼성생명 관련 부분은 예민하니 빼 달라. 최 변호사 요청이다'라고 말했다'고 보도했다.",
      user: {
        username: "HyeonSu",
        profileImg:
          "https://cdn.eyesmag.com/content/uploads/sliderImages/2021/07/19/005-d020cb23-f09f-4f55-bfca-b2540f194ea2.jpg",
      },
      likes: 1250,
      commentNumber: 95,
      isLiked: true,
      comments: [
        {
          id: 1,
          payload: "첫 번째 댓글",
          user: {
            username: "manOne",
            profileImg:
              "https://img.seoul.co.kr/img/upload/2021/07/02/SSI_20210702145200_O2.jpg",
          },
        },
      ],
    },
    {
      id: 3,
      file: "http://www.earlyadopter.co.kr/wp-content/uploads/2014/06/019.jpg",
      caption:
        "이재용 삼성전자 회장이 수사받을 당시 변호인들이 한겨레신문을 상대로 제기한 정정보도 청구 소송에서 다시 한번 패소했다. 서울중앙지법 민사8-2부(김봉원 강성훈 권순민 부장판사)는 16일 이 회장의 전 변호인인 최재경, 이동열 변호사가 한겨레신문을 상대로 낸 정정보도 청구 소송에서 1심과 같이 원고 패소로 판결했다. 한겨레신문은 2020년 9월 16일 검찰 관계자를 인용해 '이 변호사가 이 부회장의 구속영장이 청구되기 전 수사 검사에게 연락해 '삼성생명 관련 부분은 예민하니 빼 달라. 최 변호사 요청이다'라고 말했다'고 보도했다.",
      user: {
        username: "HyeonSu",
        profileImg:
          "https://cdn.eyesmag.com/content/uploads/sliderImages/2021/07/19/005-d020cb23-f09f-4f55-bfca-b2540f194ea2.jpg",
      },
      likes: 1250,
      commentNumber: 95,
      isLiked: true,
      comments: [
        {
          id: 1,
          payload: "첫 번째 댓글",
          user: {
            username: "manOne",
            profileImg:
              "https://img.seoul.co.kr/img/upload/2021/07/02/SSI_20210702145200_O2.jpg",
          },
        },
      ],
    },
  ];
  return (
    <div
      style={{
        paddingBottom: "50px",
      }}
    >
      {data?.map((feed) => {
        // 객체를 넘겨줄 때 {...ObjectValue}
        return <Feed key={feed.id} {...feed} />;
      })}
    </div>
  );
}

export default Home;

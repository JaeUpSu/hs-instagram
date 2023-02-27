import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import Feed from "components/Feed";
import { getAllFeeds, getUserFeeds } from "../api";

function Home() {
  const { data } = useQuery(["feeds"], getAllFeeds);
  console.log("data2", data);
  return (
    <div
      style={{
        paddingBottom: "50px",
      }}
    >
      {data?.map((feed) => {
        // 객체를 넘겨줄 때 {...ObjectValue}
        return <Feed key={feed.id} {...feed} feed={feed} />;
      })}
    </div>
  );
}

export default Home;

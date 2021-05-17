import Recomandation from "./Recomandation";
import Courses from "./Courses";
import FooterLinks from "./FooterLinks";

import PostsContainer from "./PostsContainer";
import { useState, useEffect } from "react";
import { getAllPosts, getProfileById } from "../functions/functions";
import UserInfo from "./UserInfo";
import Discover from "./Discover";
import CreatePost from "./CreatePost";

export default function Home({ userId }) {
  const [data, updateData] = useState([]);
  const [profileData, updateProfileData] = useState("");
  async function fetchData() {
    updateData(await getAllPosts());
    updateProfileData(await getProfileById(userId));
  }

  useEffect(async () => {
    await fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row vh-100 pt-2">
        <div className="left col d-none col-12 d-lg-block col-md-2 px-0 mt-2">
          {/* left columns go here */}
          <UserInfo
            profileData={profileData}
            refreshData={fetchData}
            userId={userId}
          />
          <Discover />
        </div>
        <div className="mid col-12 col-md-6 mt-2">
          {/* mid columns go here  */}
          <CreatePost
            profileData={profileData}
            refreshData={fetchData}
            userId={userId}
          />
          <PostsContainer
            postsData={data}
            refreshData={fetchData}
            currentUserId={userId}
          />
        </div>
        <div className="right col col-12 col-md-4">
          {/* right columns go here */}
          <Recomandation />
          <Courses />
          <FooterLinks />
        </div>
      </div>
    </div>
  );
}

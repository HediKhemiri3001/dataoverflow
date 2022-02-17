import axios from "axios";
import { useState } from "react";

export default function VideoDelete({ videos, numberOfSeasons }) {
  const [videosShown, setVideosShown] = useState(videos);
  return <h1>This is delete section</h1>;
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/video");
  console.log(res.data);
  return {
    props: {
      videos: res.data,
      numberOfSeasons: extractSeasons(res.data),
    },
  };
};

import Layout from "../../components/Layout";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";

export default function Videos({ videos, numberOfSeasons }) {
  const [season, setSeason] = useState(numberOfSeasons);
  const onSeasonChange = (event) => {
    setSeason(event.target.value);
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <Layout>
      <Head>
        <title>Videos - Data Overflow</title>
      </Head>
      <label className="season_selector_label">Select a season:</label>
      <input
        className="season-input"
        type="number"
        min="1"
        max={numberOfSeasons}
        value={numberOfSeasons}
        onChange={onSeasonChange}
      ></input>
      <div className="videos_container">
        {videos != []
          ? videos
              .filter((vid) => vid.season == season)
              .map((vid) => {
                return (
                  <YouTube
                    key={vid._id}
                    videoId={vid.url}
                    opts={opts}
                    onReady={onReady}
                  />
                );
              })
          : "No videos to show"}
      </div>
    </Layout>
  );
}
const extractSeasons = (videos) => {
  let numberOfSeasons = 1;
  videos.map((vid) => {
    if (vid.season > numberOfSeasons) numberOfSeasons = vid.season;
  });
  return numberOfSeasons;
};
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

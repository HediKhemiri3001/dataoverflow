import Layout from "../components/Layout";
import Head from "next/head";
import axios from "axios";
import YouTube from "react-youtube";

export default function Videos({ videos }) {
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
      {videos.map((vid) => {
        return (
          <YouTube
            key={vid._id}
            videoId={vid.url}
            opts={opts}
            onReady={onReady}
          />
        );
      })}
    </Layout>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/video");
  console.log(res.data);
  return {
    props: {
      videos: res.data,
    },
  };
};

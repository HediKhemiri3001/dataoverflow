import axios from "axios";
import { useState } from "react";
import LoadingModal from "../adminComponents/LoadingModal";
export default function VideoAdd() {
  const [urlState, setUrlState] = useState({ url: "", error: true });
  const [seasonState, setSeasonState] = useState(0);
  const [message, setMessage] = useState("");
  const onUrlChange = (event) => {
    var expression =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
    event.target.value.match(regex)
      ? setUrlState({
          url: event.target.value,
          error: false,
        })
      : setUrlState({ url: event.target.value, error: true });
  };
  const onSeasonChange = (event) => {
    setSeasonState(event.target.value);
  };
  const onSubmit = async () => {
    setMessage("Loading...");
    const res = await axios.post("/api/video", {
      url: urlState.url,
      season: seasonState,
    });
    setMessage("");
    //have to confirm addition: display component on res.201
  };
  return (
    <>
      {message}
      <form onSubmit={onSubmit}>
        <label htmlFor="url">Video url:</label>
        <input
          name="url"
          type="text"
          onChange={onUrlChange}
          value={urlState.url}
        ></input>
        <label htmlFor="season">Video season if DO talk:</label>
        <input
          name="season"
          type="number"
          onChange={onSeasonChange}
          value={seasonState}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}

import { useState, useEffect } from "react";
import youtube from "../apis/youtube.js";

const Searchbar = ({ setVideo }) => {
  const [search, setSearch] = useState("react tutorials");

  useEffect(() => {
    getVideos();
  }, []);

  function getVideos() {
    youtube
      .get("/search", {
        params: {
          maxResults: 10,
          q: search,
        },
      })
      .then((res) => setVideo(res.data.items))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <input
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            getVideos();
          }
        }}
        value={search}
        type="text"
        placeholder="search"
      ></input>
      <button onClick={getVideos}>Search</button>
    </>
  );
};

export default Searchbar;

import { useState, useEffect } from "react";
import Searchbar from "./Components/Searchbar.js";
import VideoList from "./VideoList.js";
import VideoPlay from "./Components/VideoPlay.js";

function App() {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(video[0]);
  }, [video]);

  return (
    <>
      <h1>App</h1>

      <Searchbar setVideo={setVideo} />

      <div style={{ display: "flex" }}>
        <div style={{ width: "70%" }}>
          <VideoPlay selectedVideo={selectedVideo} />
        </div>
        <div style={{ width: "30%" }}>
          <VideoList video={video} setSelectedVideo={setSelectedVideo} />
        </div>
      </div>
    </>
  );
}

export default App;

import axios from "axios";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
console.log(key);

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: key,
    maxResults: 5,
    type: "video",
    part: "snippet",
  },
});

const VideoList = ({ video, setSelectedVideo }) => {
  return (
    <>
      {video &&
        video.map((item, index) => (
          <div onClick={() => setSelectedVideo(item)} key={index}>
            <img
              alt={item.snippet.title}
              src={item.snippet.thumbnails.medium.url}
            ></img>
          </div>
        ))}
    </>
  );
};

export default VideoList;

const VideoPlay = ({ selectedVideo }) => {
  return (
    <>
      {selectedVideo == null ? (
        <h1>Loading...</h1>
      ) : (
        <iframe
          width="760"
          height="415"
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
        ></iframe>
      )}
    </>
  );
};

export default VideoPlay;

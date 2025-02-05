import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import VideoListEntry from '/compiled/src/components/VideoListEntry.js';
var VideoList = ({videos, onVideoSelect}) => {
  // console.log(props.videos);
  return (
    <div className="video-list">
      {videos.map((video, index) => {
        // console.log(video);
        return <VideoListEntry key={index} video={video} onVideoSelect={onVideoSelect} />;
      })}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import VideoList from '/compiled/src/components/VideoList.js';
import VideoListEntry from '/compiled/src/components/VideoListEntry.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from './../lib/searchYouTube.js';
// import React, {useEffect} from '/react';
//import PropTypes from './PropTypes';

const {useState} = React;
const {useEffect} = React;

var App = () => {


  //console.log(exampleVideoData);
  // destructure
  const [currentVid, setVid] = useState({});
  const [currentVidData, setVidData] = useState([]);
  const [query, setQuery] = useState('');

  // searchYouTube('overwatch', (data)=>(
  //   console.log(data)
  // ));


  // handle videos from video list
  const handleVideo = video => {
    setVid(video);
  };

  // handle video from search
  const handleSearch = (query) => {
    console.log('query:', query);
    searchYouTube(query, (data, err) => {
      if (err) {
        console.log('Error fetching videos:', err);
      } else {
        setVidData(data);
        console.log('data:', data);
        console.log('query:', query);
      }
    });
  };

  useEffect(() => {
    searchYouTube('', (data, err) => {
      if (err) {
        console.log('Error fetching data:', err);
      } else {
        setVidData(data);
      }
    });
  }, []);


  const handleSearchBoxTextChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1>Andrew and Chris's Video Player</h1>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search onSearch={handleSearch} currentQuery={query} handleInputChange={handleSearchBoxTextChange}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em><VideoPlayer video={currentVid}/></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em>{<VideoList videos={currentVidData} onVideoSelect={handleVideo}/>}</h5></div>
        </div>
      </div>
    </div>
  );
};



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

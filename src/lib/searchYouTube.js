import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});


var searchYouTube = (query, callback) => {
  // TODO
  // endpoint
  const endpoint = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';
  // parameters
  const params = {
    key: API_KEY,
    q: query,
    videoiD: videoiD,
    youtube_api_key: YOUTUBE_API_KEY,
  };
  // GET
  $.ajax({
    url: endpoint,
    method: 'GET',
    data: params,
    success: function(response) {
      //console.log(response);
      //query, (data, err)
      callback(response);
    },
    error: function(error) {
      console.log('Error fetching videos:', error);
    }
  });
};

export default searchYouTube;

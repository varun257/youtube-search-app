import Header from './components/Layout/Header/Header';
import VideoList from './components/Layout/VideoList/Videolist';
import React, { useState } from 'react';
import classes from './App.module.css';

const YOUTUBE_API_KEY = ''; // YOUR YOUTUBE API KEY HERE
const YOUTUBE_SEARCH_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&'

function App() {
  const [videos, setVideosList] = useState([]);
  const [pageToken, setPageToken] = useState('');
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  /**
   * 
   * @param {*} searchText
   * Sets search results to videos
   * Also handles infinite pagination based on nextPageToken
   */
  const fetchResults = async (searchText) => {
    try {
      setLoading(true);
      const res = await fetch(`${YOUTUBE_SEARCH_API}q=${searchText}&key=${YOUTUBE_API_KEY}&maxResults=50&pageToken=${pageToken}`);
      const data = await res.json();
      if(data.items) {
        setVideosList((prev) => {
          return [...prev, ...data.items]});
        setPageToken(data.nextPageToken);
      }
      setLoading(false);
    } catch(err) {
      setError(true);
    }
  }
  // Takes search keyword and fetches videos based on this
  const searchForVideos = (searchText) => {
    fetchResults(searchText)
  }

  return (
    <React.Fragment>
      <Header onSearchSubmit={searchForVideos} searchText={searchText} setSearchText={setSearchText} />
      {!error && <VideoList videos={videos} isLoading={loading} nextPage={searchForVideos} />}
      {error && <p className={classes.error}>Error while loading data</p>}
    </React.Fragment>
  );
}

export default App;

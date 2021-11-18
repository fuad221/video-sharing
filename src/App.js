import React, { useState } from 'react'
import { youtube, SearchBar, VideoDetail, VideoList, } from './components';
import { Grid } from "@material-ui/core";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });


  return (
    <div>
     <Grid style={{ justifyContent: "center" }} container spacing={10}>
       <Grid item xs={11}>
         <Grid container spacing={10}>
           <Grid item xs={12}>
             { <SearchBar onSubmit={handleSubmit} /> }
           </Grid>
           <Grid item xs={8}>
             <VideoDetail video={selectedVideo} />
           </Grid>
           <Grid item xs={4}>
             <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
           </Grid>
         </Grid >
       </Grid>
     </Grid>
    </div>
  );
  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDRIQa5M-FXAOSwFFDBxdxRiMRm-XkvF1Y",
        q: searchTerm,
      }
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);



  }

}

export default App;

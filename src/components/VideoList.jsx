import React from 'react';
import { VideoItem } from './index';
import { Grid } from "@material-ui/core";


function VideoList({ videos, onVideoSelect }) {
    const listOfVideos = videos.map(video => (
        <VideoItem
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
            video={video}
        />
    ));
    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList

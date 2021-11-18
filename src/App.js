import React from 'react'
import { youtube, SearchBar, VideoDetail, VideoList } from './components';
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div>
     <Grid style={{ justifyContent: "center" }} container spacing={10}>
       <Grid item xs={11}>
         <Grid container spacing={10}>
           <Grid item xs={12}>
             {/* <SearchBar  */}
           </Grid>
           <Grid item xs={8}>
             {/* <VideoDetail  */}
           </Grid>
           <Grid item xs={4}>
             {/* <VideoList  */}
           </Grid>
         </Grid >
       </Grid>
     </Grid>
    </div>
  );
}

export default App;

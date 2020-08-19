import React from 'react';
import Grid from '@material-ui/core/Grid';
import MusicPlayer from '../organisms/MusicPlayer';
import MusicList from '../organisms/MusicList';

const AlbumsTemplate = () => {
    return (
        <Grid container direction="column" justify="center" alignItems="stretch" spacing={1} style={{paddingTop: '10px'}}>
            <Grid item xs={12}>
                <MusicPlayer />
            </Grid>
            <Grid item xs={12}>
                <MusicList/>
            </Grid>
        </Grid>
    )
}

export default AlbumsTemplate;
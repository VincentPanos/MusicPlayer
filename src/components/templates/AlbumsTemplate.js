import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MusicList from '../organisms/MusicList';

const AlbumsTemplate = () => {
    return (
        <Grid container direction="column" justify="center" alignItems="stretch" spacing={3} style={{paddingTop: '10px'}}>
            <Grid item xs={12}>
                <Paper>Music Player</Paper>
            </Grid>
            <Grid item xs={12}>
                <MusicList/>
            </Grid>
        </Grid>
    )
}

export default AlbumsTemplate;
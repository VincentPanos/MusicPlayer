import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const TrackProfile = ( props) => {
    const {track} = props;
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Box style={{width: 128, height:128}}>
                {track.image && track.image.length > 0?
                    <img style={{ maxWidth: '100%', maxHeight: '100%'}} alt="complex" src={track.image.find(element => element.size==="large")['#text']} />:
                    <span />}
                </Box>
            </Grid>
            <Grid item xs={10} lg container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            {track.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {track.artist.name}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TrackProfile;
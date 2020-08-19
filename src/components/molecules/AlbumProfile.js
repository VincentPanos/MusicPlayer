import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const AlbumProfile = (props) =>{

    const {album} = props;

    return (
        <Box style={{ padding:"20px"}}>
            <Paper  style={{ padding:"20px", textAlign:"center"}}>
                <img alt="complex" src={album.image.find(element => element.size==="large")['#text']} />
                <Typography gutterBottom variant="h3">
                    {album.name}
                </Typography>
                <Typography variant="h4" gutterBottom>
                    {album.artist}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {album.tags.tag.reduce((accumulator, currentValue) => accumulator.concat(currentValue.name), []).join(', ')}
                </Typography>
            </Paper>
        </Box>
    )
}

export default AlbumProfile;
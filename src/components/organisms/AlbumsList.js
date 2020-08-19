import React from 'react';
import MusicListItem from '../molecules/MusicListItem';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { getAlbums } from '../../redux/selectors/albumsSelector';
import { Box } from '@material-ui/core';

const AlbumsList = () => {

    const albums = useSelector(getAlbums);
    
    return(
        <Box>
            <Grid container direction="column" justify="center" alignItems="stretch">
                {albums && albums.length > 0 ?
                    albums.map( album => { 
                        return <MusicListItem album={album} />
                    }) :
                    <span />}
            </Grid>
        </Box>
    )

}

export default AlbumsList;
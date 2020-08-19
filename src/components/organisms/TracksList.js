import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { setSelectedAlbum} from '../../redux/actions/albumsActions';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import AlbumProfile from '../molecules/AlbumProfile';
import List from '@material-ui/core/List';
import { Box } from '@material-ui/core';
import TrackListItem from '../molecules/TrackListItem';


const TracksList = (props) => {

    const dispatch = useDispatch();
    const {album} = props;

    return(
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Box style={{ paddingLeft:"20px"}}>
                    <Button variant="outlined" color="primary" onClick={ ()=>dispatch(setSelectedAlbum(null))}><ArrowBackIosOutlinedIcon />Back to Albums</Button>
                </Box>
            </Grid>
            <Grid item  xs={12}>
                <AlbumProfile album={album} />
            </Grid>
            <Grid item xs={12}>
                <Box style={{ padding:"20px"}}>
                    <List dense={true}> 
                    { album.tracks && album.tracks.track && album.tracks.track.length > 0 ?
                        album.tracks.track.map((track, index) =>{
                             if (album.image) track.image = album.image;
                            return (<TrackListItem track={track} index={index}  />)
                        }):
                        <span />}
                    </List>
                </Box>
            </Grid>
        </Grid>
    ) 
}

export default TracksList
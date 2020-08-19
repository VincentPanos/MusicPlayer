import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { setSelectedAlbum} from '../../redux/actions/albumsActions';


const MusicListITem = (props) => {

    const {album} = props;

    const dispatch = useDispatch();

    return (
        <Box style={{padding:"20px"}}>
            <Paper style={{padding:"20px"}} >
                <Grid container spacing={2}>
                    <Grid item>
                        <Box style={{width: 128, height:128}}>
                            <img style={{ maxWidth: '100%', maxHeight: '100%'}} alt="complex" src={album.image.find(element => element.size==="large")['#text']} />
                        </Box>
                    </Grid>
                    <Grid item xs={10} lg container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {album.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {album.artist}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {album.tags.tag.reduce((accumulator, currentValue) => accumulator.concat(currentValue.name), []).join(', ')}
                                </Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                    <Grid item xs={2} lg container>
                        <Grid item container justify="flex-end" alignItems="center">
                            <Button variant="outlined" color="primary" onClick={ ()=>dispatch(setSelectedAlbum(album))}>View Album</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box> 
    )
}

export default MusicListITem;
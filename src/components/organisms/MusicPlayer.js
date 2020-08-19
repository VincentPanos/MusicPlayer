import React, {useState, useEffect} from 'react'
import Sound from 'react-sound';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';
import { useSelector } from 'react-redux';
import song from '../../data/bensound-dreams.mp3'
import { getSelectedTrack } from '../../redux/selectors/albumsSelector';
import Typography from '@material-ui/core/Typography';
import TrackProfile from '../molecules/TrackProfile';

const MusicPlayer = () => {

    const [status, setStatus] = useState(Sound.status.STOPPED);
    const [playFromPosition, setPlayFromPosition]= useState(1);
    const track = useSelector(getSelectedTrack);

    useEffect ( () =>{
        if (track ) {
            setPlayFromPosition(0);
            setStatus(Sound.status.PLAYING);
        }
    }, [track])

    return (

        <Box style={{ paddingLeft:"20px",paddingRight:"20px" }} >
            <Paper style={{ padding:"20px"}}>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        { track ? <TrackProfile track={track} />: <Typography gutterBottom variant="h5">None track have been selected!</Typography> }     
                    </Grid>
                    <Grid item xs container justify="flex-end" alignItems="center">
                        <IconButton edge="end" aria-label="Play" onClick={() => setStatus(Sound.status.PLAYING)} disabled={ !track || status === Sound.status.PLAYING ? true : false} >
                            <PlayArrowIcon color={ !track || status === Sound.status.PLAYING ? 'secondary' : 'primary'} />
                        </IconButton>
                        <IconButton edge="end" aria-label="Pause" onClick={() => setStatus(Sound.status.PAUSED)} disabled={ !track || status === Sound.status.PAUSED ? true : false}>
                            <PauseIcon color={ !track || status === Sound.status.PAUSED ? 'secondary' : 'primary'} />
                        </IconButton>
                        <IconButton edge="end" aria-label="Stop"  onClick={() => setStatus(Sound.status.STOPPED)} disabled={ !track || status === Sound.status.STOPPED ? true : false}>
                            <StopIcon color={ !track || status === Sound.status.STOPPED ? 'secondary' : 'primary'} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
            <Sound url={song} playStatus={status} playFromPosition={playFromPosition}/>
        </Box>
    )
}

export default MusicPlayer;
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { setSelectedTrack} from '../../redux/actions/albumsActions';
import { useSelector } from 'react-redux';
import { getSelectedTrack } from '../../redux/selectors/albumsSelector';



const TrackListItem = (props) =>{

    const {track, index} = props;
    const dispatch = useDispatch();

    const currentTrack = useSelector(getSelectedTrack);

    const handlePlay = () => {
        dispatch(setSelectedTrack(track));
    }

    return (
        <Paper>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        {index+1}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={track.name} secondary={track.artist.name}/>
                {track ?
                <Typography>{parseInt(track.duration/60)+':'}{("0" + track.duration%60).slice(-2)}</Typography>:
                <span />}
                {!currentTrack || track.url !== currentTrack.url ?
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="Play" onClick={() =>{handlePlay()}}>
                            <PlayArrowIcon color='primary' />
                        </IconButton>
                    </ListItemSecondaryAction>:
                   <Typography style={{paddingLeft:'5px'}}> Now playing...</Typography> 
                }
            </ListItem>      
        </Paper>
    )

}

export default TrackListItem;
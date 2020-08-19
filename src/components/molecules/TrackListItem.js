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


const TrackListItem = (props) =>{

    const {track, index} = props;

    return (
        <Paper>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        {index+1}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={track.name} secondary={track.artist.name}/>
                <Typography>{parseInt(track.duration/60)}:{("0" + track.duration%60).slice(-2)}</Typography>
                <ListItemSecondaryAction>
                    
                    <IconButton edge="end" aria-label="Play">
                        <PlayArrowIcon color='primary' />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>      
        </Paper>
    )

}

export default TrackListItem;
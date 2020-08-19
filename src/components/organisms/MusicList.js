import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedAlbum } from '../../redux/selectors/albumsSelector';
import AlbumsList from './AlbumsList';
import TracksList from './TracksList';

const MusicList = () => {

    const selectedAlbum = useSelector(getSelectedAlbum); 

    return !selectedAlbum  ? <AlbumsList /> : <TracksList album={selectedAlbum} />
}

export default MusicList;
import {SET_ALBUMS, SET_SELECTED_ALBUM, SET_SELECTED_TRACK} from '../actionTypes';

export const setAlbums = albums => ({
    type: SET_ALBUMS,
    payload: {
        albums
    }
});

export const setSelectedAlbum = selectedAlbum => ({
    type: SET_SELECTED_ALBUM,
    payload: {
        selectedAlbum
    }
});

export const setSelectedTrack = selectedTrack => ({
    type: SET_SELECTED_TRACK,
    payload: {
        selectedTrack
    }
});
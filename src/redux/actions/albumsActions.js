import {SET_ALBUMS, SET_SELECTED_ALBUM} from '../actionTypes';

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
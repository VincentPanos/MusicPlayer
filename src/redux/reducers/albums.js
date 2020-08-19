import {SET_ALBUMS, SET_SELECTED_ALBUM, SET_SELECTED_TRACK} from '../actionTypes';

const initialState = {
    albums: [],
    selectedAlbum: null,
    selectedTrack: null
};

const albums = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUMS: {
            const {albums} = action.payload;
            return {
                ...state,
                albums
            };
        }
        case SET_SELECTED_ALBUM: {
            const {selectedAlbum} = action.payload;
            return {
                ...state,
                selectedAlbum
            }
        }
        case SET_SELECTED_TRACK: {
            const {selectedTrack} = action.payload;
            return {
                ...state,
                selectedTrack
            }
        }
        default: {
            return state;
        }
    }
}

export default albums;

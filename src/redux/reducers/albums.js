import {SET_ALBUMS, SET_SELECTED_ALBUM} from '../actionTypes';

const initialState = {
    albums: [],
    selectedAlbum: null
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
        default: {
            return state;
        }
    }
}

export default albums;

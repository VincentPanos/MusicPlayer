const getAlbumsState = store => store;
export const getAlbums = store => (getAlbumsState(store) ? getAlbumsState(store).albums : []);
export const getSelectedAlbum = store => (getAlbumsState(store) ? getAlbumsState(store).selectedAlbum : null);
export const getSelectedTrack = store => (getAlbumsState(store) ? getAlbumsState(store).selectedTrack : null);
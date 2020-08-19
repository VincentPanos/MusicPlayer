import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import AlbumsTemplate from '../templates/AlbumsTemplate';
import { useDispatch } from 'react-redux';
import { setAlbums} from '../../redux/actions/albumsActions';

import albums from '../../data/albums.json';

const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAlbums(albums));
        // eslint-disable-next-line
    },[])


    return (
        <Container maxWidth="md">
            <AlbumsTemplate />
        </Container>
    )
}

export default HomePage;
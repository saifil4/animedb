import React from 'react';

//importing components
import AnimeList from '../components/animelist';
import Navigation from '../components/nav';

function Anime() {
    return (
        <>
            <Navigation />
            <AnimeList />
        </>
    )
}

export default Anime;

import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import AnimeItem from './animeitem';

function AnimeList() {
    const [animeData, setAnimeData] = useState([]);

    const FetchData = () => {
        fetch(`https://kitsu.io/api/edge/trending/anime`)
            .then(response => response.json())
            .then(result => {
                setAnimeData(result.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        FetchData();
    }, [])

    if (animeData.length <= 0) {
        return <i className="fas fa-spinner fa-spin"></i>;
    }

    return (
        <>
            <Container fluid>
                <Row>
                    {
                        animeData.map(data => (
                            <AnimeItem key={data.id} animeitemdata={data} />
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default AnimeList;

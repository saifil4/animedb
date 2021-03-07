import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../components/nav'

function AnimeInfo({ match }) {
    const [animeItem, setAnimeItem] = useState();

    const FetchData = async () => {
        const fetchitem = await fetch(`https://kitsu.io/api/edge/anime/${match.params.id}`)
        const item = await fetchitem.json();
        setAnimeItem(item.data);
        console.log(animeItem);
    }

    useEffect(() => {
        FetchData();
    }, [])

    if (!animeItem) {
        return <i className="fas fa-spinner fa-spin"></i>;
    }


    return (
        <>
            <Navigation />
            <div className="page-container">
                <div>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <img className="img-fluid" alt={animeItem.attributes.canonicalTitle} src={animeItem.attributes.posterImage.small} />
                                <a href={'https://www.youtube.com/watch?v=' + animeItem.attributes.youtubeVideoId}>Watch Trailer</a>
                            </Col>
                            <Col md={6}>
                                <h2 className="page-title">{animeItem.attributes.canonicalTitle}</h2>
                                <p className="synopsis">{animeItem.attributes.synopsis}</p>
                            </Col>
                            <Col md={3}>
                                <label className="detail-title">Rating</label>
                                <p className="detail-text">{animeItem.attributes.averageRating}</p>
                                <label className="detail-title">Episodes</label>
                                <p className="detail-text">{animeItem.attributes.episodeCount}</p>
                                <label className="detail-title">Status</label>
                                <p className="detail-text">{animeItem.attributes.status}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <br />
                                <h4 className="page-title">Episodes</h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default AnimeInfo;

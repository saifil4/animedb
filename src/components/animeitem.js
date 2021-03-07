import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AnimeItem({ animeitemdata }) {

    return (
        <>
            <Col md={3}>
                <Link to={`/anime-info/${animeitemdata.id}`}>
                    <div className="animeitem">
                        <div className="poster-container">
                            <img className="item-poster" alt={animeitemdata.attributes.canonicalTitle} src={animeitemdata.attributes.posterImage.small} />
                            <h6 className="poster-title">{animeitemdata.attributes.canonicalTitle}</h6>
                        </div>
                    </div>
                </Link>
            </Col>
        </>
    )
}

export default AnimeItem;

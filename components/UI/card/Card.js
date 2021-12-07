import React from 'react';
import classes from './Card.module.css';

/**
 * 
 * @param {*} props 
 * @returns Card component to display videos
 */
const Card = React.forwardRef((props, ref) => {
    const getUrl = (video) => {
        return `https://www.youtube.com/watch?v=${video.id.videoId}`
    }
    return (
        <div className={classes.card} data-testid="card" ref={ref}>
            <a href={getUrl(props.video)}>
                <img src={props.video.snippet?.thumbnails.medium.url} alt={props.video.snippet?.title} />
            </a>
            <div className={classes.container}>
                <h4><b>{props.video.snippet?.title}</b></h4>
                <p>{props.video.snippet?.channelTitle}</p>
            </div>
        </div>)
});

export default Card;

import { useCallback, useRef } from "react";
import Card from "../../UI/card/Card";
import classes from './VideoList.module.css';

/**
 * 
 * @param {*} props 
 * @returns List of videos using card component
 */
const VideoList = (props) => {
    const observer = useRef();
    const lastElementRef = useCallback(
        (node) => {
            if (props.isLoading) return;
            if (observer.current) observer.current.disconnect();
            // Observer to check if the watched element is in the visible window
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    props.nextPage();
                }
            });
            if (node) observer.current.observe(node);
        },
        []
    );

    return (<div className={classes.list}>
        {props.videos.length === 0 && <p className={classes.empty}>No Results</p>}
        {props.videos.map((video, index) => {
            //Setting ref on the last element to implement infinite scrolling
            if (props.videos.length === index + 1) {
                return <Card key={video.etag} video={video} ref={lastElementRef} />;
            } else {
                return <Card video={video} key={video.id.videoId} />;
            }
        })}
        {props.isLoading && <p className={classes.loading}></p>}
    </div>);
}
export default VideoList;

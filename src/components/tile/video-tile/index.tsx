import React from 'react';
import { Icon } from 'antd';
import { useHistory } from 'react-router-dom';

type VideoPropsType = {
    id: number;
    likes: number;
    downloads: number;
    views: number;
    url: string;
};

const VideoTile: React.FC<VideoPropsType> = ({ id, likes, downloads, views, url }) => {
    const history = useHistory();

    const clickHandler = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        history.push(`${id}`);
    };

    return (
        <a href="/" className="image-tile video-tile" onClick={clickHandler}>
            <video preload="metadata">
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
            <div className="image-tile-info">
                <div className="image-tile-info__item">
                    <Icon type="like" />
                    <span>{likes}</span>
                </div>
                <div className="image-tile-info__item">
                    <Icon type="download" />
                    <span>{downloads}</span>
                </div>
                <div className="image-tile-info__item">
                    <Icon type="eye" />
                    <span>{views}</span>
                </div>
            </div>
        </a>
    );
};

export default VideoTile;

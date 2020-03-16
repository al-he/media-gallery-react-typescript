import React from 'react';
import { Icon } from 'antd';
import { useHistory } from 'react-router-dom';

type ImagePropsType = {
    id: number;
    url: string;
    likes: number;
    downloads: number;
    stars: number;
};

const ImageTile: React.FC<ImagePropsType> = props => {
    const history = useHistory();
    const { id, url, likes, downloads, stars } = props;

    const clickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        history.push(`${id}`);
    };

    return (
        <a href="/" className="image-tile" onClick={clickHandler}>
            <img src={url} alt="img" />
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
                    <Icon type="star" />
                    <span>{stars}</span>
                </div>
            </div>
        </a>
    );
};

export default ImageTile;

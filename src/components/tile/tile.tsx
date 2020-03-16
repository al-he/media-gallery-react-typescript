import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ImageTile from './image-tile';
import VideoTile from './video-tile';
import { Empty } from 'antd';
import { AppStateType } from '../../store';
import errorMessage from '../UI/notification/index';
import Spinner from '../UI/spinner';

const Tile: React.FC = () => {
    const { pathname } = useLocation();
    const selectState = (state: AppStateType) => state;
    const { data } = useSelector(selectState);

    useEffect(() => {
        errorMessage(data.error);
    }, [pathname, data]);

    const check = pathname.indexOf('video') > -1;

    const spinner = data.loading ? <Spinner /> : null;
    const images = data.images.map(item => (
        <ImageTile
            key={item.id}
            id={item.id}
            url={item.webformatURL}
            likes={item.likes}
            downloads={item.downloads}
            stars={item.favorites}
        />
    ));
    const videos = data.videos.map(item => (
        <VideoTile
            key={item.id}
            url={item.videos.tiny.url}
            id={item.id}
            likes={item.likes}
            downloads={item.downloads}
            views={item.views}
        />
    ));
    const emptyImages = data.images.length || data.loading ? null : <Empty />;
    const emptyVideos = data.videos.length || data.loading ? null : <Empty />;
    const dataEmpty = check ? emptyVideos : emptyImages;
    const dataResult = check ? videos : images;

    return (
        <>
            <div className="tile">
                {spinner}
                {dataEmpty}
                {dataResult}
            </div>
        </>
    );
};

export default Tile;

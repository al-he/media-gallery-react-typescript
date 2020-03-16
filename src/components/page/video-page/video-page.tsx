import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../header';
import { startSingleRequest } from '../../../store/actions/single';
import { AppStateType } from '../../../store';
import { Alert } from 'antd';
import DescriptionContent from '../../UI/description';
import Spinner from '../../UI/spinner';

const VideoPage: React.FC = () => {
    const dispatch = useDispatch();
    const selectState = (state: AppStateType) => state;
    const { location } = useHistory();
    const { id } = useParams();
    const state = useSelector(selectState);

    const error = state.single.error ? <Alert message="Error" type="error" /> : null;
    const spinner = state.single.loading ? <Spinner /> : null;
    const hasData = !(spinner || error);

    const arr = state.data.videos.length
        ? id
            ? state.data.videos.filter(item => item.id === +id)[0]
            : null
        : hasData && state.single.video
        ? state.single.video
        : null;

    const content = arr ? (
        <>
            <div className="video-player">
                <video controls>
                    <source src={arr.videos.medium.url} type="video/mp4" />
                    Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
            </div>
            <div className="divider">{}</div>
            <div className="video-description">
                <DescriptionContent
                    title="Video Information"
                    type={arr.type}
                    tags={arr.tags}
                    views={arr.views}
                    downloads={arr.downloads}
                    favorites={arr.favorites}
                    likes={arr.likes}
                    comments={arr.comments}
                    link={arr.pageURL}
                />
            </div>
            <div className="divider">{}</div>
        </>
    ) : null;

    useEffect(() => {
        if (!state.data.videos.length) {
            dispatch(startSingleRequest(id as string, !!~location.pathname.indexOf('video')));
        } else if (state.data.videos.length && id) {
            const item = state.data.videos.filter(item => item.id === +id);
            if (!item.length) {
                dispatch(startSingleRequest(id as string, !!~location.pathname.indexOf('video')));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, location, dispatch]);

    return (
        <>
            <Header />
            <div className="video-page sg">
                <div className="container">
                    {spinner}
                    {error}
                    {content}
                </div>
            </div>
        </>
    );
};

export default VideoPage;

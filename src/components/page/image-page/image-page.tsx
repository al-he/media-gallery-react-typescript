import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../header';
import { Alert } from 'antd';
import { startSingleRequest } from '../../../store/actions/single';
import { AppStateType } from '../../../store';
import Spinner from '../../UI/spinner';
import DescriptionContent from '../../UI/description';

const ImagePage: React.FC = () => {
    const selectState = (state: AppStateType) => state;
    const state = useSelector(selectState);
    const dispatch = useDispatch();
    const { location } = useHistory();
    const { id } = useParams();

    const spinner = state.single.loading ? <Spinner /> : null;
    const error = state.single.error ? <Alert message="Error" type="error" /> : null;
    const hasData = !(spinner || error);

    const arr = state.data.images.length
        ? id
            ? state.data.images.filter(item => item.id === +id)[0]
            : null
        : hasData && state.single.image
        ? state.single.image
        : null;

    const content = arr ? (
        <>
            <div className="image-page-pic">
                <img src={arr.largeImageURL} alt={arr.tags} />
            </div>
            <div className="divider">{}</div>
            <div className="image-page-info">
                <DescriptionContent
                    title="Image Information"
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
        if (!state.data.images.length) {
            dispatch(startSingleRequest(id as string, !!~location.pathname.indexOf('video')));
        } else if (state.data.images.length && id) {
            const item = state.data.images.filter(item => item.id === +id);
            if (!item.length) {
                dispatch(startSingleRequest(id as string, !!~location.pathname.indexOf('video')));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, dispatch, location]);

    return (
        <>
            <Header />
            <div className="image-page sg">
                <div className="container">
                    {spinner}
                    {error}
                    {content}
                </div>
            </div>
        </>
    );
};

export default ImagePage;

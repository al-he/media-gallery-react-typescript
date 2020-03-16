import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Box from '../box';
import Tile from '../tile';
import { AppStateType } from '../../store';
import { firstRequest } from '../../store/actions/search';
import { clearAllFilters } from '../../store/actions/filters';

const Page: React.FC = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const selectState = (state: AppStateType): AppStateType => state;
    const { data } = useSelector(selectState);

    useEffect(() => {
        if (data.path.replace(/\/+/g, '') !== pathname.replace(/\/+/g, '')) {
            dispatch(clearAllFilters());
        }

        if (data.page === 1) {
            if (!data.images.length && !~pathname.indexOf('video')) {
                dispatch(firstRequest(pathname));
            } else if (data.path.replace(/\/+/g, '') !== pathname.replace(/\/+/g, '') && !~pathname.indexOf('video')) {
                dispatch(firstRequest(pathname));
            }

            if (!data.videos.length && ~pathname.indexOf('video')) {
                dispatch(firstRequest(pathname));
            }
        } else {
            if (!data.images.length && !~pathname.indexOf('video')) {
                dispatch(firstRequest(pathname));
            } else if (
                data.images.length &&
                data.path.replace(/\/+/g, '') !== pathname.replace(/\/+/g, '') &&
                !~pathname.indexOf('video')
            ) {
                dispatch(firstRequest(pathname));
            }

            if (!data.videos.length && ~pathname.indexOf('video')) {
                dispatch(firstRequest(pathname));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, dispatch]);

    return (
        <>
            <Box />
            <Tile />
        </>
    );
};

export default Page;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Pagination } from 'antd';
import { AppStateType } from '../../../store';
import { clickPagination } from '../../../store/actions/search';

const SearchPagination: React.FC = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const selectState = (state: AppStateType) => state;
    const { data } = useSelector(selectState);

    const changePagination = (value: number): void => {
        dispatch(clickPagination(value, pathname));
    };

    return (
        <div style={{ opacity: data.totalHits ? 1 : 0 }}>
            <Pagination
                simple
                current={data.page}
                total={data.totalHits}
                onChange={changePagination}
                defaultPageSize={20}
            />
        </div>
    );
};

export default SearchPagination;

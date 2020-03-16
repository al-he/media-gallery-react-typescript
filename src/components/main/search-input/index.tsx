import React, { useEffect, useState } from 'react';
import { Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { startSearch } from '../../../store/actions/search';
import { useLocation } from 'react-router-dom';
import { AppStateType } from '../../../store';
const { Search } = Input;

const styles = {
    width: '50%',
    height: '40px',
};

const SearchInput: React.FC = () => {
    const [query, setQuery] = useState('');
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const selectState = (state: AppStateType): AppStateType => state;
    const { data } = useSelector(selectState);

    const searchHandler = (value: string): void => {
        if (value.trim()) {
            dispatch(startSearch(value.trim(), pathname.replace(/\//g, '')));
        } else {
            message.warning('Enter text');
        }
    };
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        setQuery(data.query);
    }, [data, pathname]);

    return (
        <>
            <div className="main-input">
                <Search
                    placeholder="input search text"
                    onSearch={searchHandler}
                    value={query}
                    onChange={changeInput}
                    style={styles}
                    loading={data.loading}
                />
            </div>
        </>
    );
};

export default SearchInput;

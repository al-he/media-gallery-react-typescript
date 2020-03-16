import React, { useEffect, useState } from 'react';
import SearchPagination from '../search-pagination';
import SearchFilter from '../search-filter';
import { useLocation } from 'react-router-dom';

const img = (
    <>
        <SearchFilter value="images" sub_key="orientation" name="Orientation" />
        <SearchFilter value="images" sub_key="category" name="Category" />
        <SearchFilter value="images" sub_key="order" name="Order" />
        <SearchFilter value="images" sub_key="colors" name="Colors" />
    </>
);

const vid = (
    <>
        <SearchFilter value="videos" sub_key="video_type" name="Video Type" />
        <SearchFilter value="videos" sub_key="category" name="Category" />
        <SearchFilter value="videos" sub_key="order" name="Order" />
    </>
);

const SearchPanel: React.FC = () => {
    const [check, setCheck] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setCheck(true);
        }, 100);

        return () => setCheck(false);
    }, [pathname]);

    return (
        <div className="main-panel">
            <div className="main-panel-filters">{check ? (~pathname.indexOf('video') ? vid : img) : null}</div>
            <div className="main-panel-pagination">
                <SearchPagination />
            </div>
        </div>
    );
};

export default SearchPanel;

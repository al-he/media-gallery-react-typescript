import React from 'react';
import { Select, Tag } from 'antd';
import { obj } from './data';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterValue } from '../../../store/actions/filters';
import { AppStateType } from '../../../store';
import { startSearch } from '../../../store/actions/search';

const { Option } = Select;

type FilProps = {
    value: 'images' | 'videos';
    sub_key: 'orientation' | 'category' | 'colors' | 'order' | 'video_type';
    name: string;
};

const SearchFilter: React.FC<FilProps> = props => {
    const dispatch = useDispatch();
    const selectState = (state: AppStateType): AppStateType => state;
    const { data, filters } = useSelector(selectState);
    const { pathname } = useLocation();
    const options: string[] = obj[props.value][props.sub_key];

    const selectHandler = (value: any): void => {
        dispatch(changeFilterValue({ title: props.sub_key, filter_value: value }));
        if (data.query) {
            dispatch(startSearch(data.query, pathname));
        }
    };

    return (
        <Select
            defaultValue={filters[props.sub_key] ? filters[props.sub_key] : props.name}
            showArrow={false}
            placeholder={props.name}
            style={{ minWidth: '150px' }}
            onSelect={selectHandler}
            loading={data.loading}>
            {options.map(item => (
                <Option key={item} value={item}>
                    {props.name === 'Colors' ? <Tag color={_transformColor(item)}>{item}</Tag> : item}
                </Option>
            ))}
        </Select>
    );
};

const _transformColor = (value: string): string => {
    if (value === 'All') {
        return 'gray';
    } else if (value === 'Transparent') {
        return 'gray';
    } else if (value === 'Grayscale') {
        return 'gray';
    } else if (value === 'Lilac') {
        return '#8512cc';
    } else if (value === 'White') {
        return 'black';
    } else {
        return value;
    }
};

export default SearchFilter;

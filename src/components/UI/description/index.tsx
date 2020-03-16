import React from 'react';
import { Descriptions, Icon } from 'antd';

export type DescriptionContentType = {
    title: string;
    type: string;
    tags: string;
    views: number;
    downloads: number;
    favorites: number;
    likes: number;
    comments: number;
    link: string;
};

const DescriptionContent: React.FC<DescriptionContentType> = ({
    title,
    type,
    tags,
    views,
    downloads,
    favorites,
    likes,
    comments,
    link,
}) => {
    return (
        <Descriptions title={title}>
            <Descriptions.Item label="Type">{type}</Descriptions.Item>
            <Descriptions.Item label="Tags">{tags}</Descriptions.Item>
            <Descriptions.Item label="Views">{views}</Descriptions.Item>
            <Descriptions.Item label="Downloads">{downloads}</Descriptions.Item>
            <Descriptions.Item label="Favorites">{favorites}</Descriptions.Item>
            <Descriptions.Item label="Likes">{likes}</Descriptions.Item>
            <Descriptions.Item label="Comments">{comments}</Descriptions.Item>
            <Descriptions.Item label="Link">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Icon type="link" />
                </a>
            </Descriptions.Item>
        </Descriptions>
    );
};

export default DescriptionContent;

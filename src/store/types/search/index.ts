import {
    SEARCH_FAILURE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    CLICK_PAGINATION,
    SET_QUERY,
    FIRST_REQUEST_SUCCESS,
} from '../../actions/actionsTypes';

export type InitialStateType = {
    total: number;
    totalHits: number;
    images: ImageResponseItemType[];
    videos: VideoResponseItemType[];
    loading: boolean;
    error: boolean;
    page: number;
    query: string;
    path: string;
};

export type ActionsTypes =
    | SearchSuccessType
    | SearchRequestType
    | SearchFailureType
    | SearchPaginationType
    | SetQueryType
    | FirstRequestSuccessType;

export type SearchSuccessType = {
    type: typeof SEARCH_SUCCESS;
    payload: ResponseSearchType;
    value: boolean;
};

export type FirstRequestSuccessType = {
    type: typeof FIRST_REQUEST_SUCCESS;
    payload: ResponseSearchType;
    value: boolean;
    path: string;
};

export type SearchRequestType = {
    type: typeof SEARCH_REQUEST;
};

export type SearchFailureType = {
    type: typeof SEARCH_FAILURE;
};

export type SearchPaginationType = {
    type: typeof CLICK_PAGINATION;
    page: number;
};

export type SetQueryType = {
    type: typeof SET_QUERY;
    query: string;
};

export type ResponseSearchType = {
    total: number;
    totalHits: number;
    hits: (ImageResponseItemType | VideoResponseItemType)[];
};

export type ImageResponseItemType = {
    id: number;
    pageURL: string;
    type: string;
    tags: string;
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    fullHDURL: string;
    imageURL: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    views: number;
    downloads: number;
    favorites: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string;
};

export type VideoResponseItemType = {
    id: number;
    pageURL: string;
    type: string;
    tags: string;
    duration: number;
    picture_id: string;
    videos: videosType;
    views: number;
    downloads: number;
    favorites: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string;
};

export type videosType = {
    [key: string]: {
        url: string;
        width: number;
        height: number;
        size: number;
    };
};

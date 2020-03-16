import axios from 'axios';
import { ResponseSearchType } from '../store/types/search';

const API_KEY: string = 'YOUR_OWN_KEY';

export const PIXABAY = axios.create({
    baseURL: 'https://pixabay.com/api/',
});

export const fetchSearchRequest = async (query: string, type: boolean = false) =>
    await PIXABAY.request<ResponseSearchType>({
        url: !type ? `?key=${API_KEY}${query}` : `videos/?key=${API_KEY}${query}`,
    });

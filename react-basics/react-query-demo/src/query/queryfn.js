import { END_POINT } from "./const";
import axios from 'axios';

export const getPosts = ()=>{
    return axios.get(`${END_POINT}/posts`);
}

export const getPostById = (postId)=>{
    return axios.get(`${END_POINT}/posts/${postId}`);
}
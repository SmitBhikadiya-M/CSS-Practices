import { END_POINT } from "./const";
import axios from 'axios';

const addQueryParam = (key, val, query='') => {
    if(query==='') query+='?'
    if(query.length > 1){
        query+=`&${key}=${val}`
    }else{
        query+=`${key}=${val}`;
    } 
    return query;
}
export const getPosts = ({status, search, pageParam, limit=5})=>{
    
    console.log(pageParam)

    let queryStr = '';
    if(status){
        queryStr = addQueryParam('status', status, queryStr);
    }
    if(search){
        queryStr = addQueryParam('q', search, queryStr);
    }
    if(limit){
        queryStr = addQueryParam('_limit', limit, queryStr);
    }
    if(pageParam){
        queryStr = addQueryParam('_page', pageParam, queryStr);
    }

    const url = new URL(`${END_POINT}/posts${queryStr}`);

    return axios.get(url);
}

export const getPostById = (postId)=>{
    return axios.get(`${END_POINT}/posts/${postId}`);
}

export const getUserById = (userId)=>{
    return axios.get(`${END_POINT}/users/${userId}`)
} 
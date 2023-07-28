import { END_POINT } from "./const"
import axios from 'axios';

export const deletePostById = (postId) => {
    return axios.delete(`${END_POINT}/posts/${postId}`)
}

export const addPost = (post) => {
    return axios.post(`${END_POINT}/posts`, {
        ...post
    })
}

export const updatePostTitle = (postId, newTitle) => {
    return axios.patch(`${END_POINT}/posts/${postId}`, {
        title: newTitle
    })
} 
import { END_POINT } from "./const"
import axios from 'axios';

export const deletePostById = (postId) => {
    return axios.delete(`${END_POINT}/posts/${postId}`)
}
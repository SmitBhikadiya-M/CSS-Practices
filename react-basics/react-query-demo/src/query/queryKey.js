export const getPostsKey = ()=>['GET_POSTS'];
export const getUsersKey = ()=>['GET_USERS'];
export const getPostKey = (postId)=>[...getPostsKey(), postId]
export const getUserKey= (userId)=>[...getUsersKey(), userId]

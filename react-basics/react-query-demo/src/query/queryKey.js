export const getPostsKey = ()=>['GET_POSTS'];
export const getPostKey = (postId)=>[...getPostsKey(), postId]

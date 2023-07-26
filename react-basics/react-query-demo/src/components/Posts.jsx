import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../query/queryfn";
import { getPostsKey } from "../query/queryKey";
import BasicCard from "./BasicCard";
import Loader from "./Loader";
import Theme, { theme } from "./Theme";

const Posts = () => {

  const postsQuery = useQuery({
    queryKey: getPostsKey(),
    queryFn: getPosts
  })

  if(postsQuery.isLoading) return <Loader loading={postsQuery.isLoading}/>

  if(postsQuery.isError) return <h3>{postsQuery.error.message}</h3>

  return (
    <Theme theme={theme}>
      { postsQuery.data?.data.map((post) => {
        return <BasicCard title={post.title} key={post.id} postId={post.id} body={post.body} gap={10}/>
      }) }
    </Theme>
  );
}

export default Posts;

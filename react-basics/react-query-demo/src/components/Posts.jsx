import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPosts } from "../query/queryfn";
import { getPostsKey } from "../query/queryKey";
import Loader from "./Global/Loader";
import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardContent, Chip, Container, Typography } from "@mui/material";
import FilterPostMenu from "./FilterPostMenu";
import { getStatusColor } from "../helper/post-helper";
import debounce from "lodash.debounce";

const Posts = () => {

  const [filter, setFilter] = useState({
    status: null,
    search: null,
    limit: 5
  });

  const containerRef = useRef(null);

  const {
    refetch,
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: getPostsKey(),
    queryFn: ({ pageParam = 1 }) => getPosts({ ...filter, pageParam }),
    getNextPageParam: (lastPage, pages) => {
      if ((lastPage.data.length < filter.limit) || lastPage.data.length <= 0) {
        return undefined;
      }
      return pages.length + 1
    },
    refetchOnWindowFocus: false
  })

  const scrollHandler = useMemo(()=>debounce((e) => {
    let cref = containerRef.current;
    console.log(hasNextPage, isFetchingNextPage);
    if(cref && !isFetchingNextPage){
      console.log(window.scrollY+50 < cref.clientHeight - window.innerHeight);
      if(window.scrollY+100 < cref.clientHeight - window.innerHeight){
        return
      }
      fetchNextPage();         
    }
  }, 300))

  useEffect(() => {

    

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  useEffect(() => {
    refetch({
      cancelRefetch: false,
      throwOnError: true
    });
  }, [filter])

  if (isLoading) return <Loader loading={isLoading} />
  if (isError) return <h3>{error.message}</h3>

  return (
    <>
      <Container maxWidth="xl" ref={containerRef}>
        <FilterPostMenu refetch={refetch} filter={filter} setFilter={setFilter} />
        {
          data?.pages.map((page, i) => (
            <Fragment key={i}>
              {page.data.length ? page.data?.map(({ title, body, id, status }) => {
                return <Card key={id} sx={{ minWidth: 275, marginTop: 5 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Title
                    </Typography>
                    <Typography variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body2">
                      {body}
                    </Typography>
                    <Chip size="small" variant="outlined" style={{ marginTop: '10px' }} label={status} color={getStatusColor(status)} />
                  </CardContent>
                  <CardActions>
                    <Link to={`${id}`} style={{ textDecoration: 'none', color: 'blue' }}>Read More</Link>
                  </CardActions>
                </Card>
              }) : <h2>Posts Not Found!!</h2>}

            </Fragment>
          ))
        }

        <div style={{margin: '10px'}}>{ isFetchingNextPage ? "Fetching..." : '' }</div>
      </Container>
    </>
  );
}

export default Posts;

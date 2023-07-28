import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPostKey, getPostsKey, getUserKey } from "../query/queryKey";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, getPosts, getUserById } from "../query/queryfn";
import Loader from "./Global/Loader";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, TextField, Typography } from "@mui/material";
import { deletePostById, updatePostTitle } from "../query/mutatefn";
import { useRef } from "react";
// import toast from 'react-hot-toast'

const Post = () => {

    const { id: postId } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const titleRef = useRef(null);

    const postQuery = useQuery({
        queryKey: getPostKey(postId),
        queryFn: () => getPostById(postId).then(d => d?.data),
    })

    const getUserQuery = useQuery({
        queryKey: getUserKey(postQuery?.data?.userId),
        queryFn: () => getUserById(postQuery?.data?.userId).then(d => d?.data),
        enabled: !!postQuery?.data?.userId
    })

    const postDeleteMutation = useMutation({
        mutationFn: (pid) => deletePostById(pid),
        onSuccess: (res) => {
            queryClient.removeQueries(getPostKey(postId));
            navigate("..");
        }
    })

    const updatePostTitleMutation = useMutation({
        mutationFn: ({id, newTitle}) => updatePostTitle(id, newTitle),
        onSuccess: (res) => {
            queryClient.invalidateQueries(getPostKey(postId))
            if(titleRef.current) titleRef.current.value = '';
        }
    })

    function updateTitleHandler(e){
        console.log(titleRef.current.value);
        if(titleRef.current && titleRef.current.value?.length){
            updatePostTitleMutation.mutate({
                id: postId,
                newTitle: titleRef.current?.value?.trim()
            });
        }else{
            // toast.error("Title can't be empty!!");
        }
    }

    if (postQuery.isLoading) return <Loader loading={postQuery.isLoading} />
    if (postQuery.isError) return <h3>{postQuery.error.message}</h3>
    if (getUserQuery.isError) return <h3>{getUserQuery.error.message}</h3>
    if (!postQuery.data) return <h2>NOT FOUND!!</h2>

    return <>
        <Grid item xs={12} md={6} mt={1}>
            <Card sx={{ display: 'flex', flexDirection: 'column' }} style={{ padding: '10px' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={'https://fakeimg.pl/300/'}
                    alt={'https://fakeimg.pl/300/'}
                />
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        {postQuery.data.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        { getUserQuery.isLoading ? '...' : 
                            <b>{getUserQuery.data?.name}</b> 
                        } 
                        <i style={{marginLeft: '5px'}}>{ new Date(postQuery.data.createdAt).toDateString() }</i>
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {postQuery.data.body}
                    </Typography>
                </CardContent>
                <Stack direction="row" spacing={2}>
                    <TextField id="standard-basic" label="Enter new title" inputRef={titleRef} variant="standard"/>
                    <Button variant="contained" disabled={updatePostTitleMutation.isLoading || postDeleteMutation.isLoading} type="submit" onClick={updateTitleHandler}>
                        Update
                    </Button>
                    <Button variant="outlined" disabled={updatePostTitleMutation.isLoading || postDeleteMutation.isLoading} onClick={() => postDeleteMutation.mutate(postId)} startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                </Stack>
            </Card>
        </Grid>
    </>
}

export default Post;
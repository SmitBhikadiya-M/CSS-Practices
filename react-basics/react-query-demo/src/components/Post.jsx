import { useMutation, useQuery } from "@tanstack/react-query";
import { getPostKey } from "../query/queryKey";
import { useParams } from "react-router-dom";
import { getPostById } from "../query/queryfn";
import Loader from "./Loader";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { deletePostById } from "../query/mutatefn";

const Post = () => {

    const { id: postId } = useParams();

    const postQuery = useQuery({
        queryKey: getPostKey(postId),
        queryFn: () => getPostById(postId),
    })

    const postDeleteMutation = useMutation({
        mutationFn: (pid) => deletePostById(pid),
        onSuccess: (res) => {
            console.log(res)
        } 
    })

    if (postQuery.isLoading) return <Loader loading={postQuery.isLoading} />
    if (postQuery.isError) return <h3>{postQuery.error.message}</h3>

    return <>
        <Grid item xs={12} md={6} mt={1}>
            <Card sx={{ display: 'flex', flexDirection: 'column' }} style={{padding: '10px'}}>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' }}}
                    image={'https://fakeimg.pl/300/'}
                    alt={'https://fakeimg.pl/300/'}
                />
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        {postQuery.data.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {new Date(postQuery.data.createdAt).toDateString()}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {postQuery.data.body}
                    </Typography>
                    {/* <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography> */}
                </CardContent>
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" disabled={postDeleteMutation.isLoading} onClick={()=>postDeleteMutation.mutate(postId)} startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>
            </Card>
        </Grid>
    </>
}

export default Post;
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const Post = ({ post }) => {

    const router = useRouter();

    if(router.isFallback){
        return <h2>Loading...</h2>
    }

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '300px',
            border: '1px solid blue',
            padding: '10px',
            boxShadow: '0 0 2px 2px blue',
            margin: '5px'
        }}>
            <h2 style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '5px'
            }}>
                <span>{post?.id}.</span> {post?.title}
            </h2>
            <p style={{
                margin: '10px',
                paddingTop: '10px',
                borderTop: '1px solid white'
            }}>{post?.body}</p>
            <div>
                <Link style={{ float: 'right' }} href={'/posts'}>Back</Link>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json());

    // const paths = posts.map((post) => ({
    //     params: {
    //         postId: post.id.toString()
    //     }
    // }))

    const paths = [
        {
            params: { postId: '1' },
        },
        {
            params: { postId: '2' },
        },
        {
            params: { postId: '3' },
        }
    ]
    return {
        paths, fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context;

    console.log("GET STATIC PROPS CALLED", params);
    const post = await new Promise((res, rej)=>{
        setTimeout(async ()=>{
            const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).then(r => r.json())
            res(post);
        }, 5000)
    });
    if (!post.id) {
       return {
        notFound: true
       }
    }
    console.log("GET STATIC PROPS EXECUTED", params);
    return {
        props: {
            post
        }
    }

}

export default Post
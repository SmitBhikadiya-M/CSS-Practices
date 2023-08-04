import Link from 'next/link';
import React from 'react'

const PostList = ({ posts }) => {

  return (
    <div>
      <h1>POSTS</h1>
      {
        posts.map(post => {
          return <div key={post.id} >
            <Link href={`posts/${post.id}`}>
              <h2 style={{ padding: '15px 5px' }}>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        })
      }
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json());

  return {
    props: {
      posts: (res || [])
    }
  }
}

export default PostList
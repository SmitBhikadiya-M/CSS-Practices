import React, { ReactComponentElement, ReactElement } from 'react'
import { client } from '../_app';
import BlogCard from '@/components/BlogCard/BlogCard';

const Blogs: React.FC<any> = (props) => {
  console.log(props)
  return (<>
    <div className='p-5 md:px-[10%] grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
      {
        props.posts && props.posts.map(({ _id, mainImage, slug, title }: any) => {
          return <div key={_id}>
            <BlogCard
              blogId={_id}
              mainImageUrl={mainImage.asset.url}
              title={title}
              slug={slug.current}
            />
          </div>
        })
      }
    </div>
  </>)
}

export async function getStaticProps(props: any) {

  let posts: any[] = [];
  if (props.preview) {
    // Draft Posts
    posts = await client.fetch(`*[_type=='post' && (_id in path("drafts.**"))]{
          _id,
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`)
  } else {
    // Published Posts
    posts = await client.fetch(`*[_type=='post' && !(_id in path("drafts.**"))]{
          _id,
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`);
  }

  console.log(posts[0].mainImage);

  return {
    props: {
      posts
    }
  }
}

export default Blogs
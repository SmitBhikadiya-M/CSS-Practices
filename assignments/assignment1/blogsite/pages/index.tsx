import React, { ReactComponentElement, ReactElement } from 'react'
import BlogCard from '@/components/BlogCard/BlogCard';
import { client } from '@/sanityClient';

const Blogs: React.FC<any> = (props) => {
  return (<>
    <div className='p-5 mt-10 md:px-[10%] grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2'>
      {
        props.posts && props.posts.map(({ _id, mainImage, slug, title, categories }: any) => {
          return <div key={_id} className='grid-flow-col'>
            <BlogCard
              blogId={_id}
              mainImageUrl={mainImage.asset.url}
              title={title}
              slug={slug.current}
              categories={categories}
            />
          </div>
        })
      }
    </div>
  </>)
}

export async function getStaticProps(props: any) {

  let isDraftMode = !!props.preview;

  const posts: any[] = await client.fetch(`*[_type=='post' && (_id in path($idMatch))]{
          _id,
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          categories[]->{
            title
          }
        }`, {
    idMatch: (isDraftMode ? "drafts.**" : "**")
  });

  return {
    props: {
      posts
    }
  }
}

export default Blogs
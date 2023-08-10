import { client, sanityConfig } from '@/sanityClient'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import RichTextComponents from '@/utils/portableComponent'

const BlogPage: React.FC = ({ post: postData }: any) => {

  const router = useRouter();
  if(router.isFallback) return <h2>Loading...</h2>

  return (
    <div className="bg-gray-200 min-h-screen p-12">
      <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="cursive text-3xl lg:text-6xl mb-4 text-center">
                {postData.title}
              </h2>
              <div className="flex justify-center text-gray-800">
                <Image
                  src={postData.author.image.asset.url}
                  className="w-10 h-10 rounded-full"
                  alt="Author is Kap"
                  width={0}
                  height={0}
                />
                <h4 className="cursive flex items-center pl-2 text-2xl">
                  {postData.author.name}
                </h4>
              </div>
            </div>
          </div>
          <Image
            className="w-full object-cover rounded-t"
            src={postData.mainImage.asset.url}
            height={0}
            width={0}
            alt='author'
            style={{ height: "400px" }}
          />
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <PortableText
            value={postData.body}
            components={RichTextComponents}
          />
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await client.fetch(`*[_type=='post']{ _id, slug }`);

  const paths = posts.map((post: any) => ({ params: { blogSlug: post.slug.current } }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params, preview }: any) {

  let isDraftMode = !!preview;
  const posts = await client.fetch(`
    *[_type=='post' && slug.current==$slug && (_id in path($idMatch))]{
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
      },
      body,
      author->{
        name,
        image{
          asset->{
            url
          }
        }
      }
    }
  `, {
    slug: params.blogSlug,
    idMatch: (isDraftMode ? "drafts.**" : "**")
  });

  if(posts.length < 1) return {
    notFound: true
  }

  return {
    props: {
      post: posts[0]
    }
  }
}

export default BlogPage
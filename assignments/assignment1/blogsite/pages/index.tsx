import React, { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard/BlogCard";
import { client } from "@/sanityClient";
import {
  addReadingList,
  getReadingList,
  removeFromList,
} from "@/utils/indexDBConfig";
import { useSession } from "next-auth/react";
import SEO from "@/components/SEO/SEO";

const Blogs: React.FC<any> = (props) => {
  const { data: session, status } = useSession();
  const [bookmarkedList, setBookmarkedList] = useState<any[] | null>(null);

  useEffect(() => {
    async function getData() {
      const readingList = await getReadingList();
      if (readingList && readingList?.length) {
        setBookmarkedList((prev) => {
          return readingList
            .filter((data) => session?.user?.email === data.email)
            .map((data) => data.slug);
        });
      } else {
        setBookmarkedList(null);
      }
    }

    if (status === "authenticated") {
      getData();
    } else if (status === "unauthenticated") {
      setBookmarkedList(null);
    }
  }, [session, status]);

  async function addToReadingListHandler(slug: string) {
    if (slug && session?.user) {
      await addReadingList(slug, session.user.email);
      setBookmarkedList((prev) => [...(prev || []), slug]);
    } else {
      alert("You need to login first to add bookmark!!");
    }
  }

  async function removeToReadingListHandler(slug: string) {
    if (slug && session?.user) {
      await removeFromList(slug);
      setBookmarkedList((prev) => (prev || [])?.filter((s) => slug !== s));
    } else {
      alert("You need to login first to remove bookmark!!");
    }
  }

  return (
    <>
      <div className="p-5 mt-10 md:px-[10%] grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2">
        <SEO
          title={"blogs"}
          description={
            "Exploring cutting-edge technology trends, innovations, and insights to fuel your curiosity. Dive into the future with our tech-focused blog"
          }
        />

        {props.posts &&
          props.posts.map(
            ({ _id, mainImage, slug, title, categories }: any) => {
              return (
                <div key={_id} className="grid-flow-col">
                  <BlogCard
                    blogId={_id}
                    mainImage={mainImage}
                    title={title}
                    slug={slug.current}
                    categories={categories}
                    bookMarkedList={bookmarkedList}
                    addToReadingList={addToReadingListHandler}
                    removeToReadingList={removeToReadingListHandler}
                    authStatus={status}
                  />
                </div>
              );
            }
          )}
      </div>
    </>
  );
};

export async function getStaticProps(props: any) {
  let isDraftMode = !!props.preview;

  const posts: any[] = await client.fetch(
    `*[_type=='post' && (_id in path($idMatch))]{
          _id,
          title,
          slug,
          mainImage{
            asset->{
              ...,
              metadata
            }
          },
          categories[]->{
            title
          }
        }`,
    {
      idMatch: isDraftMode ? "drafts.**" : "**",
    }
  );
  return {
    props: {
      posts,
    },
  };
}

export default Blogs;

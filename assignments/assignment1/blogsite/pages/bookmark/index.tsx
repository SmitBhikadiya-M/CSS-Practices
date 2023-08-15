import React, { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard/BlogCard";
import { client } from "@/sanityClient";
import {
  addReadingList,
  getReadingList,
  removeFromList,
} from "@/utils/indexDBConfig";
import { useSession } from "next-auth/react";
import Link from "next/link";
import SEO from "@/components/SEO/SEO";

const fetchBlogsBySlugs = async (slugs: any[]) => {
  return await client.fetch(
    `*[_type=='post' && (slug.current in $slugs)]{
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
      slugs,
    }
  );
};

const Blogs: React.FC<any> = (props) => {
  const { data: session, status } = useSession();
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState<any[]>([]);
  const [isBlogFetched, setIsBlogFetched] = useState(false);

  useEffect(() => {
    setIsBlogFetched(() => false);
    async function getData() {
      const readingList = await getReadingList();
      const slugs = readingList
        .filter((data) => session?.user?.email === data.email)
        .map((data) => data.slug);
      const blogs = slugs.length > 0 ? await fetchBlogsBySlugs(slugs) : [];
      setBookmarkedBlogs(() => blogs);
      setIsBlogFetched(() => true);
    }

    if (status == "authenticated") getData();
    else if (status == "unauthenticated") setIsBlogFetched(true);
  }, [session, status]);

  if (status === "loading" || !isBlogFetched) {
    return <p className="w-full h-full text-center pt-3">Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <p className="w-full h-full text-center pt-3 flex flex-col gap-3 justify-center items-center">
        <span>Access Denied</span>
        <Link
          href="/"
          className="border w-fit p-2 rounded-sm border-blue-700 hover:text-blue-700"
        >
          Back To Home
        </Link>
      </p>
    );
  }

  if (
    bookmarkedBlogs === null ||
    (Array.isArray(bookmarkedBlogs) && bookmarkedBlogs.length < 1)
  ) {
    return <p className="w-full h-full text-center pt-3">Not Found</p>;
  }

  const removeToReadingListHandler = () => {};

  return (
    <>
      <div className="p-5 mt-10 md:px-[10%] grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2">
        <SEO
          title={"blogs-bookmarked"}
          description={
            "Exploring cutting-edge technology trends, innovations, and insights to fuel your curiosity. Dive into the future with our tech-focused blog"
          }
        />

        {bookmarkedBlogs.map(
          ({ _id, mainImage, slug, title, categories }: any) => {
            return (
              <div key={_id} className="grid-flow-col">
                <BlogCard
                  blogId={_id}
                  mainImage={mainImage}
                  title={title}
                  slug={slug.current}
                  categories={categories}
                  removeToReadingList={removeToReadingListHandler}
                  authStatus={status}
                  forReadingList={true}
                />
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Blogs;

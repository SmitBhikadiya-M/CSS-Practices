import React, { useEffect, useMemo, useState } from "react";
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
import ToastMessage, { ToastType } from "@/components/Toast/Toast";

const Blogs: React.FC<any> = (props) => {
  const { data: session, status } = useSession();
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState<any[]>([]);
  const [savedBlogs, setSavedBlogs] = useState<any[]>([]);
  const [isBlogFetched, setIsBlogFetched] = useState(false);

  useEffect(() => {
    setIsBlogFetched(() => false);
    async function getData() {
      const readingList = await getReadingList();
      const blogsList = readingList.filter(
        (data) => session?.user?.email === data.email
      );
      setSavedBlogs(() => blogsList);
      const blogs =
        blogsList.length > 0
          ? await fetchBlogsBySlugs(blogsList.map((data) => data.slug))
          : [];
      setBookmarkedBlogs(() => blogs);
      setIsBlogFetched(() => true);
    }

    if (status == "authenticated") getData();
    else if (status == "unauthenticated") setIsBlogFetched(true);
  }, [session, status]);

  const notify = React.useCallback((type: ToastType, message: string) => {
    return ToastMessage({ type, message });
  }, []);

  const getSlugs = useMemo(
    function () {
      return savedBlogs?.map((b: any) => b.slug);
    },
    [savedBlogs]
  );

  const preparedIndexes = useMemo(
    function () {
      return savedBlogs?.reduce((result: any, b: any, index) => {
        if (!result[b.slug]) {
          result[b.slug] = { id: b.id, email: b.email };
        }
        return result;
      }, {});
    },
    [savedBlogs]
  );

  if (status === "loading" || !isBlogFetched) {
    return <p className="w-full h-full text-center flex flex-col gap-3 mt-10 items-center">
      <span className="text-lg">Loading...</span>
    </p>;
  }

  if (status === "unauthenticated") {
    return (
      <p className="w-full h-full text-center flex flex-col gap-3 mt-10 items-center">
        <span className="text-red-500 text-lg font-bold">Access Denied</span>
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
    return <p className="w-full h-full text-center flex flex-col gap-3 mt-10 items-center">
      <span className="text-lg">Oops, Blog Not Available. <Link className="text-blue-600 hover:text-blue-700 underline" href={'/'}>Explore Others!</Link></span>
    </p>;
  }

  async function removeToReadingListHandler(id: number, slug: string) {
    if (session?.user) {
      await removeFromList(id);
      setBookmarkedBlogs((prev) =>
        (prev || [])?.filter((b) => slug != b.slug.current)
      );
      setSavedBlogs((prev) => (prev || [])?.filter((b) => slug != b.slug));
      notify(ToastType.success, "Successfully removed from bookmark list!");
    } else {
      notify(ToastType.warning, "You need to login first to bookmark");
      return;
    }
  }

  return (
    <>
      <div className="p-5 my-10 md:px-[10%] grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
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
                  preparedIndexes={preparedIndexes}
                  bookMarkedList={getSlugs}
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

export default Blogs;

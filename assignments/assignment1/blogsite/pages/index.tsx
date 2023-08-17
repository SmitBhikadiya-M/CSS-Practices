import React, { useCallback, useEffect, useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard/BlogCard";
import { client } from "@/sanityClient";
import {
  addReadingList,
  getReadingList,
  removeFromList,
} from "@/utils/indexDBConfig";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import SEO from "@/components/SEO/SEO";
import ToastMessage, { ToastType } from "@/components/Toast/Toast";

const Blogs: React.FC<any> = (props) => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [bookmarkedList, setBookmarkedList] = useState<any[] | null>(null);

  useEffect(() => {
    async function getData() {
      const readingList = await getReadingList();
      if (readingList && readingList?.length) {
        setBookmarkedList((prev) => {
          return readingList.filter(
            (data) => session?.user?.email === data.email
          );
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

  const notify = React.useCallback((type: ToastType, message: string) => {
    return ToastMessage({ type, message });
  }, []);

  const addToReadingListHandler = useCallback(
    async function (slug: string) {
      if ((bookmarkedList ?? []).length >= 5) {
        return notify(
          ToastType.error,
          "You cann't add more than 5 blog post to reading list"
        );
      }

      if (slug && session?.user) {
        const result = await addReadingList(slug, session.user.email);
        setBookmarkedList((prev) => [
          ...(prev || []),
          {
            id: result,
            slug,
            email: session.user?.email,
          },
        ]);
      } else {
        notify(ToastType.warning, "You need to login first to add bookmark");
        push("/auth/signin?callbackUrl=" + window.location.origin);
      }
    },
    [bookmarkedList, notify, push, session]
  );

  async function removeToReadingListHandler(id: number, slug: string) {
    if (session?.user) {
      await removeFromList(id);
      setBookmarkedList((prev) => (prev || [])?.filter((b) => slug !== b.slug));
    } else {
      notify(ToastType.error, "You need to login first to remove bookmark");
    }
  }

  const getSlugs = useMemo(
    function () {
      return bookmarkedList?.map((b: any) => b.slug);
    },
    [bookmarkedList]
  );

  const preparedIndexes = useMemo(
    function () {
      return bookmarkedList?.reduce((result: any, b: any, index) => {
        if (!result[b.slug]) {
          result[b.slug] = { id: b.id, email: b.email };
        }
        return result;
      }, {});
    },
    [bookmarkedList]
  );

  return (
    <>
      <div className="p-5 my-10 md:px-[10%] grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
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
                    preparedIndexes={preparedIndexes}
                    categories={categories}
                    bookMarkedList={getSlugs}
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
              _id,
              url,
              metadata,
              originalFilename
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
    revalidate: 10,
  };
}

export default Blogs;

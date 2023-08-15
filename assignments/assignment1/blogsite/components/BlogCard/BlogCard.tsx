import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import SanityImage from "../SanityImage/SanityImage";

const BlogCard = ({
  addToReadingList,
  removeToReadingList,
  mainImage,
  title,
  slug,
  authStatus,
  bookMarkedList,
  forReadingList = false,
}: any) => {
  const [isBookmarked, setIsbookmarked] = useState(
    !(authStatus === "loading" || authStatus === "unauthenticated")
  );

  useEffect(() => {
    if (!forReadingList)
      setIsbookmarked(bookMarkedList && bookMarkedList.includes(slug));
    else setIsbookmarked(true);
  }, [bookMarkedList, forReadingList, slug]);

  const onClickReadingListHnadler = (e: any) => {
    e.preventDefault();
    if (isBookmarked || forReadingList) {
      removeToReadingList(slug);
    } else {
      addToReadingList(slug);
    }
  };

  return (
    <>
      <Link href={`/${slug}`}>
        <div className="rounded overflow-hidden shadow-lg relative">
          <SanityImage image={mainImage} />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 line-clamp-2" title={title}>
              {title}
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          {
            <div
              className="absolute right-1 top-1"
              onClick={onClickReadingListHnadler}
            >
              <button className="rounded-full p-2 bg-white">
                {isBookmarked ? (
                  <Image
                    src={"/assets/bookmarkfill.png"}
                    width={15}
                    height={15}
                    alt="bookmark"
                  />
                ) : (
                  <Image
                    src={"/assets/bookmark.png"}
                    width={15}
                    height={15}
                    alt="bookmark filled"
                  />
                )}
              </button>
            </div>
          }
        </div>
      </Link>
    </>
  );
};

export default BlogCard;

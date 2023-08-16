import { addReadingList, dbInti, getReadingList } from "@/utils/indexDBConfig";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header = () => {
  const { data: session, status } = useSession();
  const { pathname, push } = useRouter();

  async function handleAuthentication() {
    if (status === "authenticated") {
      await signOut({
        redirect: false
      });
      push('/');
    } else {
      await signIn();
    }
  }
  return (
    <header className="w-full p-3 flex flex-row items-center shadow-md px-[8%]">
      <div>
        <Link href={"/"}>
          <h1 className="focus:outline-none xl:text-4xl md:text-3xl text-2xl text-center text-gray-800 font-extrabold mb-2">
            Blogs
          </h1>
        </Link>
      </div>
      <div className="flex-1 px-4">
        <div className="flex justify-between items-center">
          {status === "authenticated" ? (
            <Link href={"/bookmark"}>Reading List</Link>
          ) : (
            <div></div>
          )}

          {status !== "loading" &&
            !pathname.toLowerCase().includes("signin") && (
              <div className="flex items-center gap-5">
                {status === "authenticated" && (
                  <span className=" flex items-baseline gap-1">
                    <Image
                      src={"/assets/user.png"}
                      width={16}
                      height={16}
                      alt="user"
                    />
                    <p>{session.user?.name}</p>
                  </span>
                )}
                <button
                  className="border-2 px-4 py-2 rounded-lg"
                  onClick={handleAuthentication}
                >
                  {status === "authenticated" ? "Logout" : "Signin"}
                </button>
              </div>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;

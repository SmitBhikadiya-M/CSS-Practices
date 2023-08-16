import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Index = () => {
  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<any>(null);
  const router: any = useRouter();
  const { data: session, status } = useSession();

  async function onSignup(e: any) {
    e.preventDefault();
    const registerRes = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_REST_ENDPOINT}/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formVal,
        }),
      }
    );
    const registerUser = await registerRes.json();

    if (!registerUser || registerUser.errorData) {
      setError(() => registerUser.message);
      return;
    }
    setError(() => null);

    router.push(
      `/auth/signin?userRegistered=true&callbackUrl=${router.query.callbackUrl}`
    );
    return;
  }

  if (status == "loading")
    return <p className="w-full h-full text-center pt-3">Loading...</p>;

  if (status == "authenticated") {
    return (
      <p className="w-full h-full text-center pt-3">
        You are already signed up do{" "}
        <button
          className="text-red-600 text-lg hover:text-red-700"
          onClick={() => signOut()}
        >
          logout
        </button>{" "}
        first
      </p>
    );
  }

  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-full max-w-sm">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={onSignup}
        >
          <div className="py-2 pb-6">
            <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              Create an account
            </h2>
          </div>
          <div className="mb-4 pt-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              required
              value={formVal.name}
              onChange={(e) =>
                setFormVal((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4 pt-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              required
              value={formVal.email}
              onChange={(e) =>
                setFormVal((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              required
              value={formVal.password}
              onChange={(e) =>
                setFormVal((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center flex-col justify-between">
            {error && <p className="pb-1 text-red-600">{error}</p>}
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
          <div>
            {!router?.loading && (
              <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                Have an account?
                <Link
                  href={`/auth/signin?callbackUrl=${router.query?.callbackUrl}`}
                  className="text-red-700 pl-1 transition duration-150 ease-in-out hover:text-red-600 focus:text-red-600 active:text-red-700"
                >
                  SignIn
                </Link>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;

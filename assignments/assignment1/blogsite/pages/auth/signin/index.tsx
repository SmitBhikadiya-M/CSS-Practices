import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

const Index = () => {
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<any>(null);
  const router: any = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status == "authenticated") {
      router.push(router.query.callbackUrl);
    }

    if (router.query.userRegistered) {
      setTimeout(() => {
        delete router.query.userRegistered;
        router.push(router, undefined, { shallow: true });
      }, 3000);
    }
  }, [session, status, router]);

  async function onSignin(e: any) {
    e.preventDefault();
    const res = await signIn("credentials", {
      Email: formVal.email,
      Password: formVal.password,
      redirect: false,
    });

    if (res?.error) {
      setError(() => res?.error);
      return;
    }

    setFormVal(() => ({ email: "", password: "" }));
    if (res?.ok) {
      router.push(router.query.callbackUrl);
    }
  }

  if (status == "loading" || status == "authenticated")
    return <p className="w-full h-full text-center pt-3">Loading...</p>;

  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-full max-w-sm">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={onSignin}
        >
          <div className="py-2 pb-6">
            <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              SignIn to your account
            </h2>
          </div>
          {router.query.userRegistered && (
            <p className="p-1 transition duration-150 ease-in-out bg-green-500 text-sm rounded-sm">
              User registered Successfully!!
            </p>
          )}
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
            {error && (
              <p className="w-full pb-1 text-red-600">
                *invalid credentials are not allowed!!
              </p>
            )}
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={router.loading}
            >
              Sign In
            </button>
          </div>
          <div>
            {!router?.loading && (
              <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                {`Don't have an account?`}
                <Link
                  href={`/auth/signup?callbackUrl=${router.query?.callbackUrl}`}
                  className="text-red-700 pl-1 transition duration-150 ease-in-out hover:text-red-600 focus:text-red-600 active:text-red-700"
                >
                  Register
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

import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Index = () => {
  const [formVal, setFormVal] = useState({
    username: "kminchelle",
    password: "0lelplR",
  });
  const [error, setError] = useState<any>(null);
  const router: any = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status == "authenticated") {
      router.push(router.query.callbackUrl);
    }
  }, [session, status, router]);

  const onSignin = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      Username: formVal.username,
      Password: formVal.password,
      redirect: false,
    });

    if (res?.error) {
      setError(() => res?.error);
      setFormVal(() => ({ username: "", password: "" }));
      return;
    }
    if (res?.ok) {
      router.push(router.query.callbackUrl);
    }
  };

  if (status == "loading" || status == "authenticated")
    return <p className="w-full h-full text-center pt-3">Loading...</p>;

  return (
    <div className="pt-10 flex justify-center items-center">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={onSignin}
        >
          <div className="border-b-2">
            <h2 className="font-bold text-lg text-center">SignIn</h2>
            {error && (
              <p className="py-1 text-red-600">**Invalid Credentials</p>
            )}
          </div>
          <div className="mb-4 pt-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              required
              value={formVal.username}
              onChange={(e) =>
                setFormVal((prev) => ({ ...prev, username: e.target.value }))
              }
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
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
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;

import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-slate-400 w-full h-[100vh]">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

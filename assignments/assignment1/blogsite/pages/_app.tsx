import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex-1">
            <Component {...pageProps} />
          </div>
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={true}
            newestOnTop={false}
            draggable={false}
            closeOnClick
            pauseOnHover
          />
        </div>
      </SessionProvider>
    </>
  );
}

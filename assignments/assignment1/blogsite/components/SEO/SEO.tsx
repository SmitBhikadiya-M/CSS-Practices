import Head from "next/head";
import React from "react";

const SEO = ({ title, description }: any) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
    </Head>
  );
};

export default SEO;

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { createClient, type ClientConfig, SanityClient } from '@sanity/client'
import Header from '@/components/Header/Header';

const config: ClientConfig = {
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  useCdn: true,
  apiVersion: `${process.env.NEXT_PUBLIC_SANITY_API_VERSION}`,
}

export const client: SanityClient = createClient(config);

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}

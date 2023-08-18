import { ClientConfig, SanityClient, createClient } from "@sanity/client";

export const sanityConfig: ClientConfig = {
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  useCdn: true,
  apiVersion: `${process.env.NEXT_PUBLIC_SANITY_API_VERSION}`,
}

export const client: SanityClient = createClient(sanityConfig);
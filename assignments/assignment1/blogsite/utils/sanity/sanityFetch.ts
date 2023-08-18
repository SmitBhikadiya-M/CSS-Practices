import { client } from "./sanityClient";

export const getAllPosts = async (isDrafted=false) => {
    return await client.fetch(
        `*[_type=='post' && (_id in path($idMatch))]{
              _id,
              title,
              slug,
              mainImage{
                asset->{
                  _id,
                  url,
                  metadata,
                  originalFilename
                }
              },
              categories[]->{
                title
              }
            }`,
        {
          idMatch: isDrafted ? "drafts.**" : "**",
        }
      );
}
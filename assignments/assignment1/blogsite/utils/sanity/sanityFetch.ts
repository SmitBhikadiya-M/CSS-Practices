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

export const getPostBySlugs = async (slugs: any[]) => {
    return await client.fetch(
    `*[_type=='post' && (slug.current in $slugs)]{
    _id,
    title,
    slug,
    mainImage{
      asset->{
        ...,
        metadata
      }
    },
    categories[]->{
      title
    }
  }`,
    {
      slugs,
    }
  );
}

export const getPostBySlug = async (slug: string, isDrafted=false) => {
  return await client.fetch(
    `
    *[_type=='post' && slug.current==$slug && (_id in path($idMatch))]{
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
      },
      body,
      author->{
        name,
        image{
          asset->{
            _id,
            url,
            metadata,
            originalFilename
          }
        }
      },
      seo{
        meta_description,
        focus_synonyms,
        focus_keyword,
        seo_title
      }
    }
  `,
    {
      slug,
      idMatch: isDrafted ? "drafts.**" : "**",
    }
  );
}
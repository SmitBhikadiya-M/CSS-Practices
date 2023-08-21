import { sanityConfig } from "@/utils/sanity/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

function getImage({ value, isInline }: any) {
    return imageUrlBuilder({
        clientConfig: sanityConfig
    })
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()
}

export default getImage;
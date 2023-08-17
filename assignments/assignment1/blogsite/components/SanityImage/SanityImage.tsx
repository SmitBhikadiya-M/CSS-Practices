import Image from "next/image";
import React from "react";

const extractDimentionFromCDN = (cdn: string) => {
  const updatedCDN = new URL(cdn);
  const [width, height] = cdn.split("-")[1].split(".")[0].split("x") ?? [100, 100];
  updatedCDN.searchParams.append('q', '75');
  updatedCDN.searchParams.append('fit', 'clip');
  updatedCDN.searchParams.append('auto', 'format');
  return {
    src: updatedCDN.toString(),
    width: +width,
    height: +height
  }
}

const SanityImage = ({ image, alt, className, style }: any) => {
  const { src, width, height } = extractDimentionFromCDN(image.asset.url);
  return (
    <Image
      width={width}
      height={height}
      src={src}
      placeholder="blur"
      blurDataURL={image.asset.metadata.lqip}
      alt={alt ?? image.asset.originalFilename}
      className={className ?? ""}
      style={...style ?? {}}
      sizes="fill"
    />
  );
};

export default SanityImage;

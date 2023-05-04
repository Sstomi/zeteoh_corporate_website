import React from "react";
import Image from "next/image";

export default function ImageWithCaption({
  image_url,
  long_caption = "",
  short_caption = "",
  alt = "",
  height = 750,
  width = 1260,
}) {
  return (
    <div className="grid grid-cols-1 justify-items-center">
      <div>
        <Image src={image_url} height={height} width={width} alt={alt} />
      </div>
      <div className="text-xs text-gray-800">{long_caption}</div>
      <div className="text-xs text-gray-800">{short_caption}</div>
    </div>
  );
}

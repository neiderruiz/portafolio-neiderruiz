import React, { FC } from "react";
import { TypeImage } from "./typesPartsArticle";

const Image: FC<TypeImage> = ({ file, withBackground, caption }) => {

  return (
    <div className={`${withBackground && "w-full text-center px-10"} my-5 `}>
      <img
        alt=""
        className="w-full rounded"
        srcSet={`${file?.url} 320w,
      ${file?.small} 480w,
      ${file?.regular} 800w"`}
        sizes="(max-width: 320px) 280px,
      (max-width: 480px) 440px,
      800px"
        src={file?.regular}
      />
      {caption && (
        <figcaption className="font-sm lg:font-medium">
          <small className="text-gray-500">{caption}</small>
        </figcaption>
      )}
    </div>
  );
};



export default Image;

import React, { FC } from "react";
import { TypeLinkTool } from "./typesPartsArticle";

const LinkTool: FC<TypeLinkTool> = ({ link, meta }) => {
  return (
    <div className="bg-white shadow-md py-4 px-5 my-5">
      <a href={link} className="flex" target="_blank" rel="noreferrer">
        <div className="w-5/6">
          <h5 className="font-bold">{meta?.title}</h5>
          <p>{meta?.description}</p>
        </div>
        <div className="w-1/6 text-center">
          <img width="50%" className="mx-auto" src={meta?.image?.url} alt="" />
        </div>
      </a>
    </div>
  );
};


export default LinkTool;

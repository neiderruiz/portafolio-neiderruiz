import React, { FC } from "react";
import { TypeList } from "./typesPartsArticle";

const List: FC<TypeList> = ({ items, style }) => {
  
  return (
    <ol
      className={`px-5 py-2 ${style === "ordered" ? "list-decimal" : "list-disc"
        } `}
    >
      {items.map((text) => (
        <li key={text} className="text-black font-normal text-xl py-1">
          {text}
        </li>
      ))}
    </ol>
  );
};

export default List;

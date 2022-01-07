import React, { FC } from "react";
import { TypeQuote } from "./typesPartsArticle";

const Quote: FC<TypeQuote> = ({ text, caption, alignment }) => {

  return (
    <blockquote
      className={`p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote my-10 ${alignment === "center" ? "text-center" : ""
        }`}
    >
      <p className="mb-2">{text}</p>
      <cite>
        -
        <a href="..." target="_blank" rel="noopener noreferrer">
          {caption}
        </a>
      </cite>
    </blockquote>
  );
};

export default Quote;

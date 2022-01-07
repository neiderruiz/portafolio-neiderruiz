import React, { FC } from "react";
import { TypeParagraph } from "./typesPartsArticle";

const Paragraph: FC<TypeParagraph> = ({ text }) => (
  <p className="text-black font-normal text-xl my-2 lg:my-7 "
    dangerouslySetInnerHTML={{ __html: text }}></p>
);

export default Paragraph;

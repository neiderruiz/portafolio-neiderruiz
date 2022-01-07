import React, { FC } from "react";
import Checklist from "../partsArticles/Checklist";
import Code from "../partsArticles/CodeEditor";
import Delimiter from "../partsArticles/Delimiter";
import Headers from "../partsArticles/Headers";
import Image from "../partsArticles/Image";
import LinkTool from "../partsArticles/LinkTool";
import List from "../partsArticles/List";
import Paragraph from "../partsArticles/Paragraph";
import Quote from "../partsArticles/Quote";
import Warning from "../partsArticles/Warning";
import { TypeSwitchArticle } from "./typeSwithArticle";

const SwitchArticle: FC<TypeSwitchArticle> = ({ type, key }) => {
  switch (type.action) {
    case "header":
      return <Headers key={key} {...type.information} />;

    case "image":
      return <Image key={key} {...type.information} />;

    case "paragraph":
      return <Paragraph key={key} {...type.information} />;

    case "checklist":
      return <Checklist key={key} {...type.information} />;

    case "code":
      return <Code key={key} {...type.information} />;

    case "list":
      return <List key={key} {...type.information} />;

    case "quote":
      return <Quote key={key} {...type.information} />;

    case "delimiter":
      return <Delimiter key={key} />;

    case "linkTool":
      return <LinkTool key={key} {...type.information} />;

    case "warning":
      return <Warning key={key} {...type.information} />;
  }
};

export default SwitchArticle;

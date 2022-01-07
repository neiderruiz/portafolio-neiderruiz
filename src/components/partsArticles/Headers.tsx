import React, { FC } from "react";
import { TypeHeaderH1 } from "./typesPartsArticle";


const Headers: FC<TypeHeaderH1> = ({ text, className, level }) => {
  switch (level) {
    case 1:
      return (<h1 className="uppercase gradient-text-primary font-bold text-xl leading-7">{text}</h1>)
    case 2:
      return (<h2 className="uppercase text-indigo-600 font-bold text-xl leading-7 my-4">{text}</h2>)
    case 3:
      return (<h3 className="uppercase text-indigo-50 font-bold text-xl leading-7">{text}</h3>)
    case 4:
      return (<h4 className="uppercase text-indigo-50 font-bold text-xl leading-7">{text}</h4>)
    case 5:
      return (<h5 className="uppercase text-indigo-50 font-bold text-xl leading-7">{text}</h5>)
    case 6:
      return (<h6 className="uppercase text-indigo-50 font-bold text-xl leading-7">{text}</h6>)
    default:
      return (<h1 className="uppercase text-indigo-900 font-bold text-xl leading-7">{text}</h1>)
  }

}

export default Headers;

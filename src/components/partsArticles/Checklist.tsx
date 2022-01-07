import React, { FC } from "react";
import { TypeChecklist } from "./typesPartsArticle";

const Checklist: FC<TypeChecklist> = ({ items }) => (
  <div className="py-2">
    {items.map(({ checked, text }) => (
      <div className="py-1">
        <label htmlFor="cbox" className="text-black font-normal text-xl">
          <input
            type="checkbox"
            id="cbox1"
            value="1"
            defaultChecked={checked}
          />
          {text}
        </label>
      </div>
    ))}
  </div>
);

export default Checklist;

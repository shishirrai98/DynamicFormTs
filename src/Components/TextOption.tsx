import React from "react";
import { OptionType } from "../Models/Setting";

const TextPart = () => {
  const types: string[] = [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];

  const refactoredType = (): OptionType[]=> types.map((type:string)=> ({label: type, value: type}))
 

  return (
    <>
      <select name="type" id="type">
       {
        refactoredType().map((type)=>
            <option value={type.value}>{type.label}</option>
        )
       }
      </select>
    </>
  );
};

export default TextPart;

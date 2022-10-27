import React from "react";
import { EMPTY_STRING } from "./Constant";

function dateContent({ date }) {
    return date
      ? new Date(date).toLocaleDateString('fr', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      : EMPTY_STRING;
  }

  export default function DateFormatter({ date, className }) {
    return (
      <div className={`font-normal ${className}`}>{dateContent({ date })}</div>
    );
  }
  
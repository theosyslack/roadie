import React from "react";
import { ResultData } from "../../types";
import "./Result.scss";
import { transformResultTypeToEmoji } from "../../transform/transformResultTypeToEmoji";

function Result({ type, name, mapUrl }: ResultData) {
  return (
    <div className="Result">
      <div className="Result__type">{transformResultTypeToEmoji(type)}</div>
      <a className="Result__name" href={mapUrl}>
        {name}
      </a>
    </div>
  );
}

export default Result;

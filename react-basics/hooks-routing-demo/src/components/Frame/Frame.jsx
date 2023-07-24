import "./frame.css";
import React from "react";

export default function Frame({ src, width, height }) {
  return (
    <div className="frameWrapper">
      <iframe title="outputframe" className="iframe" src={src} width={width} height={height} />
    </div>
  );
}

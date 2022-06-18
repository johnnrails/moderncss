import React from "react";
import "./SmolResponsiveFlexbox.scss";

export const SmolResponsiveFlexbox = () => {
  return (
    <div>
      <h2>
        Flexbox ?? {">"} Grid {"<"}
      </h2>
      <div
        className="smol-flexbox-grid"
        style={
          {
            "--min": "10ch",
            "--gap": "1rem",
          } as React.CSSProperties
        }
      >
        <div className="box">Item 1</div>
        <div className="box">Item 2</div>
        <div className="box">Item 3</div>
      </div>
    </div>
  );
};

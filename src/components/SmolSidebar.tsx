import React from "react";

import "./SmolSidebar.scss";

export const SmolSidebar = () => {
  return (
    <div className="container">
      <h2>Responsive Sidebar Layout</h2>
      <div className="smol-sidebar">
        <span className="box">Sidebar Content</span>
        <span className="box">Main Content</span>
      </div>
    </div>
  );
};

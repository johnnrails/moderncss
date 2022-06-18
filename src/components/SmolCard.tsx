import React from "react";
import "./SmolCard.scss";

export const SmolCard = () => {
  return (
    <div>
      <h1>Card</h1>
      <div className="smol-card-component">
        <img
          src="https://images.unsplash.com/photo-1607274227313-08146c819e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
          alt=""
        />
        <h3>Card Headline 1</h3>
        <p>Chocolate cake macaroon tootsie roll pastry gummies.</p>
        <p>Apple pie jujubes cheesecake ice cream gummies sweet roll lollipop.</p>
        <a href="https://moderncss.dev">Visit ModernCSS.dev</a>
      </div>
    </div>
  );
};

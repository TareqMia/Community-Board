import React from "react";

const Card = ({ title, description, url }) => {
  return (
    <div className="ui card four wide row">
      <div className="ui image">
        <img src={url} />
      </div>
      <div className="content">
        <a class="header">{title}</a>
        <div class="description">{description}</div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  let renderedList = data.cards.map((card) => {
    return (
      <Card title={card.name} description={card.description} url={card.url} />
    );
  });
  return (
    <div id="cards-container" className="ui cards">
      {renderedList}
    </div>
  );
};

export default Cards;

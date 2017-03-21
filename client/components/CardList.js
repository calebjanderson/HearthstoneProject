import React from "react";

export default ({ cards }) => {
  console.log(cards);

  return (
    <div>
      {cards.map(card => (
        <div>
          <h3>{card.name}</h3>
          <img src={card.img} />
        </div>
      ))}
    </div>
  );
};

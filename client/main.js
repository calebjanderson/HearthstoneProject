// React package that deals with DOM interactions
import ReactDOM from "react-dom";

// React package for constructing components (and all non-DOM related actions)
import React from "react";

// Import React component from PetShopWindow
import App from "./components/App";

import { fetchAllCards } from "./models/cards.js";

fetchAllCards().then(data => {
  data = data.filter((card) => card.img)
  ReactDOM.render(<App cards={data} />, document.getElementById("app"));
});
// Render that component to the DOM!

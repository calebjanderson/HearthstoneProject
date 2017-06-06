import React from "react";
import CardWindow from "./CardWindow";
import CardList from "./CardList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <CardWindow />
        <CardList cards={this.props.cards.slice(10, 200)} />
      </div>
    );
  }
}

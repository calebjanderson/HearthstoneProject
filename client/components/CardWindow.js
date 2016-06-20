import React from 'react';
import * as cards from '../models/cards'

export default class CardWindow extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      currentCard: null,
      goldenCards: false,
    };
  }

  
  getCurrentCard() {
    
  }







  render(){
    return (
      <div className="main">
        <div className="searchBar">
          <img src="http://i.imgur.com/boRiaOv.png" className="logo" />
          <form onSubmit={(e)=> {
            console.log("looks for card", this.state.currentCard)
            e.preventDefault()
            cards.fetchCardByName(this.state.currentCard)
            .then((cards) => {
              console.log(cards)
              this.setState({currentCard: cards})
            })
            .catch((cards) => {
              this.setState({currentCard: null})
            })
            }
          } >
            <label>Enter card name</label>
            <input onChange={(e)=>this.setState({currentCard: e.target.value})} />
            <button type="submit">Search</button>

          </form>
          <button className="goldenButton" onClick={() => this.setState({goldenCards: !this.state.goldenCards})}> {this.state.goldenCards ? "Show normal cards" : "Show golden cards"} </button>
          <select className="classSelector" onChange={(e) => {
            cards.fetchCardByClass(e.target.value)
            .then((x) => {
              this.setState({currentCard: x})
            })
          }}>
            <option value="Mage"> Mage </option>
            <option value="Paladin"> Paladin </option>
            <option value="Hunter"> Hunter </option>
            <option value="Warlock"> Warlock </option>
            <option value="Priest"> Priest </option>
            <option value="Rogue"> Rogue </option>
            <option values="Neutral"> Neutral </option>
          </select>
          <p>Filter by mana cost</p>
          <form onChange={(e) => {

            let cost = e.target.value
            let unfilteredCards = this.state.currentCard
            this.setState({currentCard: unfilteredCards})
            let filteredCards = this.state.currentCard.filter((card) => {
              console.log('card', card)
              console.log(cost)
              return card.cost == cost
            })

            console.log('currentCard', this.state.currentCard)
            console.log('filteredCards', filteredCards)
            this.setState({currentCard: filteredCards})
          }}>
            1<input type="radio" name="gender" value="1"/>
            2<input type="radio" name="gender" value="2"/>
            3<input type="radio" name="gender" value="3"/>
            4<input type="radio" name="gender" value="4"/>
            5<input type="radio" name="gender" value="5"/>
            6<input type="radio" name="gender" value="6"/>
            7<input type="radio" name="gender" value="7"/>
            8<input type="radio" name="gender" value="8"/>
            9<input type="radio" name="gender" value="9"/>
          </form>
        </div>
        <div className="displayCase">
          {this.state.currentCard ? this.state.currentCard.map((card) => {
                console.log('card')
                return <div className="card" key={card.cardId}>
                         {this.state.goldenCards ? 
                          <img src={card.imgGold}/>
                          : <img src={card.img}/> }
                      </div>
                     }) : 'No cards to display'}
        </div>
      </div>
      )
  }
}
      

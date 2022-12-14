import "./styles.css";
import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

class Counter extends React.Component {
  
//   constructor() {
//       super()
//       this.state = {
//           score: 0
//       };
//   }

  state = {
      score: 0
  }

  incrementScore(){
    this.setState( prevState =>{
      return {
        score: prevState.score + 1
      }
    });
  }

  decrementScore(){
    this.setState( prevState =>{
      return {
        score: prevState.score - 1
      }
    });
  }
    
  render() {
      return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
            <span className="counter-score">{this.state.score}</span>
            <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
        </div>
    )
  }
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id) }>X</button>
        {props.name}
      </span>
      
      <Counter />
    </div>
  )
}


class App extends React.Component {

  state = {
    players: [
      {
        "name": "Guil",
        "score": 50,
        "id": 1
      },
      {
        "name": "Treasure",
        "score": 85,
        "id": 2
      },
      {
        "name": "Ashley",
        "score": 95,
        "id": 3
      },
      {
        "name": "James",
        "score": 80,
        "id": 4
      }
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
        return {
             players: prevState.players.filter(p => p.id !== id )
        }
    });
  }

  render (){
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
      
        {this.state.players.map( player => 
          <Player 
            name={player.name}
            key={player.id.toString()}
            id={player.id}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}


export default App;

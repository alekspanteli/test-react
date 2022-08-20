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
      score: 200
  }
    
  render() {
      return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{this.state.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
  }
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>
      
      <Counter />
    </div>
  )
}


const App = (props) => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={props.initialPlayers.length} 
      />
    
      {props.initialPlayers.map( player => 
        <Player 
          name={player.name}
          key={player.id.toString()}
        />
      )}
    </div>
  );
}


export default App;

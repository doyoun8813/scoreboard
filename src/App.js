import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}


class Counter extends React.Component {
  state = {
    score: 30,
    num: 1
  }

  increment = () => {
    console.log('increment');
    //1. 반드시 setState로 상태 변경
    //2. 비동기로 동작하므로 콜백 펑션으로 상태 변경을 하라.
    //3. 머지된다.(오버라이트된다)
    this.setState((prevState) => ({
      score: prevState.score + 1
    }));
  }

  // 리액트 이벤트: 선언형 스타일: 함수 선언문을 우측에 배치
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> -</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.increment}> +</button>
      </div>
    );
  }
}

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      {/*3. 콜백 펑션 호출*/}
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}> X </button>
      {props.name}</span>
    <Counter score={props.score}/>
  </div>
);

class App extends React.Component {
  state = {
    players: [
      {name: 'KDY', score: 50, id: 1},
      {name: 'QQQ', score: 30, id: 2},
      {name: 'WWW', score: 20, id: 3},
      {name: 'EEE', score: 10, id: 4}
    ]
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Score Board" totalPlayers={11}/>
        {
          this.state.players.map((player) => {
            return (
              //2.props로
              <Player name={player.name} score={player.score} id={player.id} key={player.id} removePlayer={this.handleRemovePlayer}/>
            )
          })
        }
      </div>
    );
  }
  //1. 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer:', id);
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }
}

export default App;

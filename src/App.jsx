import {useState} from 'react';

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSqure() {
    setActivePlayer((cruActivePlayer)=> cruActivePlayer === 'X' ? 'O' : 'X');
  }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
      <Player initialName ="payler 1" symbol ="X" isActive={activePlayer === 'X'}/>
      <Player initialName ="payler 2" symbol ="O" isActive={activePlayer === 'O'}/>
      </ol>
      <GameBoard onSelectSqure={handleSelectSqure} activePlayerSymbol={activePlayer}/>
    </div>
  )
}

export default App

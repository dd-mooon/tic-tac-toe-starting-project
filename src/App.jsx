import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx"

function App() {
  return (
    <div id="game-container">
      <ol id="players">
      <Player initialName ="payler 1" symbol ="X" />
      <Player initialName ="payler 2" symbol ="O" />
      </ol>
      <GameBoard />
    </div>
  )
}

export default App

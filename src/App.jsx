import Player from "./components/Player.jsx";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
      <Player name ="payler 1" symbol ="X" />
      <Player name ="payler 2" symbol ="O" />
      </ol>
    </div>
  )
}

export default App


import {useState} from 'react';
export default function Player ({initialName, symbol, isActive}) {
    
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditngClick () {
    setIsEditing(editing => !editing);
  };

  function handleVaule (event) {
    setPlayerName(event.target.value)
  };

  let editingPlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit'
  if (isEditing) {
    editingPlayerName = <input type='text' required value={playerName} onChange={handleVaule}/>;
    btnCaption = 'Save'
  }
  return(
  <li className={isActive ? 'active' : undefined}>
    <span className="player">
      {editingPlayerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditngClick}>{btnCaption}</button>
  </li>
  )
}
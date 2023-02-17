import { useState } from "react";
import "./styles/tickytoe.css";
import GameBoard from "./components/GameBoard";
import DetermineWinner from "./components/DetermineWinner";
import GameReset from "./components/GameReset";
import UpdateWinner from "./components/UpdateWinner";

function App() {
  const [gameBoard, setGameBoard] = useState([]);
  const [playerFlag, setPlayerFlag] = useState(0);
  const [tieFlag, setTieFlag] = useState(0);
  const winner = DetermineWinner(gameBoard);

  const handleClick = (e) => {
    e.preventDefault();
    // OLD CODE FOR PLAYER TURNS
    // for (let i = 0; i < box.length; i++) {
    //   box[i].addEventListener("click", () => {
    //     if (playerFlag === 0) {
    //       if (box[i].innerText !== "O") {
    //         box[i].innerText = "X";
    //         playerFlag = 1;
    //         playerTurn.innerText = "Player O Turn!";
    //       }
    //     } else if (playerFlag === 1) {
    //       if (box[i].innerText !== "X") {
    //         box[i].innerText = "O";
    //         playerFlag = 0;
    //         playerTurn.innerText = "Player X Turn!";
    //       }
    //     }
    //   });

    // hmmmm....setGameBoard state like forms but I think with ongoing
    // gameBoard state (X's and O's gameBoard procession)
  };

  const handleGameReset = (e) => {
    e.preventDefault();
    // OLD CODE to be refactored
    // box[i].innerText = "";
    // winnerDisplay.innerText = "";
    // playerTurn.innerText = "Player X Plays First! Click a square!";
    // playerFlag = 0;
    // tieFlag = 1;
  };

  return (
    <div className="App">
      <header>
        <h1>Shall we play a game?</h1>
        <div>
          <p className="winner"></p>
        </div>
        <div>
          <p className="player-turn">Player X Plays First! Click a square!</p>
        </div>
      </header>
      <GameBoard />
      {/* <UpdateWinner winResult={winner}/> */}
      <GameReset />
    </div>
  );
}

export default App;

const DetermineWinner = (gameBoard) => {
  const winOutcomes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < winOutcomes.length; i++) {
    // NEEDS WORK!
    // loop through positions of winOutcomes based on gameBoard
  }
  return;
};

export default DetermineWinner;

// Refactored OLD CODE - FINALLY!!!
// const determineWinner = () => {
//     if (
//       (box1.innerText === "X" &&
//         box2.innerText === "X" &&
//         box3.innerText === "X") ||
//       ((box4.innerText === "X") & (box5.innerText === "X") &&
//         box6.innerText === "X") ||
//       (box7.innerText === "X" && box8.innerText === "X" && box7.innerText === "X")
//     ) {
//       playerFlag = 2;
//       updateWinner(PLAYER_X);
//     } else if (
//       (box1.innerText === "X" &&
//         box4.innerText === "X" &&
//         box7.innerText === "X") ||
//       (box2.innerText === "X" &&
//         box5.innerText === "X" &&
//         box8.innerText === "X") ||
//       (box3.innerText === "X" && box6.innerText === "X" && box9.innerText === "X")
//     ) {
//       playerFlag = 2;
//       updateWinner(PLAYER_X);
//     } else if (
//       (box1.innerText === "X" &&
//         box5.innerText === "X" &&
//         box9.innerText === "X") ||
//       (box3.innerText === "X" && box5.innerText === "X" && box7.innerText === "X")
//     ) {
//       playerFlag = 2;
//       updateWinner(PLAYER_X);
//     } else if (
//       (box1.innerText === "O" &&
//         box2.innerText === "O" &&
//         box3.innerText === "O") ||
//       (box4.innerText === "O" &&
//         box5.innerText === "O" &&
//         box6.innerText === "O") ||
//       (box7.innerText === "O" && box8.innerText === "O" && box7.innerText === "O")
//     ) {
//       playerFlag = 2;
//       updateWinner(PLAYER_O);
//     } else if (
//       (box1.innerText === "O" &&
//         box4.innerText === "O" &&
//         box7.innerText === "O") ||
//       (box2.innerText === "O" &&
//         box5.innerText === "O" &&
//         box8.innerText === "O") ||
//       (box3.innerText === "O" && box6.innerText === "O" && box9.innerText === "O")
//     ) {
//       playerFlag = 2;
//       updateWinner(PLAYER_O);
//     } else if (
//       (box1.innerText === "O" &&
//         box5.innerText === "O" &&
//         box9.innerText === "O") ||
//       (box3.innerText === "O" && box5.innerText === "O" && box7.innerText === "O")
//     ) {
//       playerFlag = 2;
//       updateWinner(PLAYER_O);
//     } else {
//       tieFlag++;
//       if (tieFlag === 9) {
//         updateWinner(PLAYER_T);
//       }
//     }
//   };

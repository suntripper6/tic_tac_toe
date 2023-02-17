const GameBoard = () => {
  return (
    <div className="grid-container">
      {/* ADD ONCLICK EVENTS FOR EACH */}
      <div id="box1" className="box hex-or-oh" value="0"></div>
      <div id="box2" className="box hex-or-oh" value="1"></div>
      <div id="box3" className="box hex-or-oh" value="2"></div>
      <div id="box4" className="box hex-or-oh" value="3"></div>
      <div id="box5" className="box hex-or-oh" value="4"></div>
      <div id="box6" className="box hex-or-oh" value="5"></div>
      <div id="box7" className="box hex-or-oh" value="6"></div>
      <div id="box8" className="box hex-or-oh" value="7"></div>
      <div id="box9" className="box hex-or-oh" value="8"></div>
    </div>
  );
};

export default GameBoard;

import React from "react";

const Right = () => {
  return (
    <div className="right-container">
      <div className="row">
        <div>
          <text>Tip Amount</text>
          <br />
          <small>/person</small>
        </div>
        <h1>$0.00</h1>
      </div>

      <div className="row">
        <div>
          <text>Total</text>
          <br />
          <small>/person</small>
        </div>
        <h1>$0.00</h1>
      </div>

      <button onClick={() => {}}>RESET</button>
    </div>
  );
};

export default Right;

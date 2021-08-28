import React from "react";
import dollarIcon from "./Images/icon-dollar.svg";
import personIcon from "./Images/icon-person.svg";

const Left = () => {
  return (
    <div className="left-container">
      <label className="label">
        Bill
        <div className="input-container">
          <img src={dollarIcon} alt="$" />
          <input type="text" name="bill" placeholder="0" />
        </div>
      </label>
      <label className="label">
        Select Tip %
        <div className="tip-container">
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>20%</button>
          <button>25%</button>
          <input type="text" name="custom" placeholder="Custom" />
        </div>
      </label>
      <label className="label">
        Number of People{" "}
        <div className="input-container">
          <img src={personIcon} alt="person" />
          <input type="text" name="person" placeholder="0" />
        </div>
      </label>
    </div>
  );
};

export default Left;

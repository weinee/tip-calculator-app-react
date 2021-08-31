import { observer } from "mobx-react-lite";
import React from "react";

import dollarIcon from "../Images/icon-dollar.svg";
import personIcon from "../Images/icon-person.svg";
import { calcStore } from "../store";

const Left = () => {
  const {
    bill,
    setBill,
    tip,
    setTip,
    noOfPeople,
    setNoOfPeople,
    customTip,
    setCustomTip,
    error,
    setError,
  } = calcStore;

  function onChangePeople(e) {
    if (e.target.value === "0") {
      setError(true);
    } else {
      setError(false);
      if (e.target.validity.valid) {
        setNoOfPeople(e.target.value);
      }
    }
  }

  return (
    <div className="left-container">
      <label className="label">
        Bill
        <div className="input-container">
          <img src={dollarIcon} alt="$" />
          <input
            type="number"
            placeholder="0"
            min="0"
            step="0.01"
            value={bill}
            onInput={(e) => e.target.validity.valid && setBill(e.target.value)}
          />
        </div>
      </label>
      <label className="label">
        Select Tip %
        <div className="tip-container">
          <button
            disabled={tip === "5"}
            value="5"
            onClick={(e) => {
              setTip(e.target.value);
            }}
          >
            5%
          </button>
          <button
            disabled={tip === "10"}
            value="10"
            onClick={(e) => {
              setTip(e.target.value);
            }}
          >
            10%
          </button>
          <button
            disabled={tip === "15"}
            value="15"
            onClick={(e) => {
              setTip(e.target.value);
            }}
          >
            15%
          </button>
          <button
            disabled={tip === "20"}
            value="20"
            onClick={(e) => {
              setTip(e.target.value);
            }}
          >
            20%
          </button>
          <button
            disabled={tip === "25"}
            value="25"
            onClick={(e) => {
              setTip(e.target.value);
            }}
          >
            25%
          </button>

          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Custom"
            value={customTip}
            onInput={(e) =>
              e.target.validity.valid && setCustomTip(e.target.value)
            }
          />
        </div>
      </label>
      <label className="label">
        <div className="label-title">
          <text>Number of People</text>
          {error && <text className="error">Can't be zero</text>}
        </div>
        <div className="input-container">
          <img src={personIcon} alt="person" />
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="0"
            value={noOfPeople}
            onInput={(e) => onChangePeople(e)}
          />
        </div>
      </label>
    </div>
  );
};

export default observer(Left);

import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { calcStore } from "../store";

const Right = () => {
  const {
    bill,
    setBill,
    tip,
    setTip,
    noOfPeople,
    setNoOfPeople,
    tipAmount,
    setTipAmount,
    total,
    setTotal,
  } = calcStore;

  useEffect(() => {
    if (
      bill !== "0" &&
      bill !== "" &&
      tip !== "0" &&
      noOfPeople !== "0" &&
      noOfPeople !== ""
    ) {
      const amount = (bill * (tip / 100)) / noOfPeople;
      const totalPerPerson = bill / noOfPeople + amount;
      setTipAmount(amount);
      setTotal(totalPerPerson);
    }
  }, [bill, tip, noOfPeople]);

  const reset = () => {
    setBill("");
    setTip("");
    setNoOfPeople("");
    setTipAmount(0);
    setTotal(0);
  };

  const checkDisabled = () => {
    return false;
  };

  return (
    <div className="right-container">
      <div className="row">
        <div>
          <text>Tip Amount</text>
          <br />
          <small>/person</small>
        </div>
        <h1>${tipAmount.toFixed(2)}</h1>
      </div>

      <div className="row">
        <div>
          <text>Total</text>
          <br />
          <small>/person</small>
        </div>
        <h1>${total.toFixed(2)}</h1>
      </div>

      <button disabled={checkDisabled} onClick={reset}>
        RESET
      </button>
    </div>
  );
};

export default observer(Right);

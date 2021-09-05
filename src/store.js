import { makeAutoObservable } from "mobx";

class CalcModel {
  constructor() {
    makeAutoObservable(this);
  }

  bill = "";
  setBill = (bill) => {
    this.bill = bill;
  };

  tip = "";
  setTip = (tip) => {
    this.tip = tip;
  };

  noOfPeople = "";
  setNoOfPeople = (noOfPeople) => {
    this.noOfPeople = noOfPeople;
  };

  customTip = "";
  setCustomTip = (customTip) => {
    this.customTip = customTip;
  };

  error = "";
  setError = (error) => {
    this.error = error;
  };

  billError = "";
  setBillError = (error) => {
    this.billError = error;
  };

  tipAmount = 0;
  setTipAmount = (tipAmount) => {
    this.tipAmount = tipAmount;
  };

  total = 0;
  setTotal = (total) => {
    this.total = total;
  };

  disabled = true;
  setDisabled = (disabled) => {
    this.disabled = disabled;
  };
}

export const calcStore = new CalcModel();

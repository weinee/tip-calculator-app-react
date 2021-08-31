import { makeAutoObservable } from "mobx";

class CalcModel {
  constructor() {
    makeAutoObservable(this);
  }

  bill = "";
  setBill = (bill) => {
    this.bill = bill;
  };

  tip = 0;
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

  tipAmount = 0;
  setTipAmount = (tipAmount) => {
    this.tipAmount = tipAmount;
  };

  total = 0;
  setTotal = (total) => {
    this.total = total;
  };
}

export const calcStore = new CalcModel();

import { useState } from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  const resetHandler = () => {
    setCurrentSavings("");
    setDuration("");
    setExpectedInterest("");
    setYearlySavings("");
  };
  const [currentSavings, setCurrentSavings] = useState("");
  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const [yearlySavings, setYearlySavings] = useState("");
  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const [expectedInterest, setExpectedInterest] = useState("");
  const expectedInterestHandler = (event) => {
    setExpectedInterest(event.target.value);
  };
  const [duration, setDuration] = useState("");
  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const investmentData = {
      current_savings: +currentSavings,
      yearly_contribution: yearlySavings,
      expected_return: expectedInterest,
      duration: duration
    };
    props.onCalculateHandler(investmentData);
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setDuration("");
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes["input-group"]}>
        {" "}
        {/*accesssing classes with a hiphen*/}
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            value={currentSavings}
            id="current-savings"
            onChange={currentSavingsHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            value={yearlySavings}
            id="yearly-contribution"
            onChange={yearlySavingsHandler}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={expectedInterest}
            type="number"
            id="expected-return"
            onChange={expectedInterestHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={durationHandler}
            value={duration}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default Form;

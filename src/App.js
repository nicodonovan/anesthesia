import React, { useState } from "react";
import Info from "./Info";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [ready, setReady] = useState(false);

  function handleAgeChange(e) {
    const value = e.target.value;
    setAge(value);
  }
  function handleWeightChange(e) {
    const value = e.target.value;
    setWeight(value);
  }

  function showInfo() {
    setReady(true);
  }

  function reset() {
    setAge(0);
    setWeight(0);
    setReady(false);
    document.getElementById("weight").value = "";
    document.getElementById("age-form").reset();
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Peds Anesthesia</h1>
        <p className="lead">
          A simple tool built for the the UCSD Anesthesia Residents
        </p>
        <hr className="my-4"></hr>
        <p>version 1.0</p>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>Age: </label>
            <form id="age-form">
              <select onChange={handleAgeChange} className="form-control">
                <option defaultValue> -- select an age range -- </option>
                <option value={1}>Neonate</option>
                <option value={2}>1-6 mo</option>
                <option value={3}>6mo - 1y</option>
                <option value={4}>1 - 2y</option>
                <option value={5}>2 - 4y</option>
                <option value={6}>4 - 6y</option>
                <option value={7}>6 - 8y</option>
                <option value={8}>9 - 12y</option>
                <option value={9}>{">"}14y</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>Weight: </label>
            <input
              type="text"
              name="weight"
              id="weight"
              className="form-control"
              placeholder="in kilograms"
              autoComplete="off"
              onChange={handleWeightChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center button-group">
          <button
            className="btn btn-outline-primary btn-lg main-buttons"
            onClick={showInfo}
          >
            Calculate
          </button>
          <button
            className="btn btn-outline-danger btn-lg main-buttons"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>

      <div>{ready ? <Info age={age} weight={weight} /> : null}</div>
      <Footer />
    </div>
  );
}

export default App;

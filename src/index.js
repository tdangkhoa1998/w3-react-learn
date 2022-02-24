import React from "react";
import ReactDOM from "react-dom";
import Car from "./Car";
import Plane from "./Plane";
import { useState } from "react";
// function Car(props) {
//   return <h2>I am a {props.color} Car !</h2>
// }

// class Car2 extends React.Component {

//   constructor(props) {
//     super(props);
//     // this.state = { color: "Red" };
//   }

//   render() {
//     return <h2>Hi, this is Car {this.props.color}</h2>
//   }
// }

function CarBle(props) {
  return <p>{props.brand}</p>
}

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      <Goal></Goal>
      {
        cars.length > 0 &&
        cars.map((car, index) => <CarBle brand={car} key={index}></CarBle>)
      }
    </>
  );
}

function MadeGoal() {
  return (
    <>
      <h1>You are missed goal</h1>
    </>
  )
}

function MissedGoal() {
  return (
    <>
      <h1>You are made a goal</h1>
    </>
  )
}

function Goal(props) {
  const isGoal = props.isGoal;
  return (<>{isGoal ? <MadeGoal></MadeGoal> : <MissedGoal></MissedGoal>}</>)
}

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const cars = ['Ford', 'BMW', 'Audi'];
ReactDOM.render(<MyForm />,
  document.getElementById('root'));

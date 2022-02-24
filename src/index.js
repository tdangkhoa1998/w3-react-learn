import React from "react";
import ReactDOM from "react-dom";
import Car from "./Car";
import Plane from "./Plane";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";


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

// function CarBle(props) {
//   return <p>{props.brand}</p>;
// }

// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       <Goal></Goal>
//       {cars.length > 0 &&
//         cars.map((car, index) => <CarBle brand={car} key={index}></CarBle>)}
//     </>
//   );
// }

// function MadeGoal() {
//   return (
//     <>
//       <h1>You are missed goal</h1>
//     </>
//   );
// }

// function MissedGoal() {
//   return (
//     <>
//       <h1>You are made a goal</h1>
//     </>
//   );
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   return <>{isGoal ? <MadeGoal></MadeGoal> : <MissedGoal></MissedGoal>}</>;
// }

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({ ...values, [name]: value }));
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input
//           type="text"
//           name="username"
//           value={inputs.username || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <label>Enter your age:
//         <input
//           type="number"
//           name="age"
//           value={inputs.age || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )

// }

// const cars = ["Ford", "BMW", "Audi"];
// ReactDOM.render(<MyForm />, document.getElementById("root"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="blogs" element={<Blogs></Blogs>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<NoPage></NoPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

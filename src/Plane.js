import React from "react";

class Plane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "Red",
            year: 1964
        };
    }

    changeColor = () => {
        this.setState({ color: "Blue" })
    }

    render() {
        return <div>
            <h1>This car is {this.state.color}</h1>
            <button type="button" onClick={this.changeColor}>Change Color</button>
        </div>;
    }
}

export default Plane;

import React from "react";
import "./StyleClass.css";

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello <strong> Saheeq</strong>
        <h3>Fruit</h3>
        <ul className="myUl">
          <li>Apple </li>
          <li>Orange</li>
          <li>Mango</li>
        </ul>
        <h4>Vehicle</h4>
        <ol className="myOl">
          <li>Car</li>
          <li>Train</li>
          <li>Plan</li>
        </ol>
        <p>Total li Elements: {this.props.ele}</p>
      </div>
    );
  }
}

export default Hello;

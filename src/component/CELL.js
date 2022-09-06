import React from "react";

export default class Cell extends React.Component {
  state = {
    number: 0,
  };
  constructor() {
    super();
    this.selector = this.selector.bind(this);
  }

  selector(event) {
    this.setState(() => {
      return {
        number: event.target.value,
      };
    });
    if (event.target.value === "") {
      event.target.value = 0;
    }
    if (this.props.data === "S") {
      this.props.funcS(event.target.value);
      if (this.state.number < 12) {
        this.props.priceS(parseInt(event.target.value) * 4.39);
      }
      if (this.state.number > 11 && this.state.number < 36) {
        this.props.priceS(parseInt(event.target.value) * 3.69);
      }
      if (this.state.number > 35) {
        this.props.priceS(parseInt(event.target.value) * 2.99);
      }
    }
    if (this.props.data === "M") {
      this.props.funcM(event.target.value);
      if (this.state.number < 12) {
        this.props.priceM(parseInt(event.target.value) * 4.39);
      }
      if (this.state.number > 11 && this.state.number < 36) {
        this.props.priceM(parseInt(event.target.value) * 3.69);
      }
      if (this.state.number > 35) {
        this.props.priceM(parseInt(event.target.value) * 2.99);
      }
    }
    if (this.props.data === "L") {
      this.props.funcL(event.target.value);
      if (this.state.number < 12) {
        this.props.priceL(parseInt(event.target.value) * 4.39);
      }
      if (this.state.number > 11 && this.state.number < 36) {
        this.props.priceL(parseInt(event.target.value) * 3.69);
      }
      if (this.state.number > 35) {
        this.props.priceL(parseInt(event.target.value) * 2.99);
      }
    }
    if (this.props.data === "XL") {
      this.props.funcXL(event.target.value);
      if (this.state.number < 12) {
        this.props.priceXL(parseInt(event.target.value) * 4.39);
      }
      if (this.state.number > 11 && this.state.number < 36) {
        this.props.priceXL(parseInt(event.target.value) * 3.69);
      }
      if (this.state.number > 35) {
        this.props.priceXL(parseInt(event.target.value) * 2.99);
      }
    }
    if (this.props.data === "XXL") {
      this.props.funcXXL(event.target.value);
      if (this.state.number < 12) {
        this.props.priceXXL(parseInt(event.target.value) * 4.39);
      }
      if (this.state.number > 11 && this.state.number < 36) {
        this.props.priceXXL(parseInt(event.target.value) * 3.69);
      }
      if (this.state.number > 35) {
        this.props.priceXXL(parseInt(event.target.value) * 2.99);
      }
    }
    if (this.props.data === "XXXL") {
      this.props.funcXXXL(event.target.value);
      if (this.state.number < 12) {
        this.props.priceXXXL(parseInt(event.target.value) * 4.39);
      }
      if (this.state.number > 11 && this.state.number < 36) {
        this.props.priceXXXL(parseInt(event.target.value) * 3.69);
      }
      if (this.state.number > 35) {
        this.props.priceXXXL(parseInt(event.target.value) * 2.99);
      }
    }
  }
  render() {
    if (this.state.number > 0 && this.state.number < 12) {
      return (
        <tr>
          <td className="border-table">{this.props.data}</td>
          <td className="border-table background-yellow">4.39$</td>
          <td className="border-table">3.69$</td>
          <td className="border-table">2.99$</td>
          <td className="border-table">{this.props.value}</td>
          <td className="border-table">
            <input
              onChange={this.selector}
              type="text"
              className="input-width"
            />
          </td>
        </tr>
      );
    }
    if (this.state.number > 11 && this.state.number < 36) {
      return (
        <tr>
          <td className="border-table">{this.props.data}</td>
          <td className="border-table">4.39$</td>
          <td className="border-table background-yellow">3.69$</td>
          <td className="border-table">2.99$</td>
          <td className="border-table">{this.props.value}</td>
          <td className="border-table">
            <input
              onChange={this.selector}
              type="text"
              className="input-width"
            />
          </td>
        </tr>
      );
    }
    if (this.state.number > 35) {
      return (
        <tr>
          <td className="border-table">{this.props.data}</td>
          <td className="border-table">4.39$</td>
          <td className="border-table">3.69$</td>
          <td className="border-table background-yellow">2.99$</td>
          <td className="border-table">{this.props.value}</td>
          <td className="border-table">
            <input
              onChange={this.selector}
              type="text"
              className="input-width"
            />
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td className="border-table">{this.props.data}</td>
          <td className="border-table">4.39$</td>
          <td className="border-table">3.69$</td>
          <td className="border-table">2.99$</td>
          <td className="border-table">{this.props.value}</td>
          <td className="border-table">
            <input
              onChange={this.selector}
              type="text"
              className="input-width"
            />
          </td>
        </tr>
      );
    }
  }
}

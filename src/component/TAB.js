import React from "react";
import Cell from "./CELL";

export default class Tab extends React.Component {
  state = {
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
    XXXL: 0,
    pS: 0,
    pM: 0,
    pL: 0,
    pXL: 0,
    pXXL: 0,
    pXXXL: 0,
  };
  constructor() {
    super();
    this.upgradeS = this.upgradeS.bind(this);
    this.upgradeM = this.upgradeM.bind(this);
    this.upgradeL = this.upgradeL.bind(this);
    this.upgradeXL = this.upgradeXL.bind(this);
    this.upgradeXXL = this.upgradeXXL.bind(this);
    this.upgradeXXXL = this.upgradeXXXL.bind(this);
    this.pricingS = this.pricingS.bind(this);
    this.pricingM = this.pricingM.bind(this);
    this.pricingL = this.pricingL.bind(this);
    this.pricingXL = this.pricingXL.bind(this);
    this.pricingXXL = this.pricingXXL.bind(this);
    this.pricingXXXL = this.pricingXXXL.bind(this);
  }

  upgradeS(data) {
    this.setState(() => {
      return {
        S: parseInt(data),
      };
    });
  }
  upgradeM(data) {
    this.setState(() => {
      return {
        M: parseInt(data),
      };
    });
  }
  upgradeL(data) {
    this.setState(() => {
      return {
        L: parseInt(data),
      };
    });
  }
  upgradeXL(data) {
    this.setState(() => {
      return {
        XL: parseInt(data),
      };
    });
  }
  upgradeXXL(data) {
    this.setState(() => {
      return {
        XXL: parseInt(data),
      };
    });
  }
  upgradeXXXL(data) {
    this.setState(() => {
      return {
        XXXL: parseInt(data),
      };
    });
  }
  pricingS(data) {
    this.setState(() => {
      return {
        pS: data,
      };
    });
  }
  pricingM(data) {
    this.setState(() => {
      return {
        pM: data,
      };
    });
  }
  pricingL(data) {
    this.setState(() => {
      return {
        pL: data,
      };
    });
  }
  pricingXL(data) {
    this.setState(() => {
      return {
        pXL: data,
      };
    });
  }
  pricingXXL(data) {
    this.setState(() => {
      return {
        pXXL: data,
      };
    });
  }
  pricingXXXL(data) {
    this.setState(() => {
      return {
        pXXXL: data,
      };
    });
  }
  render() {
    return (
      <div className="m-5">
        <table>
          <thead>
            <tr className="border-table">
              <td className="border-table"></td>
              <td className="border-table">1-11</td>
              <td className="border-table">12-35</td>
              <td className="border-table">36+</td>
              <td className="border-table">Stock</td>
              <td className="border-table">Qté</td>
            </tr>
            <Cell
              data={"S"}
              value={4240}
              funcS={this.upgradeS}
              priceS={this.pricingS}
            />
            <Cell
              data={"M"}
              value={3869}
              funcM={this.upgradeM}
              priceM={this.pricingM}
            />
            <Cell
              data={"L"}
              value={1025}
              funcL={this.upgradeL}
              priceL={this.pricingL}
            />
            <Cell
              data={"XL"}
              value={4882}
              funcXL={this.upgradeXL}
              priceXL={this.pricingXL}
            />
            <Cell
              data={"XXL"}
              value={8211}
              funcXXL={this.upgradeXXL}
              priceXXL={this.pricingXXL}
            />
            <Cell
              data={"XXXL"}
              value={1462}
              funcXXXL={this.upgradeXXXL}
              priceXXXL={this.pricingXXXL}
            />
          </thead>
        </table>
        <button className="button is-info mt-4">Ajouter au panier</button>
        <p>
          Quantité :{" "}
          {this.state.S +
            this.state.M +
            this.state.L +
            this.state.XL +
            this.state.XXL +
            this.state.XXXL}
        </p>{" "}
        <br />
        <p>
          Prix :{" "}
          {this.state.pS +
            this.state.pM +
            this.state.pL +
            this.state.pXL +
            this.state.pXXL +
            this.state.pXXXL}{" "}
          $
        </p>
      </div>
    );
  }
}

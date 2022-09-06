import React from "react";
import tshirt from "../img/tshirt.jpeg";
import Tab from "./TAB";

export default class Card extends React.Component {
  render() {
    return (
      <div className="is-flex content-center mt-5">
        <div className="card p-3">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={tshirt} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left"></div>
              <div className="media-content">
                <p className="title is-4">T-shirt Blanc</p>
                <p className="subtitle is-6">by Louan Flamain</p>
              </div>
            </div>

            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </p>
              <br />
              <p>
                <strong className="mt-1">à partir de 2,99$</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="center">
          <Tab />
        </div>
      </div>
    );
  }
}

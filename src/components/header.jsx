import React, { Component } from "react";
import BackgroundSlider from "react-background-slider";
import intro from "./imgs/intro-bg.jpg";
import one from "./imgs/one.png";
import two from "./imgs/two.png";
import three from "./imgs/three.png";
import four from "./imgs/four.png";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <BackgroundSlider
            images={[intro, one, two, three, four, intro]}
            duration={5}
            transition={2}
          />
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

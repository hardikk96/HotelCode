import React, { Component } from "react";
export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Tech</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div>
                      <div>
                        <div className="card-figure">
                          <div className="thefront">
                            {" "}
                            <img
                              className="card-image"
                              src={d.image}
                              alt=""
                              width={d.width}
                              height={d.height}
                            ></img>
                            <i className={d.icon}></i>
                            <div className="service-desc">
                              <h3>{d.name}</h3>
                              <p>{d.text}</p>
                            </div>
                          </div>
                          <div className="theback">
                            {" "}
                            <i className={d.iconback}></i>
                            <div className="service-desc">
                              <h3>{d.nameback}</h3>
                              <p>{d.textback}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;

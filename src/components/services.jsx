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
                      <div className="maincontainer1">
                        <div className="card-body">
                          <div className="thefront">
                            {" "}
                            <i className={d.icon}></i>
                            <div className="service-desc">
                              <h3>{d.name}</h3>
                              <p>{d.text}</p>
                            </div>
                          </div>
                          <div className="theback">
                            {" "}
                            <i className={d.icon}></i>
                            <div className="service-desc">
                              <h3>{d.name}</h3>
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

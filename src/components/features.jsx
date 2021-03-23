import React, { Component } from "react";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Product</h2>
          </div>
          <div className="row">
              {this.props.data
                ? this.props.data.map((d,i) => (
                    <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-6">
                      <div className="card">
                        <div className="card-body">
                            {" "}
                            <i className={d.icon}></i>
                            <h3>{d.title}</h3>
                          </div>
                      </div>      
                    </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;

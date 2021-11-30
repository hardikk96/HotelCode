import React from 'react';
import { Link } from 'react-router-dom';

export default function IdentityScanner(props) {
    return(
        <div id="identityscanner">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Boston International Hotel</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <img src="/img/checkin.png" alt="" className="img-responsive"/>
                </div>
            </div>
            <br/>
            <div class="row">
                <div className="col-md-12 text-center">
                    <h3>
                        Self Check-In 
                    </h3>
               </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src="/img/identityscanner.jpg" alt="" className="img-responsive big"/>
                </div>
                <div className="col-md-8 text-center">
                    <div className="row">
                        <h1 className="h1">Place your identity upside-down on the scanner to verify.</h1>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="row text-center">
            <Link onClick={() => props.history.push("/paymentverify")}>
                <button className="btn btn-success btn-xl">
                    {/* <h4 style={{ fontSize: "22px"}}> */}
                        Scan and Complete Verification
                    {/* </h4> */}
                </button>
            </Link>
            </div>
        </div>
    )
}
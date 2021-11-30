import React from 'react';
import { Link } from 'react-router-dom';

export default function Verification(props) {
    	return(
            <div id="verification">
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
            <div class="row">
                <div className="col-md-12 text-center">
                    <h4>
                        Thank you for verifying your Personal information. Complete the Self-Check-In process by
                        verifying your identification and payment details. 
                    </h4>
                </div>
            </div>
            <br/>
            <br/>
            <div class="row">
                <div className="col-md-6 text-center">
                    <Link onClick={() => props.history.push("/identityverify")}>
                        <img src="/img/identity.png" alt="" className="img-responsive big"/>
                    </Link>
                </div>
                <div className="col-md-6 text-center">
                    <Link onClick={() => props.history.push("/paymentverify")}>
                        <img src="/img/paymentverify.png" alt="" className="img-responsive big"/>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-center">
                    <h4>Identity Verification</h4>
                </div>
                <div className="col-md-6 text-center">
                    <h4>Payment Details</h4>
                </div>
            </div>
            <br/>
            <div className="row text-center">
                <Link onClick={() => props.history.push("/identityverify")}>                            
                    <button type="button" className="btn btn-success btn-xl">
                        {/* <h4 style={{ fontSize: "22px"}}> */}
                            Complete Verification... and Payment Details
                        {/* </h4> */}
                    </button>
                </Link>    
            </div>
        </div>
    )
}
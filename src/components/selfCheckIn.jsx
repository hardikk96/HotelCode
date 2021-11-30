import React from 'react';
import { Link } from 'react-router-dom';

export default function SelfCheckIn(props) {
    return (
        <div id="SelfCheckIn">
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
            <br/>
            <div class="row">
                <div className="col-md-12 text-center">
                    <h3>
                        Thank you once again for selecting Boston International. 
                        To retrieve your booking, please input any of the below-mentioned information.
                    </h3>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-4">
                <Link onClick={() => props.history.push("/inputform")}>
                    <img src="/img/confirmationnumber.png" alt="" className="img-responsive"/>
                </Link>
                </div>
                <div className="col-md-4">
                    <img src="/img/phonecall.png" alt="" className="img-responsive"/>
                </div>
                <div className="col-md-4">
                    <img src="/img/formicon.png" alt="" className="img-responsive"/>  
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-4 text-center">
                    <h4>Booking Confirmation Number</h4>
                </div>
                <div className="col-md-4 text-center">
                    <h4>Phone Call</h4>
                </div>
                <div className="col-md-4 text-center">
                    <h4>Last Name and First Name</h4>
                </div>
            </div>
        </div>
    )
}
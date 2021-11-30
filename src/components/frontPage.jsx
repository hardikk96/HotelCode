import React from 'react';
import { Link } from 'react-router-dom';

export default function FrontPage(props) {

    const handleClick = () => {
        <Link to="/selfcheckin"></Link>
    }

    return(
        <div id="FrontPage">
            <br/>
            <div class="row">
                <div className="col-md-12 text-center"><h2>Boston International Hotel</h2></div>
            </div>
            <br/>
            <br/>
            <div class="row">
                <div className="col-md-12 text-center">
                    <h4>
                        It is our pleasure to welcome you to Boston Internation Hotel. 
                        Thank You for choosing Boston International again. 
                        We trust your stay will be enjoyable and hope that you continue to use our Hotel for your lodging needs in the future.
                    </h4>
                </div>
            </div>
            <br/>
            <br/>
            
            <div class="row">
                <div className="col-md-12 text-center">
                    <h4>
                        Please select the service you require.
                    </h4>
                </div>
            </div>
            <br/>
            <br/>
            
            <div class="row">
                <div className="col-md-offset-2 col-md-3">
                    <Link onClick={() => props.history.push("/selfcheckin")}>
                        <img src="/img/checkin.png" alt="" className="img-responsive"/>
                    </Link>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-offset-2 col-md-3">
                    <img src="/img/checkin.png" alt="" className="img-responsive"/>
                </div>
            </div>
            <br/>
            <br/>
            <div class="row">
                <div className="col-md-6 text-center">
                    <h2>
                        Self-Check-In
                    </h2>
                </div>
                <div className="col-md-6 text-center">
                    <h2>
                    Self-Check-Out
                    </h2>
                </div>
            </div>
        </div>
    )
}
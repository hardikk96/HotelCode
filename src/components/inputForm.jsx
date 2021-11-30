import React, {useState, useEffect} from 'react';
import { Link, Route } from 'react-router-dom';
import Axios from 'axios';
import CompleteProcess from './completeProcess';

function InputReferenceNo({ title, props }) {

    const [state, setState] = useState({
        referenceno: "",
        showbutton: "",
        firstname: "",
        lastname:"",
        checkin: "",
        checkout: "",
        noofguest: "",
        noofrooms: "",
        email: "",
        phone: "",

    });

    const[sqldata, setSqlData] = useState([]);
    useEffect(() => {

        Axios.post("http://localhost:3001/api/post", state.referenceno)
        .then(() => console.log("Booking Reference No. sent is " + state.referenceno))
        .catch(err => console.log(err));
        console.log(state.referenceno)
        
        Axios.get("http://localhost:3001/api/get")
        .then((response) => {
            console.log(response.data);            
            setSqlData(response.data)
        });
    }, [state.showbutton])

    const dataProps = {
        data: sqldata
    }
    
    const onInputChange = (event) => {
        setState({
            ...state,
            [event.target.name] : event.target.value
          });
    }

    const handleInput = (event) => {
        event.preventDefault();
        // Write the Api call logic here.
        // After calling api, set the values of firstname, lastname, checkin, checkout, noofguest, noofrooms, email, phone.        
        if(state.referenceno !== "")
        {
            setState({
                ...state,
                showbutton: "Reference no. is provided."
            })
        }

    }
    
    return(
        <div id="inputreferenceno">
            <div className="col-md-12 text-center">
                <h4>Booking Reference No.</h4>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <input 
                    type="text"
                    id="referenceno"
                    className="text-center"
                    name = "referenceno"
                    value={state.referenceno}        
                    onChange={onInputChange}/>
                </div>
            </div>
            
            <br />
            <div className="row">
                <div className="col-md-12 text-center">
                    {state.showbutton === "" ? <button className="btn btn-primary" onClick={handleInput}>Click</button> : 
                    <div>
                        <Route exact path="/completeprocess"  render={(props) => <CompleteProcess {...props} auth={dataProps}/>} />
                        {/* <CompleteProcess data={data}/> */}
                        <div className="row">
                            <h1 className="h1font">Welcome!!! Mr. XYZ to Boston International.</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="row">
                                    <h4> First Name </h4>
                                </div>
                                <div className="row">
                                    <h4 className="text-center colorstrip">{sqldata.map((val) => {
                                    return  <h4> {val.FirstName}</h4>
                                })}</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <h4>Last Name</h4>
                                </div>
                                <div className="row">
                                    <h4>{sqldata.map((val) => {
                                    return  <h4> {val.LastName}</h4>
                                })}</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <h4>Check-In</h4>
                                </div>
                                <div className="row">
                                    <h4>{sqldata.map((val) => {
                                    return  <h4> {val.CheckIn}</h4>
                                })}</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <h4>Check-Out</h4>
                                </div>
                                <div className="row">
                                    <h4>
                                    
                                    {sqldata.map((val) => {
                                    return  <h4> {val.CheckOut}</h4>
                                    })}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                        <div className="col-md-3">
                                <div className="row">
                                    <h4>No. of Guest</h4>
                                </div>
                                <div className="row">
                                    <h4>
                                    {sqldata.map((val) => {
                                    return  <h4> {val.NoOfGuest}</h4>
                                    })}

                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <h4>No. of Rooms</h4>
                                </div>
                                <div className="row">
                                    <h4>
                                    {sqldata.map((val) => {
                                    return  <h4> {val.NoOfRooms}</h4>
                                    })}
                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <h4>Email</h4>
                                </div>
                                <div className="row">
                                    <h4>
                                    {sqldata.map((val) => {
                                    return  <h4> {val.Email}</h4>
                                    })}
                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <h4>Phone</h4>
                                </div>
                                <div className="row">
                                    <h4>
                                    {sqldata.map((val) => {
                                    return  <h4> {val.PhoneNo}</h4>
                                    })}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row">
                        <Link to="/verification">                            
                            <button type="button" className="btn btn-success btn-xl">
                                {/* <h4 style={{ fontSize: "22px"}}> */}
                                    Go ahead and verify your identity.
                                {/* </h4> */}
                            </button>
                        </Link>    
                        </div>
                        <br />
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

function DisplayData({ title, props }) {
    return(
        <div>
            <h4>Divyam Bohra</h4>
        </div>
    )
}

export default function InputForm(props) {
    const [active, setActive] = useState("") 
    return (
        <div id="inputform">
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
                <div className="col-md-12 text-center">
                    <h3>
                        Thank you for choosing our self check-in service. 
                    </h3>
                </div>
            </div>
            <InputReferenceNo/>
            {/* {active === "InputIsFetched" && <DisplayData title="2"/>} */}
            
        </div>
    )
}
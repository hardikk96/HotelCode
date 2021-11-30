import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompleteProcess from "./components/completeProcess";
import FrontPage from "./components/frontPage";
import IdentityScanner from "./components/identityscanner";
import InputForm from "./components/inputForm";
import PaymentVerify from "./components/paymentVerify";
import SelfCheckIn from "./components/selfCheckIn";
import Verification from "./components/verification";
import Appss from "./components/appss";
var axios = require('axios');
const App = () => {

const [state, setState] = useState({
  createpasscode: "",
  enterpasscode: "", 
  isDone: false,
})

var cpasscode = "";


  const onInputChange = event => {
    setState({
      ...state,
      [event.target.name] : event.target.value
    });    
  };

  const ButtonClick = () => {
    cpasscode = state.createpasscode;
    console.log(cpasscode)
  }

  // console.log(state.enterpasscode);

  const handleSubmit = async event => {
    event.preventDefault();

    const { createpasscode, enterpasscode } = state;
    if(enterpasscode === "")
    {
      alert("Enter password");
    }
    else if(enterpasscode === createpasscode)
    {
      var config = {  
        method: 'post',
        url: 'https://b4p5g6ignl.execute-api.us-east-1.amazonaws.com/Staging',
        headers: { }
      };
    
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log("Condition Matched.")
    }
    else {
      alert("The entered passcode is incorrect.")
    }
  
}

  const handleSubmit2 =async event => {
    event.preventDefault();

    const { createpasscode, enterpasscode } = state;
    if(enterpasscode === "")
    {
      alert("Enter password");
    }
    else if(enterpasscode === createpasscode)
    {
      var config = {
        method: 'post',
        url: 'https://l1azwdbyk0.execute-api.us-east-1.amazonaws.com/Stagging-2',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log("Condition Matched.")
    }
    else {
      alert("The entered passcode is incorrect.")
    }

     
  } 


  return (
    <Router>

      {/* <h3>Divyam Bohra</h3> */}
      <Switch>
        {/* <Route path="/" exact component={Appss}/> */}
        <Route path="/" exact component={FrontPage}/>    
        <Route path="/selfcheckin" component={SelfCheckIn} />
        <Route path="/inputform" component={InputForm} />
        <Route path="/verification" component={Verification}/>
        <Route path="/identityverify" component={IdentityScanner}/>
        <Route path="/paymentverify" component={PaymentVerify}/>
        <Route path="/completeprocess" component={CompleteProcess}/>

      </Switch> 
      

      {/* <SelfCheckIn/> */}

      {/* <div id="App">
        <div className="row">

          <div className=" col-md-6">
          
            <div className="card">
            <form >
                <h3>Create the Passcode</h3>
                
                <div className="text-center">
                <label>Create the Passcode</label>
                <div className="row">
                <input
                  type="text"
                  id="createpasscode"
                  className="text-center"
                  name = "createpasscode"
                  value={state.createpasscode}        
                  onChange={onInputChange}
                ></input>
                  <br/>
                  <br/>
                <div className="row">
                  <div className="col-md-6">
                  <button onClick={ButtonClick} style={{ position:"relative", left:"4em" }} className="btn btn-primary">Passcode</button>                  </div>
                </div>
                </div>                  
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="row">
                </div>
          </form>
            </div> 
          </div>
          <div className="col-md-6">
          
          <div className="card">
            <form >

              <h3>Unlock the door using the passcode</h3>
              
              <div className="text-center">
              <label>Enter the Passcode</label>
              <div className="row">
              <input
                type="text"
                className="text-center"
                id="enterpasscode"
                name = "enterpasscode"
                value={state.enterpasscode}
                onChange={onInputChange}
              ></input>
                <br/>
                <br/>
              <div className="row">
                <div className="col-md-6">
                <button onClick={handleSubmit} style={{ position:"relative", left:"4em" }} className="btn btn-primary">Unlock the door</button>
                </div>
              </div>
              <br/>
                <br/>
              <div className="row">
                <div className="col-md-6">
                <button onClick={handleSubmit2} style={{ position:"relative", left:"4em" }} className="btn btn-primary">Lock the door</button>
                </div>
              </div>
              </div>                  
              </div>
              <br/>
              <br/>
        </form>
          </div> 
        </div>
        </div>
      </div> */}
    </Router>
  );
};

export default App;

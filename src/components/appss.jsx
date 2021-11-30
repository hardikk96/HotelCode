import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
var axios = require('axios');
const Appss = () => {

 const [state, setState] = useState({
   createpasscode: "",
   enterpasscode: "",
 })

  const onInputChange = event => {
    setState({
        createpasscode : event.target.value
    });    
  };
  
  var cpasscode;
  const ButtonClick = () => {
    cpasscode = state.createpasscode;
    localStorage.setItem('cpasscode', cpasscode);
    console.log(cpasscode)

    var data = JSON.stringify({"code":cpasscode});

    var config = {
      method: 'post',
      url: 'https://720t6ql191.execute-api.us-east-1.amazonaws.com/Stage-1/updatecode',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const onInputChange1 = event => {
    setState({
        enterpasscode : event.target.value
    });
  };

  console.log(state.enterpasscode);
  var epasscode;
  epasscode = state.enterpasscode;
  localStorage.setItem('epasscode', epasscode);
  console.log(epasscode);

  const handleSubmit =async event => {
    event.preventDefault();
    var code1;
    var code2;
    code1 = localStorage.getItem('cpasscode')
    code2 = localStorage.getItem('epasscode')
    console.log(code1, code2)
    
    if (code1 === code2)
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
    } 
    
    else {
      alert("Please enter correct passcode.")    
  } 
}

  const handleSubmit2 =async event => {
    event.preventDefault();

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

    

  } 


  return (
    <Router>
      <div id="App">
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
          <div className=" col-md-6">
          
          <div className="card">
            <form >

              <h3>Unlock the door using the passcode</h3>
              
              <div className="text-center">
              <label>Enter the Passcode</label>
              <div className="row">
              <input
                type="text"
                className="text-center"
                name = "enterpasscode"
                value={state.enterpasscode}
                onChange={onInputChange1}
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
      </div>
    </Router>
  );
};

export default Appss;
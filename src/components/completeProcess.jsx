import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import QRCode from 'qrcode.react';
import qrcode from 'qrcode.react';

class ComponentToPrint extends React.Component {
    constructor(props){ 
        super(props) 
            
        // Set initial state 
        this.state = {sqlData : [],
            roomkeycode: "",
        } 
    } 

      componentDidMount() {
        Axios.get("http://localhost:3001/api/get")
            .then((response) => {
                console.log(response.data);            
                this.setState({ sqlData : response.data })
                console.log(this.state.sqlData.map((val) => { return val.RoomKeyCode }))
                this.setState({ roomkeycode: this.state.sqlData.map((val) => { return val.RoomKeyCode }) })
                console.log(this.state.roomkeycode)
            });
    }
    
    render() {
        return(
            <div  width="100%" className="col-md-7 text-center box inner-outline">
                    <div className="row strip text-center">
                        <div className="col-md-6 text-left">
                            <h3 className="h3">Room Pass - 1</h3>
                        </div>
                        <div className="col-md-6 text-center">
                            <h3 className="h3">Boston International Hotel</h3>
                        </div>
                    </div>
                    <div  className="col-md-12">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h3> First Name </h3>
                                            </div>
                                            <div className="col-md-6">
                                                <h3> Last Name </h3>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row outline">
                                            <div className="col-md-6 pos">
                                                <h3 style={{ fontSize: "16px" }}>
                                                    {this.state.sqlData.map((val) => { return  <h3> {val.FirstName}</h3>})}
                                                </h3>
                                            </div>
                                            <div className="col-md-6 pos">
                                                <h3 style={{ fontSize: "16px" }}>
                                                    {this.state.sqlData.map((val) => { return  <h3> {val.LastName}</h3>})}
                                                </h3>
                                            </div>
                                        </div>                                        
                                    </div>       
                                    <div className="col-md-offset-1 col-md-3">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <h3> Room # </h3>
                                            </div>
                                        </div>
                                        <div className="row outline1">
                                            <div className="col-md-12 text-center">
                                                <h3 style={{ fontSize: "20px" }}>
                                                    {this.state.sqlData.map((val) => { return  <h3 style={{ fontSize: "25px", position: "relative", top: "-17px"}}> {val.NoOfRooms}</h3>})}
                                                </h3>
                                            </div>
                                        </div>      
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h3> Check-In </h3>
                                            </div>
                                            <div className="col-md-6">
                                                <h3> Check-Out </h3>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row outline">
                                            <div className="col-md-6 pos">
                                                <h3 style={{ fontSize: "16px" }}>
                                                    {this.state.sqlData.map((val) => { return  <h3 style={{ fontSize: "14px", position: "relative", top: "-7px"}}> {val.CheckIn}</h3>})}
                                                </h3>
                                            </div>
                                            <div className="col-md-6 pos">
                                                <h3 style={{ fontSize: "16px" }} >
                                                    {this.state.sqlData.map((val) => { return  <h3 style={{ fontSize: "14px", position: "relative", top: "-7px"}}> {val.CheckOut}</h3>})}
                                                </h3>
                                            </div>
                                        </div>                                        
                                    </div>       
                                    <div className="col-md-offset-1 col-md-3">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <h3 style={{ fontSize: "18px" }}> Room Key Code </h3>
                                            </div>
                                        </div>
                                        <div className="row outline1">
                                            <div className="col-md-12 text-center">
                                                <h3>
                                                    {this.state.sqlData.map((val) => { return  <h3 style={{ fontSize: "25px", position: "relative", top: "-17px"}}> {val.RoomKeyCode}</h3>})}
                                                </h3>
                                            </div>
                                        </div>      
                                    </div>
                                </div>
                            </div>
                    <div className="col-md-3">
                        {/* <div className="col-md-12 text-center">
                            <h3> QR Code </h3>
                        </div> */}
                        <div className="col-md-12 text-center">
                                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default function CompleteProcess(props) {


const [state, setState] = useState({
    createpasscode: "",
    enterpasscode: "",
  })

var cpasscode = "";

  const[sqldatas, setSqlDatas] = useState([]);
  const[values, setValues] = useState("12345")

  useEffect(() => {
    cpasscode = state.createpasscode;
    console.log(cpasscode)
    var data ="";
    var dd = "";
    // localStorage.setItem('cpasscode', cpasscode);
    // console.log(cpasscode)
        Axios.get("http://localhost:3001/api/get")
        .then((response) => {
            console.log(response.data);        
            data = response.data.map((val) => { return val.RoomKeyCode })    
            setSqlDatas(response.data)
            // console.log(sqldatas);            
            // console.log(sqldatas.map((val) => { return val.RoomKeyCode }))
            // data = sqldatas.map((val) => { return val.RoomKeyCode });
            console.log(data);
            localStorage.setItem('cpasscode', data);

        });

    var config = {
      method: 'post',
      url: 'https://720t6ql191.execute-api.us-east-1.amazonaws.com/Stage-1/updatecode',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      data : data
    };

    Axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
},[])
  
  // console.log(state.enterpasscode);

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
        
        Axios(config)
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
      
      Axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  } 


  const componentRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
  })

    return (
        <div id="completeprocess">
            <div className="row">
                <div className="col-md-offset-2 col-md-8 text-center">
                    <h2>Boston International Hotel</h2>
                </div>
                 {/* <div className="col-md-2 text-center">
                    <Link onClick={() => props.history.push("/")}>
                        <button className="btn btn-success btn-xl">
                             <h4 style={{ fontSize: "22px"}}> 
                                FINISH
                            </h4>
                        </button>
                    </Link>
                </div>  */}
             </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    {/* <h1 className="h1">Unlock-Lock room via smartphone</h1> */}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    {/* <h1 className="h1">Use QR Code</h1> */}
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                {/* <div ref={ref}> */}
                    <ComponentToPrint ref={componentRef} width="100%"/>
                {/* </div> */}
        <div className="col-md-2 text-center">
            <div className="row">
                <button onClick={handlePrint}  className="btn btn-success btn-xl">
                    PRINT
                </button>
            </div>
            <br />
            <br />
            <br />
    
        </div>
    </div>
    
        <br/>
  
        <div>
            <div className="row">

<div className="col-md-12 text-center">

<div className="card">
  <form >

    <h3>Unlock the door using the passcode</h3>
    
    <div className="text-center">
    <div className="row">
        <div className="col-md-12">

        {/* <label className="text-center">Enter the Passcode</label> */}
        <input
        type="text"
        placeholder="Enter the passcode"
        className="col-md-offset-5 col-md-2 text-center"
        id="enterpasscode"
        name = "enterpasscode"
        value={state.enterpasscode}
        onChange={onInputChange1}
        ></input>

        </div>

      <br/>
      <br/>
    <div className="row">
      <div className="col-md-12">
      <button onClick={handleSubmit} className="btn btn-primary">Unlock the door</button>
      </div>
    </div>
      <br/>
    <div className="row">
      <div className="col-md-12">
      <button onClick={handleSubmit2}  className="btn btn-primary">Lock the door</button>
      </div>
    </div>

    <div className="row">
        <div className="col-md-12">
        <div className="col-md-offset-4 col-md-4 text-center">
                    <Link onClick={() => props.history.push("/")}>
                        <button className="btn btn-success btn-xl">
                            {/* <h4 style={{ fontSize: "22px"}}> */}
                                FINISH
                            {/* </h4> */}
                        </button>
                    </Link>
                </div>
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
    </div>
    
    )
}

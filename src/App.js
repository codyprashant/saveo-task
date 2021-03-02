import React, { useState } from "react";
import "./App.css";
import InputForm from './components/InputForm'
import AllCoordinates from './components/AllCoordinates'

function App() {
  const [submitData, setSubmitData] = useState([]);
  const [showRoute, setshowRoute] = useState(false);
  const [center, setCenter] = useState({ lat: 23.84, lng: 77.70 });
 
  function onSubmit(location, latitude, longitude){
    if(location && latitude && longitude){
        let entry = {
          location,
          latitude,
          longitude
        }
        setSubmitData([...submitData, entry])
        setCenter({ lat: parseFloat(latitude), lng: parseFloat(longitude) })
    }
  }
  function resetState(){
    setSubmitData([]);
    setshowRoute(false);
  }
  return (
    <div className="App">
            <button
              className="btn btn-primary"
              type="submit"
              style={{
                background: "#C6D1D9 0% 0% no-repeat padding-box",
                borderRadius: "5px",
                opacity: "1",
                color: "#074770",
                fontWeight: "bolder",
                width:"100px",
                alignItems:"left",
                margin : "5px"
              }}
              onClick={() => resetState()}
              > Home
            </button>
      <header className="App-header">
        <div
          className="card"
          style={{
            background: "#074770 0% 0% no-repeat padding-box",
            borderRadius: "36px",
            maxHeight: "670px",
            minHeight: "670px",
            maxWidth: "1037px",
            minWidth: "1037px",
          }}
        >
          <InputForm onSubmit={onSubmit} />
          <AllCoordinates coords ={submitData} setshowRoute ={setshowRoute} showRoute={showRoute} center={center}/>
        </div>
      </header>
    </div>
  );
}

export default App;

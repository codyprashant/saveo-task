import React, { useState } from 'react'

export default function InputForm({onSubmit}) {
    const [location,  setLocation] = useState("");
    const [latitude,  setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    
  function onValueChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "locationName":
        setLocation(value);
        break;

      case "latitudeNo":
        setLatitude(value);
        break;
      
      case "longitudeNo":
        setLongitude(value);
        break;

      default:
        break;
    }
  }

  function onSubmitCheck(e){
    e.preventDefault();
    if(location && latitude && longitude){
        onSubmit(location, latitude, longitude);
        resetState()
    }
  }

  function resetState(){
    setLocation("")
    setLatitude("")
    setLongitude("")
  }

    return (
        <div className="card-body" style={{ maxHeight: "151px" }}>
            <div className="container">
              <form className="needs-validation" onSubmit={(e)=> onSubmitCheck(e)}>
                <div className="form-row">
                  <div className="col-md-2 mb-3">
                    <label htmlFor="locationName">Location name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="locationName"
                      name="locationName"
                      value={location}
                      onChange={(e) => onValueChange(e)}
                      required
                    />
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="latitudeNo">Enter Latitude</label>
                    <input
                      type="text"
                      className="form-control"
                      id="latitudeNo"
                      name="latitudeNo"
                      value={latitude}
                      onChange={(e) => onValueChange(e)}
                      required
                    />
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="longitudeNo">Enter Longitude</label>
                    <input
                      type="text"
                      className="form-control"
                      id="longitudeNo"
                      name="longitudeNo"
                      value={longitude}
                      onChange={(e) => onValueChange(e)}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <br />
                    <button
                      className="btn btn-primary  float-right"
                      type="submit"
                      style={{
                        background: "#C6D1D9 0% 0% no-repeat padding-box",
                        borderRadius: "21px",
                        opacity: "1",
                        color: "#074770",
                        fontWeight: "bolder",
                        padding: "0.5rem 2.2rem",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
    )
}

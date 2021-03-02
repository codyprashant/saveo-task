import React, {useState} from 'react'
import MapConfig from './MapConfig'

export default function AllCoordinates({coords}) {

    const [showRoute, setshowRoute] = useState(false)
    const [routes, setRoutes] = useState([])
    function showRouteLine(){
        if(coords.length > 1){
            let temp =[];
            coords.map((data, index) =>
                // setRoutes([...routes, {lat: parseFloat(data.latitude) , lng: parseFloat(data.longitude)}])
                temp.push( {lat: parseFloat(data.latitude) , lng: parseFloat(data.longitude)})
            )
            setRoutes(temp)
            setshowRoute(true)
        } else{
            alert("Minimum 2 locations should be entered")
        }
    }

    return (
        <div
            className="card-body mt-3"
            style={{ background: "white", borderRadius: " 0px 0px 36px 36px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col">
                  <h5>ALL CO-ORDINATES</h5>
                  <table className="table table-borderless" style={{fontSize:"1rem"}}>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Location</th>
                        <th scope="col">Latitude</th>
                        <th scope="col">Longitude</th>
                      </tr>
                    </thead>
                    <tbody>
                      {coords.length > 0 ? coords.map((data, index) =>
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
                          <td>{data.location}</td>
                          <td>{data.latitude}</td>
                          <td>{data.longitude}</td>
                        </tr>)
                    :<tr>
                        <th scope="row">1</th>
                        <td>.....</td>
                        <td>.....</td>
                        <td>.....</td>
                      </tr>}
                    </tbody>
                  </table>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          style={{
                            background: "#C6D1D9 0% 0% no-repeat padding-box",
                            borderRadius: "21px",
                            opacity: "1",
                            color: "#074770",
                            fontWeight: "bolder",
                            width:"100%"
                          }}
                          onClick={() => showRouteLine()}
                        > Show Route
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                    <MapConfig locations={coords} showRoute={showRoute} routes={routes}/>
                </div>
              </div>
            </div>
          </div>
    )
}

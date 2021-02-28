import React, { useState } from "react";
import { Card, CardHeader } from "reactstrap";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import "./IndiaMap.css";
function IndiaMap(props) {
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [detail, setDetail] = useState({});

  function onLocationClick(event) {
    setStateCode(event.target.id.toUpperCase());
    setStateName(event.target.getAttribute("name"));

    props.statesData.map((data) => (
      <>{data.statecode === event.target.id.toUpperCase() && setDetail(data)}</>
    ));

    console.log(event.target);
    console.log("Id", event.target.id);
    console.log("Name", event.target.getAttribute("name"));
  }

  // function locationClassName(props){
  //   console.log("props",props);
  // }

  return (
    <>
      <div
        //  className="square"
        style={{
          position: "absolute",
          marginLeft: "50%",
          WebkitBoxShadow: "0 0 10px #888888"
        }}
      >
        {stateCode && (
          <Card>
            <CardHeader style={{ fontSize: "1vh" }}>
              <strong>
                {stateName} ({stateCode})
              </strong>
            </CardHeader>

            <div
              style={{
                backgroundColor: "#f1f1f1",
                padding: "2%",
                fontSize: "1vh"
              }}
            >
              <table className="card-table text-left">
                <tr>
                  <th>Last Update Time</th>
                  <td>{detail.lastupdatedtime}</td>
                </tr>
                <tr>
                  <th>Total Active</th>
                  <td>{detail.active}</td>
                </tr>
                <tr>
                  <th>Total Confirms</th>
                  <td>{detail.confirmed}</td>
                </tr>
                <tr>
                  <th>Total Deaths</th>
                  <td>{detail.deaths}</td>
                </tr>
                <tr>
                  <th>Total Recovered</th>
                  <td>{detail.recovered}</td>
                </tr>
              </table>
            </div>
          </Card>
        )}
      </div>

      <SVGMap
        map={India}
        className="svg-map"
        onLocationClick={onLocationClick}
      />
    </>
  );
}

export default IndiaMap;

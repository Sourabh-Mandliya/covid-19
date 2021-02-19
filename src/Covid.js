import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Axios from "axios";
import moment from "moment";
import CovidDateWise from "./components/CovidDateWise";
import CovidStateWise from "./components/CovidStateWise";
import CovidSampleTested from "./components/CovidSampleTested";

const Covid = () => {
  const [timeWiseData, setTimeWiseData] = useState([]);
  const [stateWiseData, setStateWiseData] = useState([]);
  const [testedData, setTestedData] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    callApi();
  }, []);

  console.log(
    "DATEW",
    moment(new Date()).subtract(1, "days").format("YYYY-MM-DD")
  );

  async function callApi() {
    await Axios.get("https://api.covid19india.org/data.json")
      .then((res) => {
        setTimeWiseData(res.data.cases_time_series);
        setStateWiseData(res.data.statewise);
        setTestedData(res.data.tested);
        console.log(res.data);
        console.log(res.data.cases_time_series);
        console.log(res.data.statewise);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log("ACTIVE-TAB", activeTab);

  return (
    <div className="container" style={{ marginBottom: "2%" }}>
      <br />
      <h3 style={{ textAlign: "center" }}>Covid-19 status</h3>
      <h5 style={{ textAlign: "center" }}>
        (All states covid-19 daily update data)
      </h5>
      <br />
      <div>
        <Nav tabs>
          <NavItem style={{fontSize:"1.3rem"}}>
            <NavLink
              onClick={() => {
                setActiveTab(1);
              }}
              href="#"
            >
              State-wise
            </NavLink>
          </NavItem>

          <NavItem style={{fontSize:"1.3rem"}}>
            <NavLink
              onClick={() => {
                setActiveTab(2);
              }}
              href="#"
              
            >
              Date-wise
            </NavLink>
          </NavItem>
          <NavItem style={{fontSize:"1.3rem"}}>
            <NavLink
              onClick={() => {
                setActiveTab(3);
              }}
              href="#"
            >
              Vaccinated-information
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <br />
      {activeTab === 1 && <CovidStateWise stateWiseData={stateWiseData} />}

      {activeTab === 2 && <CovidDateWise timeWiseData={timeWiseData} />}

      {activeTab === 3 && <CovidSampleTested testedData={testedData} />}
    </div>
  );
};

export default Covid;

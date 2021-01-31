import React, { useEffect, useState } from "react";
import { Table, Input, Label,Col,Row,Form } from "reactstrap"; 
import Axios from "axios";
import moment from "moment";

function CovidUpdates(Porps) {
  const yesterDayDate = moment(new Date()).subtract(1, 'days').format("YYYY-MM-DD")
  const [covidData, setCovidData] = useState([]);
  const [date,setDate] = useState(yesterDayDate);
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeceased, setTotalDeceased] = useState(0);

  useEffect(() => {
    callApi();
  }, []);

  async function callApi() {
    await Axios.get("https://api.covid19india.org/states_daily.json").then(
      (response) => {
        setCovidData(response.data.states_daily);
        //      console.log( typeof response.data.states_daily);
      }
    );
  }
//  console.log(covidData);

  function changeDate(e){
    setDate(e.target.value);
  }

  console.log("date",date);
  return (
    <React.Fragment>
      <br />
      <h3 style={{textAlign:"center"}}>Covid-19 status</h3>
      <h5 style={{textAlign:"center"}}>(All states covid-19 daily update data)</h5>
      <div class="container">
        <br/>
        <Row>
        <Col md={3} sm={2}>
        <Label> Date : {" "}
        <Input type="date" value={date}  min="2020-03-14" max={yesterDayDate} onChange={(e)=>changeDate(e)} ></Input>
        </Label>
        </Col>        
        </Row>
        <br />
         <Table striped>
             <thead>
                <tr>
                    <th>Status</th>
                    <th>Patient</th>
                </tr>
             </thead> 
        {covidData.map((data) => (
            <tbody>
                {data.dateymd === date ? <tr>
                    <td>{data.status}</td>
                    <td>{Object.values(data).reduce((t, n) => Number(t) + ( isNaN(Number(n))?Number(0): Number(n) ))}</td>
                </tr>:false}
            </tbody>
        ))}
        </Table>
      </div>
    </React.Fragment>
  );
}

export default CovidUpdates;

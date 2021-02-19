import React, { useState } from "react";
import moment from "moment";
import {
  Row,
  Col,
  Input,
  Label,
  Card,
  CardHeader,
  CardBody,
  CardTitle
} from "reactstrap";

const CovidSampleTested = (props) => {
  const [data, setdata] = useState(
    props.testedData[props.testedData.length - 1]
  );
  const [selectDate, setSelectDate] = useState(
    moment(new Date()).subtract(1, "days").format("YYYY-MM-DD")
  );

  const handleDate = (e) => {
    console.log(e.target.value);
    setSelectDate(e.target.value);
  };

  return (
    <div className="container">
      <div className="table-responsive">
            <Card>
              <CardHeader>
                <CardTitle tag="h5" style={{textAlign:"center"}}><strong>Report</strong></CardTitle>
              </CardHeader>
              <CardBody>
                <table className="table table-hover text-left">
                  <tr>
                    <th>Update Date</th>
                    <td>{data.testedasof}</td>
                  </tr>
                  <tr>
                    <th>Daily rtpcr samples collected icmr application</th>
                    <td>{data.dailyrtpcrsamplescollectedicmrapplication}</td>
                  </tr>
                  <tr>
                    <th>First dose administered</th>
                    <td>{data.firstdoseadministered}</td>
                  </tr>
                  <tr>
                    <th>Front line workers vaccinated</th>
                    <td>{data.frontlineworkersvaccinated}</td>
                  </tr>
                  <tr>
                    <th>Healthcare workers vaccinated</th>
                    <td>{data.healthcareworkersvaccinated}</td>
                  </tr>
                  <tr>
                    <th>Positive cases from samples reported</th>
                    <td>{data.positivecasesfromsamplesreported}</td>
                  </tr>
                  <tr>
                    <th>Sample reported today</th>
                    <td>{data.samplereportedtoday}</td>
                  </tr>
                  <tr>
                    <th>Second dose administered</th>
                    <td>{data.seconddoseadministered}</td>
                  </tr>
                  <tr>
                    <th>Tests conducted by private labs</th>
                    <td>{data.testsconductedbyprivatelabs}</td>
                  </tr>
                  <tr>
                    <th>Total doses administered</th>
                    <td>{data.totaldosesadministered}</td>
                  </tr>
                  <tr>
                    <th>Total individuals tested</th>
                    <td>{data.totalindividualstested}</td>
                  </tr>
                  <tr>
                    <th>Total individuals vaccinated</th>
                    <td>{data.totalindividualsvaccinated}</td>
                  </tr>
                  <tr>
                    <th>Total positive cases</th>
                    <td>{data.totalpositivecases}</td>
                  </tr>
                  <tr>
                    <th>Total rtpcr samples collected icmr application</th>
                    <td>{data.totalrtpcrsamplescollectedicmrapplication}</td>
                  </tr>
                  <tr>
                    <th>Total samples tested</th>
                    <td>{data.totalsamplestested}</td>
                  </tr>
                  <tr>
                    <th>Total sessions conducted</th>
                    <td>{data.totalsessionsconducted}</td>
                  </tr>
                  <tr>
                    <th>Total sessions conducted</th>
                    <td>{data.totalsessionsconducted}</td>
                  </tr>
                  <tr>
                    <th>source</th>
                    <td>{data.source}</td>
                  </tr>
                  <tr>
                    <th>source2</th>
                    <td>{data.source2}</td>
                  </tr>
                  <tr>
                    <th>source3</th>
                    <td>{data.source3}</td>
                  </tr>
                  <tr>
                    <th>source4</th>
                    <td>{data.source4}</td>
                  </tr>
                </table>
              </CardBody>
            </Card> 
      </div>
    </div>
  );
};

export default CovidSampleTested;

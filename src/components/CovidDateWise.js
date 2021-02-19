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

const CovidDateWise = (props) => {
  const [selectDate, setSelectDate] = useState(
    moment(new Date()).subtract(1, "days").format("YYYY-MM-DD")
  );

  const handleDate = (e) => {
    console.log(e.target.value);
    setSelectDate(e.target.value);
  };

  return (
    <div className="container">
      <Row>
        <Label sm={1}>
          <strong> Date :</strong>{" "}
        </Label>
        <Col md={3} sm={2}>
          <Input
            type="date"
            min="2020-01-30"
            value={selectDate}
            onChange={(e) => handleDate(e)}
          ></Input>
        </Col>
      </Row>
      <br />

      <div className="table-responsive">
        {props.timeWiseData.length > 0 &&
          props.timeWiseData.map((data) => (
            <>
              {selectDate === data.dateymd && (
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5" style={{textAlign:"center"}}><strong>Covid Status</strong></CardTitle>
                  </CardHeader>
                  <CardBody>
                    <table className="table table-hover text-left">
                      <tr>
                        <th>Date</th>
                        <td>
                          {moment(data.dateymd).format("dddd, MMMM Do YYYY")}
                        </td>
                      </tr>
                      <tr>
                        <th>Daily deceased</th>
                        <td>{data.dailydeceased}</td>
                      </tr>
                      <tr>
                        <th>Daily confirmed</th>
                        <td>{data.dailyconfirmed}</td>
                      </tr>
                      <tr>
                        <th>Daily recovered</th>
                        <td>{data.dailyrecovered}</td>
                      </tr>
                      <tr>
                        <th>Total confirmed</th>
                        <td>{data.totalconfirmed}</td>
                      </tr>
                      <tr>
                        <th>Total deceased</th>
                        <td>{data.totaldeceased}</td>
                      </tr>
                      <tr>
                        <th>Total recovered</th>
                        <td>{data.totalrecovered}</td>
                      </tr>
                    </table>
                  </CardBody>
                </Card>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default CovidDateWise;

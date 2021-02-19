import React, { useState } from "react";
import {
  Col,
  FormGroup,
  Input,
  Label,
  Card,
  CardHeader,
  CardBody,
  CardTitle
} from "reactstrap";

const CovidStateWise = (props) => {
  const [state, setState] = useState("AP");

  const handleState = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="container">
      <FormGroup row>
        <Label sm={2}>
          <b>Select State</b>
        </Label>
        <Col sm={2}>
          <Input
            type="select"
            name="states"
            id="states"
            onChange={(e) => {
              handleState(e);
            }}
          >
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CT">Chattisgarh</option>
            <option value="DL">Delhi</option>
            <option value="GA">Goa</option>
            <option value="GJ">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="LD">Lakshadweep Islands</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OR">Odisha</option>
            <option value="PY">Pondicherry</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TG">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UT">Uttarakhand</option>
            <option value="WB">West Bengal</option>
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="CH">Chandigarh</option>
            <option value="DN">Dadra & Nagar Haveli and Daman & Diu </option>
            <option value="LA">Ladakh</option>
            <option value="UN">Other Territory</option>
            <option value="TT">TOTAL</option>
          </Input>
        </Col>
      </FormGroup>

      <br />
      <div className="table-responsive">
        {props.stateWiseData.length > 0 &&
          props.stateWiseData.map((data) => (
            <>
              {data.statecode === state && (
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5" style={{textAlign:"center"}}>
                      <strong>
                        {data.state}
                        {/* ({data.statecode}) */}
                      </strong>
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <table className="table table-hover text-left">
                      <tr>
                        <th>Last-updated-time</th>
                        <td>{data.lastupdatedtime}</td>
                      </tr>
                      <tr>
                        <th>Active</th>
                        <td>{data.active}</td>
                      </tr>
                      <tr>
                        <th>Confirmed</th>
                        <td>{data.confirmed}</td>
                      </tr>
                      <tr>
                        <th>Deaths</th>
                        <td>{data.deaths}</td>
                      </tr>
                      <tr>
                        <th>Recovered</th>
                        <td>{data.recovered}</td>
                      </tr>
                      <tr>
                        <th>Migrated-other</th>
                        <td>{data.migratedother}</td>
                      </tr>
                      <tr>
                        <th>State-Notes</th>
                        <td>{data.statenotes}</td>
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

export default CovidStateWise;

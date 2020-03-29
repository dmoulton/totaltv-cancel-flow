import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";

const SubscriptionSummary = props => {
  const basePack = {
    name: "TotalTV Live",
    monthlyPrice: 30
  };
  const [basePackSelected, toggleBasePack] = useState(true);

  const [extras, toggleExtras] = useState([
    { id: 1, name: "CloudDVR Plus", monthlyPrice: 5, selected: true }
  ]);
  const [aLaCarte, toggleALaCarte] = useState([
    { name: "ShowTime®", monthlyPrice: 10, selected: true }
  ]);
  const currentMonthlyTotal = 45;
  const [newMonthlyTotal, updateNewMonthlyTotal] = useState(45);
  const nextBillDate = "04/23/2020 11:00AM MDT";

  const calculateNewMonthlyTotal = () => {
    var total = 0;
    if (basePack.selected) {
      console.log("adding basepack monthly");
      total = total + basePack.monthlyPrice;
    }

    extras.forEach(e => {
      if (e.selected) {
        console.log("adding extras monthly");
        total = total + e.monthlyPrice;
      }
    });

    aLaCarte.forEach(e => {
      if (e.selected) {
        console.log("adding aLaCarte monthly");
        total = total + e.monthlyPrice;
      }
    });

    return total;
  };

  return (
    <Container className="p-3">
      <h2>Choose what services you would like to cancel</h2>
      <Jumbotron>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={7}>
              <p>
                <b>Subscription Summary</b>
              </p>
              <b>Base</b>
              <hr />
              <Container>
                <Row>
                  <Col sm={9}>{basePack.name}</Col>
                  <Col>${basePack.monthlyPrice}</Col>
                  <Col>
                    {basePackSelected ? (
                      <Form.Check
                        type="switch"
                        id="basepack-switch"
                        label=""
                        checked
                        onClick={() => toggleBasePack(false)}
                      />
                    ) : (
                      <Form.Check
                        type="switch"
                        id="basepack-switch"
                        label=""
                        onClick={() => toggleBasePack(true)}
                      />
                    )}
                  </Col>
                </Row>
              </Container>

              <div className="form-group">&nbsp;</div>

              <b>Add-Ons</b>
              <hr />
              <Container>
                <Row>
                  <Col sm={9}>Cloud DVR Plus</Col>
                  <Col>$5</Col>
                  <Col>
                    <Form.Check type="switch" id="cloud_dvr-switch" label="" />
                  </Col>
                </Row>
              </Container>

              <div className="form-group">&nbsp;</div>

              <b>A La Carte Channels</b>
              <hr />
              <Container>
                <Row>
                  <Col sm={9}>Showtime</Col>
                  <Col>$10</Col>
                  <Col>
                    <Form.Check type="switch" id="Showtime" label="" />
                  </Col>
                </Row>
              </Container>

              <div className="form-group">&nbsp;</div>
              <b>Totals</b>
              <hr />
              <Container>
                <Row>
                  <Col sm={9}>Current Monthly Total</Col>
                  <Col>${currentMonthlyTotal}</Col>
                </Row>
                <Row>
                  <Col sm={9}>
                    <b>New Monthly Total</b>
                  </Col>
                  <Col>
                    <b>${calculateNewMonthlyTotal()}</b>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>Next bill date:</Col>
                  <Col>{nextBillDate}</Col>
                </Row>
              </Container>
              <div className="form-group">&nbsp;</div>
              <Button>Update Packages</Button>
            </Col>

            <Col>
              <p>
                Need to take a break? With TotalTV you can pause your
                subscription for no charge
              </p>
              <Button variant="primary">Pause My Subscription</Button>
              <div className="form-group">&nbsp;</div>
              <p>
                Switch your base pack or explore additional Extras or A La Carte
                Channels
              </p>
              <Button variant="primary">Manage My Subscription</Button>
              <div className="form-group">&nbsp;</div>
              <p>Need to cancel it all? You can return any time!</p>
              <Button variant="danger">Cancel My Subscription</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default SubscriptionSummary;

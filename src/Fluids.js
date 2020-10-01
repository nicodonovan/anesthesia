import React from "react";
import { Accordion, Card } from "react-bootstrap";

function Fluids(props) {
  let four = 0;
  let two = 0;
  let one = 0;

  if (props.weight > 10) {
    four = 4 * 10;
    if (props.weight > 20) {
      two = 2 * 10;
      one = 1 * (props.weight - 20);
    } else {
      two = 2 * (props.weight - 10);
    }
  } else {
    four = props.weight * 4;
  }

  let totalFluids = four + two + one;

  return (
    <div className="container">
      <div className="row">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Fluids (Initial Bolus): <strong>{props.weight * 10} ml</strong>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>10 ml/kg</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <div className="row">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Fluids (4-2-1): <strong>{totalFluids} ml/hr</strong>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>4 ml/kg/hr for each kg up to 10 kg</p>
                <p>+ 2 ml/kg/hr for each additional kg up to 20 kg</p>
                <p>+ 1 ml/kg/hr for each additional kg above 20 kg</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default Fluids;

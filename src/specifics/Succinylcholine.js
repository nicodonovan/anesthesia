import React from "react";
import { Accordion, Card } from "react-bootstrap";

function Succinylcholine(props) {
  let IV = [];
  const IM = [3, 5];

  if (props.age === "1" || props.age === "2" || props.age === "3") {
    IV = [2, 3];
  } else {
    IV = [1, 2];
  }

  let IManswers = IM.map((x) => (x * props.weight).toPrecision(3));
  let IVanswers = IV.map((x) => (x * props.weight).toPrecision(3));

  let IMcomplete = `${IManswers[0]} - ${IManswers[1]}`;
  let IVcomplete = `${IVanswers[0]} - ${IVanswers[1]}`;

  return (
    <div className="container">
      <div className="row">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Succinylcholine (IM): <strong>{IMcomplete} mg</strong>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  {IM[0]} - {IM[1]} mg/kg
                </p>
                <p>Max of 5 ml at injection site</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <div className="row">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Succinylcholine (IV): <strong>{IVcomplete} mg</strong>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>1 - 2 mg/kg</p>
                <p>{"<"}1 year: 2 - 3 mg/kg</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default Succinylcholine;

// IV: 1-2 mg/kg (<1 year: 2-3mg/kg)
// IM: 3-5 mg/kg

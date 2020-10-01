import React from "react";
import { Accordion, Card } from "react-bootstrap";

function Drug(props) {
  const range =
    props.range[0] === 0
      ? `${props.range[1]}`
      : `${props.range[0]} - ${props.range[1]}`;

  const answers = props.range.map((x) => x * props.weight);

  const adjustedAnswers = answers.map((x) =>
    x >= 1000 ? x.toPrecision(4) : x.toPrecision(3)
  );

  const answersRange =
    adjustedAnswers[0] > 0
      ? `${adjustedAnswers[0]} - ${adjustedAnswers[1]}`
      : `${adjustedAnswers[1]}`;

  return (
    <div className="container">
      <div className="row">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {props.name}: <strong>{answersRange} mg</strong>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>{range} mg/kg</p>
                {props.more ? <p>{props.more}</p> : null}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default Drug;

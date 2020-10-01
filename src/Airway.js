import React from "react";
import { Accordion, Card } from "react-bootstrap";
import chart from "./images/airway2.png";
import "./Airway.css";

function Airway(props) {
  let ETsize = "";
  let ETdepth = "";
  let LMA = "";
  let blade = "";

  function calculate(value) {
    switch (value) {
      case "1":
        handleNeonate();
        break;
      case "2":
        ETsize = "3c/3.5u";
        ETdepth = "12cm";
        LMA = "1-1.5";
        blade = "Miller 1/Wis 1.5";
        break;
      case "3":
        ETsize = "3.5c/4u";
        ETdepth = "13cm";
        LMA = "1.5";
        blade = "Mac 0";
        break;
      case "4":
        ETsize = "4-4.5c";
        ETdepth = "14cm";
        LMA = "2";
        blade = "Mac 1";
        break;
      case "5":
        ETsize = "4.5c";
        ETdepth = "15cm";
        LMA = "2";
        blade = "Wis 1.5/Mac 2";
        break;
      case "6":
        ETsize = "4.5-5c";
        ETdepth = "16cm";
        LMA = "2";
        blade = "Miller 2/Mac 2";
        break;
      case "7":
        ETsize = "5-5.5c";
        ETdepth = "17cm";
        LMA = "2.5";
        blade = "Miller 2/Mac 2";
        break;
      case "8":
        ETsize = "5.5-6c";
        ETdepth = "18cm";
        LMA = "3";
        blade = "Miller/Mac 2-3";
        break;
      case "9":
        ETsize = "6.5-7c";
        ETdepth = "20-22cm";
        LMA = "4";
        blade = "Miller/Mac 2-3";
        break;
      default:
        ETsize = "I";
        ETdepth = "help";
        LMA = "didn't";
        blade = "pick an age range";
        break;
    }
  }

  function handleNeonate() {
    if (props.weight < 1) {
      ETsize = "2.5u";
      ETdepth = "7cm";
      LMA = "1";
      blade = "Miller 0";
    } else if (props.weight >= 1 && props.weight < 2) {
      ETsize = "3.0u";
      ETdepth = "8cm";
      LMA = "1";
      blade = "Miller 0";
    } else if (props.weight >= 2 && props.weight <= 3) {
      ETsize = "3c/3.5u";
      ETdepth = "9cm";
      LMA = "1";
      blade = "Miller 0-1";
    } else {
      ETsize = "3c/3.5u";
      ETdepth = "10cm";
      LMA = "1";
      blade = "Miller 0-1";
    }
  }

  calculate(props.age);

  return (
    <div className="container">
      <div className="row">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <p>
                ET Depth: <strong>{ETdepth}</strong>
              </p>
              <p>
                ET Size: <strong>{ETsize}</strong>
              </p>
              <p>
                LMA: <strong>{LMA}</strong>
              </p>
              <p>
                Blade Size: <strong>{blade}</strong>
              </p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <img src={chart} alt="airway chart" />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default Airway;

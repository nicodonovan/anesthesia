import React from "react";
import Drug from "./Drug";
import DrugMcg from "./DrugMcg";
import Fluids from "./Fluids";
import Airway from "./Airway";
import "./Info.css";
import Succinylcholine from "./specifics/Succinylcholine";

function Info(props) {
  return (
    <div className="jumbotron info">
      <p class="h5">Airway</p>
      <Airway age={props.age} weight={props.weight} />
      <p class="h5">Presedation</p>
      <Drug
        name="Midazolam (IV)"
        weight={props.weight}
        range={[0.05, 0.1]}
        more="Max of 0.25 mg/kg"
      />
      <Drug
        name="Midazolam (PO)"
        weight={props.weight}
        range={[0.25, 0.5]}
        more="Max = 20mg"
      />
      <Drug name="Ketamine (IM) [Preop]" weight={props.weight} range={[3, 5]} />
      <Drug name="Ketamine (PO)" weight={props.weight} range={[4, 6]} />
      <p class="h5">Induction</p>
      <Drug name="Propofol" weight={props.weight} range={[2, 3]} />
      <Drug name="Ketamine (IM) [Full]" weight={props.weight} range={[5, 8]} />
      <Drug name="Ketamine (IV)" weight={props.weight} range={[2, 3]} />
      <Drug name="Rocuronium" weight={props.weight} range={[0.6, 1.2]} />
      <Succinylcholine age={props.age} weight={props.weight} />
      <p class="h5">Pain</p>
      <DrugMcg name="Fentanyl (IV)" weight={props.weight} range={[0.5, 1]} />
      <Drug name="Tylenol" weight={props.weight} range={[10, 15]} />
      <Drug
        name="Toradol (Ketorolac)"
        weight={props.weight}
        range={[0.5, 1]}
        more="then 0.5 mg/kg q6h"
      />
      <p class="h5">Antibiotics</p>
      <Drug
        name="Cefazolin (Ancef)"
        weight={props.weight}
        range={[0, 40]}
        more="this was according to Jamie, official documentation says 25-50 mg/kg"
      />
      <Drug name="Vancomycin" weight={props.weight} range={[10, 15]} />
      <Drug
        name="Piperacillin/Tazobac (Zosyn)"
        weight={props.weight}
        range={[37.5, 75]}
      />
      <p class="h5">Antiemetics</p>
      <Drug
        name="Ondansetron (Zofran)"
        weight={props.weight}
        range={[0, 0.15]}
        more="Max 4 mg"
      />
      <Drug
        name="Metoclopramide (Reglan)"
        weight={props.weight}
        range={[0.1, 0.15]}
      />
      <p class="h5">Emergency</p>
      <DrugMcg
        name="Epinephrine (arrest)"
        weight={props.weight}
        range={[0, 10]}
      />
      <DrugMcg
        name="Epinephrine (vasopressor)"
        weight={props.weight}
        range={[0, 1]}
      />
      <DrugMcg name="Atropine" weight={props.weight} range={[10, 20]} />
      <Drug
        name="Glycopyrrolate"
        weight={props.weight}
        range={[0.01, 0.15]}
        more="NMB reversal"
      />
      <p class="h5">Fluids</p>
      <Fluids weight={props.weight} />
    </div>
  );
}

export default Info;

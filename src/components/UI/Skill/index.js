import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.css";
const Skill = (props) => {
  return (
    <div
      className="d-flex align-items-center mtb-10 mx-auto"
      style={{ width: "175px" }}
    >
      <div className="skillContainer">
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            textColor: props.textColor,
            pathColor: props.pathColor,
          })}
        />
      </div>

      <div className="mlr-10">
        <p className="font-16 bold-500 textColor mtb-10"> {props.skillName} </p>
        <p className="font-16 bold-500 grey mtb-10"> {props.description} </p>
      </div>
    </div>
  );
};
export default Skill;

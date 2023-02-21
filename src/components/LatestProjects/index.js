import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import calculator from "../../assets/projects/calculator.jpg";
import Button from "../UI/Button";

import "./style.css";

const LastestProjects = (props) => {
  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
      data-aos="zoom-in-up"
    >
      <Card className="flexRow flexCol align-center justify-sb">
        <div className="projectPortfolioContainer">
          <SmallHeading text="portfolios" />
          <MediumHeading
            style={{ textTransform: "uppercase" }}
            text="Latest Projects"
          />
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
            <Button label="Portfolios"></Button>
          </div>
        </div>
        <div className="projectImgContainer">
          <a href="https://main--guileless-rabanadas-8ab878.netlify.app/">
            <img  src={calculator} alt="" />
          </a>
        </div>
      </Card>
    </div>
  );
};
export default LastestProjects;

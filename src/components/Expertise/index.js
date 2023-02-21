import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../../style";
import me from "../../assets/images/me-left2.jpg";
import SocialConnect from "../UI/SocialConnect";
import "./style.css";

/**
 * @author
 * @function Expertise
 **/

const percentage = 70;

const Expertise = (props) => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row justify-content-md-between">
        <div className="col-5 d-none d-md-block">
          <div data-aos="fade-right">
            <img
              src={me}
              alt-=""
              style={{
                widht: "70px",
                height: "430px",
              }}
            />
            <SocialConnect style={{ position: "absolute", bottom: "-40px" }} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* <div style={{ marginRight: "24px" }}> */}
          <div>
            <SmallHeading text="Expertise" />
            <MediumHeading text="Special Skills" />
          </div>
          <Card
            style={{
              padding: "30px",
              // width: "450px",
              margin: "100px auto",
              // marginRight: "50px",
              // position: "relative",
              zIndex: 1,
            }}
            data-aos="flip-up"
          >
            <div className="flexRow align-center">
              <div style={{ width: "80px", height: "80px" }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: colors.primaryColor,
                    pathColor: colors.primaryColor,
                  })}
                />
              </div>
              <h2 className="textColor mlr-10">Development</h2>
            </div>
            <p className="grey mtb-10 font-12">
              JavaScript is one of the greatest programming language.
            </p>
          </Card>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Expertise;

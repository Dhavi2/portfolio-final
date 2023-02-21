import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import Skill from "../UI/Skill";
import { colors } from "../../style";
import SmallHeading from "../UI/SmallHeading";
import me from "../../assets/images/me-left2.jpg";
import "./style.css";

const Specializing = (props) => {
  const skills = [
    {
      skillName: "HTML/CSS",
      desc: "Hands on experience in Html/Css",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#f2a154",
    },
    {
      skillName: "Bootstrap",
      desc: "Hands on experience in Html/Css",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#00af91",
    },
    {
      skillName: "jQuery",
      desc: "Hands on experience in Html/Css",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },
    {
      skillName: "Javascript",
      desc: "Hands on experience in Html/Css",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#00af91",
    },
   
    {  
      skillName: "React JS",
      desc: "Hands on experience in Html/Css",
      value: 50,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
   
    



  ];

  return (
    <>
      <div className="container">
        <Card style={{ padding: "50px" }}>
          <SmallHeading text="What I do" />
          <MediumHeading text="Specializing In" />
          {/* <div
            data-aos="fade-up"
            className="flexRow wrap justify-sb"
            style={{ padding: "50px" }}
          > */}
          <div
            data-aos="fade-up"
            className="d-flex"
            // style={{ padding: "50px" }}
          >
            {skills.map((skill, index) => (
              <Skill
                key={index}
                skillName={skill.skillName}
                desc={skill.desc}
                value={skill.value}
                textColor={colors.primaryColor}
                pathColor={skill.pathColor}
              />
            ))}
            {/* <div className="S_Phot">
              <img
                src={me}
                style={{ height: "400px", width: "300px" }}
                alt=""
              />
            </div> */}
          </div>
        </Card>
      </div>
    </>
  );
};
export default Specializing;

import React from "react";
import socialIcons from "../../../assets/social-icon";
import "./style.css";

const SocialConnect = (props) => {
  return (
    <div className="socialConnect">
      <span className="textColor font-12">Follow me on:</span>
      <a className="socialLink" href="#">
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a className="socialLink" href="#">
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a className="socialLink" href="#">
        <img src={socialIcons.youtube} alt="" />
      </a>
      <a className="socialLink" href="#">
        <img src={socialIcons.linkedin} alt="" />
      </a>
    </div>
  );
};
export default SocialConnect;

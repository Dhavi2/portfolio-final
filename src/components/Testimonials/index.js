import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import testimonialsLeft from "../../assets/images/testimonials-01.jpg";
import testimonialsRight from "../../assets/images/testimonials-02.jpg";
import profilePicture from "../../assets/images/testimonial-pic.jpg";
import Card from "../UI/Card";
import "./style.css";
const Testimonials = (props) => {
  return (
    <div className="container">
      <div data-aos="fade-down">
        <SmallHeading text="Testimonials" />
        <MediumHeading text="What people say" />
      </div>
      <div
        className="row align-center justify-content-between"
        style={{ padding: "50px 0 " }}
      >
        <div data-aos="fade-left" className="col-2 testimonialImgContainer">
          <img src={testimonialsLeft} alt="" />
        </div>
        <div className="col-12 col-lg-7">
          <Card data-aos="zoom-in" className="myCard">
            <div className="flexRow align-center">
              <div className="profileImgContainer">
                <img src={profilePicture} alt="" />
              </div>

              <div className="mlr-10">
                <p className="primaryColor font-16">ASHISH RAJ</p>
                <p className="textColor font-14 bold-700">FRONTEND DEVELOPER</p>
              </div>
            </div>
            <p className="mtb-10 grey">
            Front-end developers are the coders of all the user-facing elements of websites,
             web applications, and mobile applications. 
             They interpret the needs of the company and its customers and create easy-to-use, 
             interactive web apps. Front-end developers must be adept at both programming languages and design techniques.
            </p>
          </Card>
        </div>

        <div data-aos="fade-right" className="col-2 testimonialImgContainer">
          <img src={testimonialsRight} alt="" />
        </div>
      </div>
      <Card className="m-auto contactCard">
        <p className="text-center font-12 mtb-10">
          Have any project in mind ?{" "}
          <span className="primaryColor">Say Hello At </span>
        </p>
        <p className="text-center Email">shivamashish7230@gmail.com</p>
      </Card>
    </div>
  );
};
export default Testimonials;

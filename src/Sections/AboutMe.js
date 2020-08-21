import React from "react";

const AboutMe = () => {
  return (
    <section className="row center-xs start-sm middle-sm" id="About">
      <div className="oval"></div>
      <div className="oval orange"></div>
      <div className="profilePic col-sm-offset-1"></div>
      <div className="col-xs-11 col-sm-5 col-sm-offset-1 ">
        <h1 className="title">
          {" "}
          I'm <span>Andrew Elliott</span>{" "}
        </h1>
        <p>
          Wowwww i love to dance. Do you like to dance? You can also{" "}
          <a href="#Contact">contact me</a>.
        </p>
      </div>
    </section>
  );
};
export default AboutMe;

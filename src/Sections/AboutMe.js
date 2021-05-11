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
          My name is <span>Andrew Elliott</span>{" "}
        </h1>
        <p>
          Welcome to my website! First and foremeost, I am an ambassador for Jesus Christ, husband, and a Computer Engineering graduate from North Dakota State University!
          I made this website for you to share more information about myself. Scroll down to learn more! Feel free to 
          {" "}
          <a href="#Contact">contact me </a> 
          if you have any questions or want to chat!
        </p>
      </div>
    </section>
  );
};
export default AboutMe;

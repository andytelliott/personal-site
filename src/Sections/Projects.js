import React from "react";
import Project from "../components/Project";

const Projects = () => {
  const myProjects = [
    {
      title: "My Personal Website",
      description: "The website you are currently looking at was created from scratch using React.js. I started building this website in August of 2020 and is a working progress.",
      image: "React_symbol.png",
    },
    {
      title: "Parts Inventory System",
      description: "This system was my capstone project at NDSU and was created to locate over 2,000 parts on a shelf in the Electrical and Computer Engineering building. It consists of 2 Raspberry Pi's that communicate wirelessly; one connected to a GUI and the other connected to the LEDs. Click the picture to find out more!",
      image: "PartsInventory.png",
    },
  ];
  return (
    <section id="Projects">
      <div className="containerX">
        <div className="row">
          <h2 className="col-xs-12 sectionTitle">Projects</h2>
        </div>
      </div>
      <ul className="containerX">
        {myProjects.map((myProject) => (
          <Project
            key={myProject.title}
            image={myProject.image}
            title={myProject.title}
            description={myProject.description}
          />
        ))}
      </ul>
    </section>
  );
};
export default Projects;

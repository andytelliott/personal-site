import React from "react";
import Project from "../components/Project";

const Projects = () => {
  const myProjects = [
    {
      title: "Vertical Jump",
      description: "AEWF awef ef aw fwfawef waef",
      image: "Vertical.png",
    },
    {
      title: "Vertoo",
      description: "AEWF awef ef aw fwfawef waef",
      image: "Vertical.png",
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

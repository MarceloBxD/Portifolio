import React from "react";
import weatherPhoto from "../../assets/images/weatherP.jpeg";
import imcImg from "../../assets/images/imc.png";
import crudImg from "../../assets/images/crud.jpeg";
import "../../styles/components/technologiescontainer.sass";

export const ProjectsCard = () => {
  const projects = [
    {
      name: "IMC",
      description: "Cálculo IMC",
      image: `${imcImg}`,
      link: "https://google.com",
    },
    {
      name: "Github Explorer",
      description: "Procurar por perfis do Github",
      image: "",
      link: "https://github-stats-users.netlify.app/",
    },
    {
      name: "Crud c/ Firebase",
      description: "Cadastro feito com o banco de dados com Firebase",
      image: crudImg,
      link: "https://google.com",
    },
    {
      name: "Clima tempo",
      description: "Projeto de clima atual",
      image: weatherPhoto,
      link: "https://weatherprojectmarcelo.netlify.app/",
    },
  ];

  return (
    <section className="technologies-container">
      <div className="technologies-grid">
        {projects.map((project) => (
          <div className="technology-card" id={project.name} key={project.name}>
            <img src={project.img} />
            <div className="tech-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link}>{project.link}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

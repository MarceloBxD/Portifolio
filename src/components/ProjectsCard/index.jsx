import React from "react";

// Photos
import weatherPhoto from "../../assets/images/weatherP.jpeg";
import imcImg from "../../assets/images/imc.png";
import crudImg from "../../assets/images/crud.jpeg";
import githubImg from "../../assets/images/github.png";

// Styles
import "../../styles/components/technologiescontainer.sass";

export const ProjectsCard = () => {
  const projects = [
    {
      name: "IMC",
      description: "Cálculo IMC (Índice de Massa Corporal)",
      image: imcImg,
      link: "https://github.com/MarceloBxD/react-calc-imc",
    },
    {
      name: "Github Explorer",
      description: "Procurar por perfis existentes no Github",
      image: githubImg,
      link: "https://github-stats-users.netlify.app/",
    },
    {
      name: "Crud c/ banco de dados não relacional do Firebase",
      description: "Autenticação de usuário e cadastro de dados",
      image: crudImg,
      link: "https://github.com/MarceloBxD/projectCadastro",
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
            <div className="img">
              <img className="img" src={project.image} />
            </div>
            <div className="description">
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

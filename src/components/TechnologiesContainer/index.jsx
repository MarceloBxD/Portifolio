import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import "../../styles/components/technologiescontainer.sass";

export const TechnologiesContainer = () => {
  const technologies = [
    {
      id: "html",
      name: "HTML5",
      icon: <DiHtml5 />,
      text: "Linguagem de marcação, usado diariamente por milhões de pessoas para construção de sites.",
    },
    {
      id: "css",
      name: "CSS3",
      icon: <DiCss3 />,
      text: "Usada para estilizar o site, dar vida ao que o usuário enxerga.",
    },
    {
      id: "js",
      name: "JavaScript",
      icon: <DiJsBadge />,
      text: "Linguagem de programação utilizados nos navegadores, e utilizado para ajudar na lógica por trás de tudo.",
    },
    {
      id: "node",
      name: "Node.js",
      icon: <DiNodejs />,
      text: "Ajuda na intergração do Front-end com o Back-end, podendo assim criar programas mais complexos.",
    },
    {
      id: "mysql",
      name: "MySQL",
      icon: <DiMysql />,
      text: "Banco de dados utilizados para armazenar informações e reter dados dos usuários.",
    },
    {
      id: "react",
      name: "React",
      icon: <DiReact />,
      text: "Framework utilizado, com uma proposta um pouco diferente do HTML5 e CSS3 padrão, porém ajuda muito na organização dos projetos, trazendo a experiência de componentização.",
    },
  ];

  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tech-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

import React from "react";
import { ProjectsCard } from "../ProjectsCard";
import "../../styles/components/technologiescontainer.sass";

export const ProjectsContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Projetos</h2>
      <section className="technologies-grid">
        <div className="technology-card">
          <ProjectsCard />
        </div>
      </section>
    </section>
  );
};

import React from "react";
import { Networks } from "../Networks";
import { InformationContainer } from "../InformationContainer";
import Avatar from "../../assets/images/eu.jpg";

import "../../styles/components/sidebar.sass";

export const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Img Profile" />
      <p className="title">Desenvolvedor Front-end</p>
      <Networks />
      <InformationContainer />
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

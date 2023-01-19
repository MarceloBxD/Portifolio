import React from "react";
import { Networks } from "../Networks";
import { InformationContainer } from "../InformationContainer";
import Avatar from "../../assets/images/eu.jpg";
import cv from "../../files/curriculo.pdf";

import "../../styles/components/sidebar.sass";

export const SideBar = () => {
  const downloadFile = () => {
    const link = document.createElement("a");

    link.href = cv;
    link.setAttribute("download", "Cv - Marcelo Bracet.pdf");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Img Profile" />
      <p className="title">Desenvolvedor Front-end</p>
      <Networks />
      <InformationContainer />
      <a href="" onClick={() => downloadFile()} className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import "../../styles/components/networks.sass";

const socialNetworks = [
  { name: "Linkedin", icon: <FaLinkedin /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "Instagram", icon: <FaInstagram /> },
];

export const Networks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="#" id={network.name} key={network.name} className="social-btn">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

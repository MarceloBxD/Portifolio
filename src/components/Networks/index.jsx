import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import "../../styles/components/networks.sass";

const socialNetworks = [
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/marcelo-bracet-b51938223/",
  },
  { name: "Github", icon: <FaGithub />, link: "https://github.com/MarceloBxD" },
  { name: "Instagram", icon: <FaInstagram />, link: "#" },
];

export const Networks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          id={network.name}
          key={network.name}
          className="social-btn"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

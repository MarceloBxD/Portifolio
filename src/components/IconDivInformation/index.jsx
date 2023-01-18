import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";

export const IconDivInformation = () => {
  const valuesInformation = [
    { title: "Telefone", value: "(21) 99491-9288", icon: <AiFillPhone /> },
    {
      title: "E-mail",
      value: "marcelo.bracet1@gmail.com",
      icon: <AiOutlineMail />,
    },
    {
      title: "Localização",
      value: "Rio de Janeiro",
      icon: <AiFillEnvironment />,
    },
  ];

  return (
    <section id="information">
      {valuesInformation.map((item) => (
        <div class="info-card" key={item.title}>
          <a id={item.title} href="icon">
            {item.icon}
          </a>
          <div class="info-values">
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

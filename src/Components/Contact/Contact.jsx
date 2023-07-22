import React from "react";
import AnimatedDivider from "../Shared/AnimatedDivider";
import { Fade, Bounce } from "react-reveal";

function Contact() {
  return (
    <section
      id="contact-me"
      className="px-10 sm:px-0 w-full flex items-center justify-center bg-backgroundColor"
    >
      <div className="text-center sm:pt-20 pt-0" style={{ width: "650px" }}>
        <Bounce Right>
          <h1 className="text-5xl sm:text-7xl pb-2">Contactame</h1>
        </Bounce>

        <AnimatedDivider scrollPositionOffset={3680} speedMultiplier={1} />

        <Fade bottom>
          <div className="text-xl sm:text-2xl leading-relaxed">
            <p>Manda tu email a</p>
            <a
              href="mailto:jonatanelizaldegomez@gmail.com"
              className="font-bold"
            >
              jonatanelizaldegomez@gmail.com
            </a>
            <p className="pt-5">o llama</p>
            <p className="font-bold">+52-443-386-6522</p>
          </div>
        </Fade>
        <AnimatedDivider scrollPositionOffset={4000} speedMultiplier={1} />
        <div className="flex items-center justify-center gap-10">
          <a
            href="https://github.com/Jonatan-Elizalde-Gomez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.svg"
              alt="Icono 1"
              className="w-10 h-10"
            />
          </a>

          <a
            href="src/assets/download.svg"
            target="_blank"
            rel="noopener noreferrer"
            download="CV - Jonatan Elizalde Gomez"
          >
            <img
              src="/downloadWhite.svg"
              alt="Icono 1"
              className="w-10 h-10"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/jonatan-elizalde-gomez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin.svg"
              alt="Icono 1"
              className="w-8 h-8"
            />
          </a>
        </div>
        <p className="pt-10 text-sm">2023. Jonatan Elizalde Gomez</p>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";
import AnimatedDivider from "../Shared/AnimatedDivider";
import { Fade, Bounce } from "react-reveal";
import Skills from "./Skills";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="px-10 sm:px-0 w-full flex items-center justify-center mt-20 bg-backgroundColor pb-10"
    >
      <div className="text-center" style={{ width: "650px" }}>
        <Bounce Right>
          <h1 className="text-5xl sm:text-7xl">Acerca de mi</h1>
        </Bounce>

        <AnimatedDivider scrollPositionOffset={250} speedMultiplier={5.3} />

        <Fade bottom>
          <div className="pb-10 flex justify-center ">
            <img
              src="https://avatars.githubusercontent.com/u/109509631?v=4"
              alt="Imagen recortada en circulo"
              className="h-40 w-40 rounded-full sm:mt-0 mt-5"
            />
          </div>
          <h1 className="text-3xl">Jonatan Elizlade Gomez</h1>
          <p className="text-justify text-lg pt-5">
            Soy un estudiante de software con una gran pasion por la tecnologia
            y el aprendizaje. Me considero una persona proactiva, con fuertes
            habilidades de comunicacion y una profunda curiosidad por adquirir
            nuevas habilidades y conocimientos. Me esfuerzo por estar al dia con
            las ultimas tendencias tecnologicas y siempre estoy buscando nuevas
            formas de mejorar mis habilidades. Me gusta trabajar en equipo y
            creo que los mejores resultados se logran a traves de la
            colaboracion entre personas. Me gusta usar mi creatividad para crear
            soluciones innovadoras.
          </p>
        </Fade>

        <Skills />
      </div>
    </section>
  );
}

export default AboutMe;

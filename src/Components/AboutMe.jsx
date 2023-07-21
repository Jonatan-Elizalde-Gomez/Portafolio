import React from "react";
import AnimatedDivider from "./AnimatedDivider";
import { Fade, Bounce } from "react-reveal";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="px-10 sm:px-0 w-full flex items-center justify-center mt-20 bg-backgroundColor"
    >
      <div className="text-center" style={{ width: "650px" }}>
        <Bounce Right>
          <h1 className="text-5xl sm:text-7xl">Acerca de mi</h1>
        </Bounce>

        <AnimatedDivider scrollPositionOffset={260} speedMultiplier={1}/>

        <Fade bottom>
          <p className="text-justify text-lg pt-5">
            Soy un estudiante de software con una gran pasión por la tecnología
            y el aprendizaje. Me considero una persona proactiva, con fuertes
            habilidades de comunicación y una profunda curiosidad por adquirir
            nuevas habilidades y conocimientos. Me esfuerzo por estar al día con
            las últimas tendencias tecnológicas y siempre estoy buscando nuevas
            formas de mejorar mis habilidades. Me gusta trabajar en equipo y
            creo que los mejores resultados se logran a través de la
            colaboración entre personas. Me gusta usar mi creatividad para crear
            soluciones innovadoras.
          </p>
        </Fade>
      </div>
    </section>
  );
}

export default AboutMe;

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
          <h1 className="text-3xl">Jonatan Elizalde Gomez</h1>
          <p className="text-justify text-lg pt-5">
            Soy un apasionado desarrollador web con una firme dedicación por la
            tecnología y el aprendizaje continuo. Mi proactividad, habilidades
            comunicativas y sed de conocimiento me han impulsado a mantenerme al
            tanto de las últimas tendencias tecnológicas, siempre en busca de
            oportunidades para perfeccionar mis habilidades. Disfruto
            colaborando en equipo y creo firmemente en que la innovación surge
            de la creatividad conjunta, aplicando soluciones ingeniosas para
            alcanzar los mejores resultados.
          </p>
        </Fade>

        <Skills />
      </div>
    </section>
  );
}

export default AboutMe;

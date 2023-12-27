import React from "react";
import AnimatedDivider from "../Shared/AnimatedDivider";
import { Fade, Bounce } from "react-reveal";
import Skills from "./Skills";
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section
      id="about-me"
      className="px-10 lg:px-0 w-full flex items-center justify-center mt-20 bg-backgroundColor pb-10"
    >
      <div className="text-center" style={{ width: "650px" }}>
        <Bounce Right>
          <h1 className="text-5xl lg:text-7xl"> {t('aboutMe')} </h1>
        </Bounce>

        <AnimatedDivider scrollPositionOffset={250} speedMultiplier={5.3} />

        <Fade bottom>
          <div className="pb-10 flex justify-center ">
            <img
              src="https://avatars.githubusercontent.com/u/109509631?v=4"
              alt="Imagen recortada en circulo"
              className="h-40 w-40 rounded-full lg:mt-0 mt-5"
            />
          </div>
          <h1 className="text-3xl">Jonatan Elizalde Gomez</h1>
          <p className="text-justify text-lg pt-5"> {t('aboutMeInfo')} </p>
        </Fade>

        <Skills />
      </div>
    </section>
  );
}

export default AboutMe;

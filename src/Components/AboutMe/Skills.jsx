import React from "react";
import { Fade, Bounce, Slide } from "react-reveal";
import ItemBox from "./ItemBox";
import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();

  const frontEnd = [
    "JavaScript",
    "HTML5",
    "ReactJS",
    "Angular",
    "TypeScript",
    "CSS3",
    "Angular",
    "Tailwind",
  ];

  const backEnd = ["Express", "MySQL", "MongoDB", "Firebase"];

  const tools = ["Github", "Postman", "Tailwind", "Bootstrap"];

  return (
    <section className="pt-16 text-center">
      <Slide left>
        <div className="pb-5">
          <div className="flex justify-center">
            <hr className="w-full lg:w-1/2 mb-5 border-letters" />
          </div>
          <h1 className="text-5xl lg:text-5xl">{t('skills')}</h1>
          <div className="flex justify-center">
            <hr className="w-full lg:w-1/2 mt-5 border-letters" />
          </div>
        </div>
      </Slide>

<div className="w-full flex justify-center">

      <div className="flex flex-col items-center w-[300px] md:w-[100%] md:px-14" >
        <Bounce>
          <img src="/code.svg" alt="Icono 1" className="w-32 h-32" />
        </Bounce>
        <Fade>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 pb-20">
            {frontEnd.map((texto, index) => (
              <ItemBox key={index} texto={texto} />
              ))}
          </div>
        </Fade>
      </div>
              </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="flex flex-col items-center" style={{ width: "300px" }}>
          <Bounce>
            <img
              src="/database.svg"
              alt="Icono 1"
              className="w-28 h-28 mb-5"
            />
          </Bounce>

          <Fade>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 pb-20">
              {backEnd.map((texto, index) => (
                <ItemBox key={index} texto={texto} />
              ))}
            </div>
          </Fade>
        </div>
        <div className="flex flex-col items-center" style={{ width: "300px" }}>
          <Bounce>
            <img
              src="/wrench.svg"
              alt="Icono 1"
              className="w-28 h-28 mb-5"
            />
          </Bounce>

          <Fade>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 pb-20">
              {tools.map((texto, index) => (
                <ItemBox key={index} texto={texto} />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Skills;

import React from "react";
import AnimatedDivider from "../Shared/AnimatedDivider";
import { Bounce } from "react-reveal";
import Card from "./Card";
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();


  const cards = [
    {
      imagen: "/pixelboost.jpg",
      titulo: "PixelBoost",
      parrafo: t('pixelboost'),
      link1: "https://github.com/Jonatan-Elizalde-Gomez/pixelboost",
      link2: "https://main--glittering-kringle-6d5487.netlify.app/#/",
      mostrarIcono1: true,
      mostrarIcono2: true,
    },
    {
      imagen: "/salle.jpg",
      titulo: "Salle AroundMe",
      parrafo: t('salleApp'),
      link1: "https://github.com/Jonatan-Elizalde-Gomez/SalleAroundMe_FrontEnd",
      link2: "https://guileless-gumption-be7270.netlify.app/",
      mostrarIcono1: true,
      mostrarIcono2: true,
    },
    {
      imagen: "/codeven.jpg",
      titulo: "Coven",
      parrafo: t('coven'),
      link1: "https://github.com/Jonatan-Elizalde-Gomez/pagina-web-coven",
      link2: "https://jonatan-elizalde-gomez.github.io/pagina-web-coven/",
      mostrarIcono1: true,
      mostrarIcono2: true,
    },
  
    {
      imagen: "/geo.jpg",
      titulo: "Flutter App Map",
      parrafo: t('flutterApp'),
      link1: "https://github.com/Jonatan-Elizalde-Gomez/Flutter_App_Map",
      link2: "",
      mostrarIcono1: true,
      mostrarIcono2: false,
    },
  
    // Agrega mas objetos de cartas segun sea necesario
  ];
  return (
    <section
      id="portafolio"
      className="px-10 lg:px-0 w-full flex items-center justify-center bg-[#001730] lg:pt-40 pt-20 pb-28"
      style={{ top: "-80px", position: "relative" }}
    >
      <div className="text-center w-[650px] lg:w-auto">
        <Bounce Right>
          <h1 className="text-5xl lg:text-7xl">{t('portfolio')}</h1>
        </Bounce>
        <AnimatedDivider scrollPositionOffset={2000} speedMultiplier={3} />

          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
      </div>
    </section>
  );
}

export default Projects;

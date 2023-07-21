import React from "react";
import AnimatedDivider from "./AnimatedDivider";
import { Fade, Bounce } from "react-reveal";
import Card from "./Card";

const cards = [
  {
    imagen: "src/assets/codeven.jpg",
    titulo: "Coven",
    parrafo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit eu ex vulputate euismod.",
    link1: "https://github.com/Jonatan-Elizalde-Gomez/pagina-web-coven",
    link2: "https://jonatan-elizalde-gomez.github.io/pagina-web-coven/",
  },
  {
    imagen: "src/assets/pixelboost.jpg",
    titulo: "PixelBoost",
    parrafo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit eu ex vulputate euismod.",
    link1: "https://github.com/Jonatan-Elizalde-Gomez/pixelboost",
    link2: "https://main--glittering-kringle-6d5487.netlify.app/#/",
  },

  // Agrega más objetos de cartas según sea necesario
];

function Projects() {
  return (
    <section
      id="portafolio"
      className="px-10 sm:px-0 w-full flex items-center justify-center bg-backgroundColor py-10"
    >
      <div className="text-center" style={{ width: "650px" }}>
        <Bounce Right>
          <h1 className="text-5xl sm:text-7xl">Portafolio</h1>
        </Bounce>

        <AnimatedDivider scrollPositionOffset={700} speedMultiplier={1} />

        <Fade bottom>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Projects;

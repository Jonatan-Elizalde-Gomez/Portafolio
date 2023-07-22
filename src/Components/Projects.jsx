import React from "react";
import AnimatedDivider from "./AnimatedDivider";
import { Fade, Bounce } from "react-reveal";
import Card from "./Card";

const cards = [
  {
    imagen: "src/assets/codeven.jpg",
    titulo: "Coven",
    parrafo:
      "Un proyecto de gestion de un sembradio con funciones completas de seguimiento de productos, mermas, compras, ventas y clientes. Diseñado con Java EE y Glassfish, la pagina web presenta una interfaz de usuario atractiva. Actualmente, solo se muestra la parte del front-end, mientras que la base de datos se almacena localmente.",
    link1: "https://github.com/Jonatan-Elizalde-Gomez/pagina-web-coven",
    link2: "https://jonatan-elizalde-gomez.github.io/pagina-web-coven/",
  },
  {
    imagen: "src/assets/pixelboost.jpg",
    titulo: "PixelBoost",
    parrafo:
      "PixelBoost es mi proyecto de maquetado de una pagina web de e-commerce que ofrece servicios para crear y posicionar empresas digitalmente. Desarrollado con React y Tailwind. ",
    link1: "https://github.com/Jonatan-Elizalde-Gomez/pixelboost",
    link2: "https://main--glittering-kringle-6d5487.netlify.app/#/",
  },

  // Agrega mas objetos de cartas segun sea necesario
];

function Projects() {
  return (
    <section
      id="portafolio"
      className="px-10 sm:px-0 w-full flex items-center justify-center bg-[#001730] sm:pt-40 pt-20 pb-28"
      style={{ top: "-80px", position: "relative" }}
    >
      <div className="text-center" style={{ width: "650px" }}>
        <Bounce Right>
          <h1 className="text-5xl sm:text-7xl">Portafolio</h1>
        </Bounce>

        <AnimatedDivider scrollPositionOffset={1200} speedMultiplier={5} />

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

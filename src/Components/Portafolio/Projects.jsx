import React from "react";
import AnimatedDivider from "../Shared/AnimatedDivider";
import { Bounce } from "react-reveal";
import Card from "./Card";

const cards = [
  {
    imagen: "/codeven.jpg",
    titulo: "Coven",
    parrafo:
      "Un proyecto de gestion de un sembradio con funciones completas de seguimiento de productos, mermas, compras, ventas y clientes. Diseñado con Java EE y Glassfish, la pagina web presenta una interfaz de usuario atractiva. Actualmente, solo se muestra la parte del front-end, mientras que la base de datos se almacena localmente.",
    link1: "https://github.com/Jonatan-Elizalde-Gomez/pagina-web-coven",
    link2: "https://jonatan-elizalde-gomez.github.io/pagina-web-coven/",
    mostrarIcono1: true,
    mostrarIcono2: true,
  },
  {
    imagen: "/pixelboost.jpg",
    titulo: "PixelBoost",
    parrafo:
      "PixelBoost es mi proyecto de maquetado de una pagina web de e-commerce que ofrece servicios para crear y posicionar empresas digitalmente. Desarrollado con React y Tailwind. ",
    link1: "https://github.com/Jonatan-Elizalde-Gomez/pixelboost",
    link2: "https://main--glittering-kringle-6d5487.netlify.app/#/",
    mostrarIcono1: true,
    mostrarIcono2: true,
  },

  {
    imagen: "/TodoList.jpg",
    titulo: "TodoList",
    parrafo:
      "Es una aplicación realizada con SwiftUI que funciona como una lista de tareas (To-Do List). Esta aplicación está integrada con Firebase, lo que me permitió implementar permisos de acceso y autenticación de usuarios. De esta manera, cada usuario puede crear, modificar y eliminar sus propias tareas de manera segura y privada en la plataforma.",
    link1: "",
    link2: "",
    mostrarIcono1: false,
    mostrarIcono2: false,
  },

  {
    imagen: "/geo.jpg",
    titulo: "Flutter App Map",
    parrafo:
      "Es una aplicación de Android desarrollada en Flutter que utiliza la API de Google Maps. La aplicación permite a los usuarios realizar recorridos teniendo en cuenta el punto más cercano a su ubicación actual. Utilicé la API de Google Maps para calcular las distancias entre varios puntos y luego determinar cuál es el punto más cercano al usuario. ",
    link1: "https://github.com/Jonatan-Elizalde-Gomez/Flutter_App_Map",
    link2: "",
    mostrarIcono1: true,
    mostrarIcono2: false,
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
      <div className="text-center w-[650px] sm:w-auto">
        <Bounce Right>
          <h1 className="text-5xl sm:text-7xl">Portafolio</h1>
        </Bounce>
        <AnimatedDivider scrollPositionOffset={2000} speedMultiplier={3} />

          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
      </div>
    </section>
  );
}

export default Projects;
